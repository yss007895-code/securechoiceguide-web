import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { usePathname } from 'next/navigation';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(),
}));

describe('Header Component', () => {
  const mockLinks = [
    { href: '/guides#security', label: 'VPN & Security' },
    { href: '/guides#insurance', label: 'Insurance' },
    { href: '/guides#finance', label: 'Personal Finance' },
    { href: '/blog', label: 'Blog' },
    { href: '/compare', label: 'Compare' },
  ];

  beforeEach(() => {
    // Default pathname for most tests
    (usePathname as jest.Mock).mockReturnValue('/');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the logo and desktop navigation links', () => {
    render(<Header />);

    // Check for Logo
    // The logo link contains multiple elements: SVG and a span with nested span.
    // The accessible name might be constructed from the text content.
    // Text content is "SecureChoiceGuide".
    // However, depending on how JSDOM/testing-library computes the name, it might be tricky.
    // Let's find the link that contains the text "Secure" and "Choice".
    const logoLink = screen.getByRole('link', { name: /Secure\s*Choice\s*Guide/i });
    expect(logoLink).toBeInTheDocument();

    // Check for Desktop Links
    mockLinks.forEach((link) => {
        // We use getAllByText because links might be duplicated in mobile menu (though mobile is hidden)
        // However, in the initial render, the mobile menu is not open, so they should be in the DOM but maybe hidden via CSS?
        // Actually, the mobile menu is conditionally rendered: {open && (...)}.
        // So initially, only desktop links exist.
        const linkElement = screen.getByRole('link', { name: link.label });
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveAttribute('href', link.href);
    });

    // Check for "Privacy Guide" button (desktop version)
    const privacyGuideButtons = screen.getAllByText('Privacy Guide');
    // Expect at least one to be visible/present (desktop one is hidden sm:block, but in JSDOM window size might not trigger hidden class logic visually, but elements are present)
    expect(privacyGuideButtons.length).toBeGreaterThan(0);
  });

  it('applies active styling to the current link', () => {
    (usePathname as jest.Mock).mockReturnValue('/blog');
    render(<Header />);

    const blogLink = screen.getByRole('link', { name: 'Blog' });

    // Check if it has the active class (bg-gray-800 text-white)
    expect(blogLink).toHaveClass('text-white');
    expect(blogLink).toHaveClass('bg-gray-800');

    // Check non-active link
    const financeLink = screen.getByRole('link', { name: 'Personal Finance' });
    expect(financeLink).not.toHaveClass('bg-gray-800');
    expect(financeLink).toHaveClass('text-gray-400');
  });

  it('toggles mobile menu when hamburger button is clicked', () => {
    render(<Header />);

    // Mobile menu should not be present initially
    const mobileMenuLinks = screen.queryAllByRole('link', { name: 'VPN & Security' });
    // Should find only 1 (the desktop one)
    expect(mobileMenuLinks).toHaveLength(1);

    // Find the toggle button
    const toggleButton = screen.getByLabelText('Open menu');
    fireEvent.click(toggleButton);

    // Now mobile menu should be open
    // We expect 2 links now (desktop + mobile)
    const linksAfterToggle = screen.getAllByRole('link', { name: 'VPN & Security' });
    expect(linksAfterToggle).toHaveLength(2);

    // Close menu
    const closeButton = screen.getByLabelText('Close menu');
    fireEvent.click(closeButton);

    // Mobile menu should be gone
    expect(screen.queryAllByRole('link', { name: 'VPN & Security' })).toHaveLength(1);
  });

  it('closes mobile menu when a link is clicked', () => {
    render(<Header />);

    // Open menu
    const toggleButton = screen.getByLabelText('Open menu');
    fireEvent.click(toggleButton);

    // Find a link in the mobile menu
    // Since there are two "Blog" links now, we need to pick the one in the mobile menu.
    // The mobile menu container has class "md:hidden pb-4 pt-2 animate-fade-in"
    // But testing-library encourages querying by accessible roles/names.
    // We can just click the last one, which should be the mobile one in DOM order.
    const blogLinks = screen.getAllByRole('link', { name: 'Blog' });
    const mobileBlogLink = blogLinks[blogLinks.length - 1];

    fireEvent.click(mobileBlogLink);

    // Menu should be closed (back to 1 link)
    expect(screen.queryAllByRole('link', { name: 'Blog' })).toHaveLength(1);
  });
});
