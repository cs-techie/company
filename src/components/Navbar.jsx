import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'How it works', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  // Dynamic theme colors based on scroll state
  const isTransparent = !isScrolled && isHomePage;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-transparent border-transparent text-white'
          : 'bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E5E5E5] text-[#141414] shadow-xs'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-6 md:px-12 max-w-[1280px] mx-auto">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span
            className={`font-serif font-bold text-2xl tracking-tight transition-colors ${
              isTransparent ? 'text-white drop-shadow-sm' : 'text-[#141414]'
            }`}
          >
            Kernalytics
          </span>
          <span
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              isTransparent ? 'bg-[#EDFFE3]' : 'bg-[#1F514C]'
            }`}
          ></span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium px-4 py-2 rounded-xl transition-all duration-200 inline-block ${
                    isActive
                      ? isTransparent
                        ? 'bg-[#EDFFE3] text-[#1F514C] font-bold shadow-md'
                        : 'bg-[#1F514C]/10 text-[#1F514C] font-semibold'
                      : isTransparent
                      ? 'text-white/90 hover:text-white hover:bg-white/15'
                      : 'text-[#636363] hover:text-[#141414] hover:bg-[#E5E5E5]/70'
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Primary Green / Mint CTA */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className={`hidden sm:inline-flex items-center justify-center text-xs font-sans font-bold rounded-full px-6 py-2.5 transition-all hover:scale-105 ${
              isTransparent
                ? 'bg-[#EDFFE3] text-[#1F514C] hover:bg-white shadow-lg'
                : 'bg-[#1F514C] text-white hover:bg-[#153B37] shadow-xs'
            }`}
          >
            Get in touch
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? 'text-white hover:bg-white/20'
                : 'text-[#141414] hover:bg-[#E5E5E5]/70'
            }`}
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#E5E5E5] bg-[#FAFAFA] text-[#141414] px-6 py-4 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block py-2.5 text-sm font-medium rounded-xl px-4 transition-colors ${
                  isActive ? 'bg-[#1F514C] text-white font-semibold' : 'text-[#141414] hover:bg-[#E5E5E5]/70'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-center w-full mt-4 bg-[#1F514C] text-white text-xs font-sans font-semibold py-3 rounded-full hover:bg-[#153B37]"
          >
            Get in touch
          </Link>
        </div>
      )}
    </nav>
  );
}
