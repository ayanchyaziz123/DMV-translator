import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16"> {/* Added mt-16 for margin-top */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} DMV Bangla. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-gray-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
