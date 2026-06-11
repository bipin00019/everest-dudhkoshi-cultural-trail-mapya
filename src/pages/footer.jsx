// Footerpage.jsx
import React from 'react';

const Footerpage = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-8">

        {/* Contact Info */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Reach Us</h3>
          <p>
            Phone:{" "}
            <a href="tel:+9852827333" className="hover:text-orange-500 transition-colors duration-300">
              9852827333
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@mapyadudhkoshimun.gov.np" className="hover:text-orange-500 transition-colors duration-300">
              info@mapyadudhkoshimun.gov.np
            </a>
          </p>
          <p>Solukhumbu, Nepal</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About Us", "Blog", "Contact Us", "Trekking"].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-orange-500 transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">Follow Us</h3>
          <p className="hover:text-orange-500 transition-colors duration-300 cursor-default">
            Social media links coming soon!
          </p>
          {/* Add icons here later */}
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-6 mt-10 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
        © 2025, All rights reserved
      </div>
    </footer>
  );
};

export default Footerpage;
