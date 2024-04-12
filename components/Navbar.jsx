import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* Logo */}
            <Link href="/" className="flex items-center py-5 px-2 text-gray-200 hover:text-gray-400">
            
                <span className="font-bold">DMV Bangla</span>
              
            </Link>

            {/* Primary Nav - Hidden on mobile, shown on md and larger screens */}
            <div className="hidden md:flex items-center space-x-1">
                <Link href="/mock_test">
                <div className="py-5 px-3 cursor-pointer hover:text-gray-400">Mock Test</div>
              </Link>
              <Link href="/about">
                <div className="py-5 px-3 cursor-pointer hover:text-gray-400">About</div>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Toggle visibility based on isMobileMenuOpen state */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/mock_test">
              <span>Mock Test</span>
            </Link>
          </div>
          <div className="py-2 px-4 text-sm hover:bg-gray-700 cursor-pointer" onClick={() => setIsMobileMenuOpen(false)}>
            <Link href="/about">
              <span>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
