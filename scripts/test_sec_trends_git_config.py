import sys
import unittest
from unittest.mock import patch, MagicMock
import os

# Mock google.genai before importing the script
sys.modules["google"] = MagicMock()
sys.modules["google.genai"] = MagicMock()
sys.modules["google.genai.types"] = MagicMock()

# Add scripts directory to path to import the module
sys.path.append(os.path.dirname(__file__))

import generate_sec_trends

class TestGitConfig(unittest.TestCase):
    @patch("generate_sec_trends.subprocess.run")
    @patch("generate_sec_trends.reset_guides_data")
    @patch("generate_sec_trends.genai.Client")
    def test_git_config_hardcoded_defaults(self, mock_client, mock_reset, mock_subprocess):
        # Setup
        # We want to skip the loop, so we patch SEC_TRENDS to empty list
        with patch("generate_sec_trends.SEC_TRENDS", []):
            generate_sec_trends.main()

        # Filter calls to git config
        git_config_calls = [
            call for call in mock_subprocess.call_args_list
            if len(call[0]) > 0 and isinstance(call[0][0], list) and "git" in call[0][0] and "config" in call[0][0]
        ]

        self.assertTrue(len(git_config_calls) >= 2)

        # Verify email (default)
        self.assertEqual(git_config_calls[0][0][0][2], "user.email")
        self.assertEqual(git_config_calls[0][0][0][3], "agent@securechoiceguide.com")

        # Verify name (default)
        self.assertEqual(git_config_calls[1][0][0][2], "user.name")
        self.assertEqual(git_config_calls[1][0][0][3], "SecureChoiceGuide Content Agent")

    @patch("generate_sec_trends.subprocess.run")
    @patch("generate_sec_trends.reset_guides_data")
    @patch("generate_sec_trends.genai.Client")
    def test_git_config_env_vars(self, mock_client, mock_reset, mock_subprocess):
        # Set environment variables
        with patch.dict(os.environ, {
            "GIT_USER_EMAIL": "test@example.com",
            "GIT_USER_NAME": "Test User"
        }):
            with patch("generate_sec_trends.SEC_TRENDS", []):
                generate_sec_trends.main()

            git_config_calls = [
                call for call in mock_subprocess.call_args_list
                if len(call[0]) > 0 and isinstance(call[0][0], list) and "git" in call[0][0] and "config" in call[0][0]
            ]

            self.assertTrue(len(git_config_calls) >= 2)

            # Verify email (overridden)
            self.assertEqual(git_config_calls[0][0][0][3], "test@example.com")
            # Verify name (overridden)
            self.assertEqual(git_config_calls[1][0][0][3], "Test User")

if __name__ == "__main__":
    unittest.main()
