import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { usePathname } from 'next/navigation';

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('Header Component', () => {
  beforeEach(() => {
    // Default mock implementation
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo and site title', () => {
    render(<Header />);
    const logoText = screen.getByText(/Secure/i);
    expect(logoText).toBeInTheDocument();
    expect(screen.getByText(/Choice/i)).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    const links = [
      'VPN & Security',
      'Insurance',
      'Personal Finance',
      'Blog',
      'Compare',
    ];

    links.forEach((linkText) => {
      // For desktop, these are visible
      expect(screen.getAllByText(linkText)[0]).toBeInTheDocument();
    });
  });

  it('renders the "Privacy Guide" CTA button', () => {
    render(<Header />);
    const ctaButton = screen.getAllByText('Privacy Guide')[0];
    expect(ctaButton).toBeInTheDocument();
  });

  it('toggles the mobile menu when the button is clicked', () => {
    render(<Header />);

    // Find the toggle button (initially 'Open menu')
    const toggleButton = screen.getByLabelText('Open menu');
    expect(toggleButton).toBeInTheDocument();

    // Click to open
    fireEvent.click(toggleButton);

    // Now the mobile menu should be open (button becomes 'Close menu')
    const closeButton = screen.getByLabelText('Close menu');
    expect(closeButton).toBeInTheDocument();

    // Click again to close
    fireEvent.click(closeButton);
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  describe('Active Link Logic', () => {
    it('highlights the active link based on exact pathname match', () => {
      // Mock pathname to be one of the links
      (usePathname as jest.Mock).mockReturnValue('/blog');

      render(<Header />);

      const blogLink = screen.getByRole('link', { name: /Blog/i });

      // The active link has 'text-white bg-gray-800' classes
      expect(blogLink).toHaveClass('text-white');
      expect(blogLink).toHaveClass('bg-gray-800');

      // Verify another link is NOT active
      const financeLink = screen.getByRole('link', { name: /Personal Finance/i });
      expect(financeLink).not.toHaveClass('text-white bg-gray-800');
      expect(financeLink).toHaveClass('text-gray-400');
    });

    it('highlights the active link when pathname starts with href (sub-routes)', () => {
      (usePathname as jest.Mock).mockReturnValue('/compare/tool-a-vs-tool-b');

      render(<Header />);

      const compareLink = screen.getByRole('link', { name: /Compare/i });
      expect(compareLink).toHaveClass('text-white bg-gray-800');
     });

     it('does not highlight when path does not match', () => {
      (usePathname as jest.Mock).mockReturnValue('/about');

      render(<Header />);

      const blogLink = screen.getByRole('link', { name: /Blog/i });
      expect(blogLink).not.toHaveClass('text-white bg-gray-800');
     });
  });
});
