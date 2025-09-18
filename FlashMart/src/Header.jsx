// src/Header.jsx
import React from "react";
import { FaFacebookF, FaTwitter, FaBloggerB, FaShoppingCart } from "react-icons/fa";

const Header = ({ onLoginClick }) => {
  return (
    <header className="w-full bg-black text-white">
      {/* Top Line */}
      <div
        className="w-full flex justify-between items-center px-8 py-3 text-base border-b border-yellow-700 font-sans"
        style={{ fontFamily: 'Inter, Arial, sans-serif', letterSpacing: '0.03em', fontWeight: 500 }}
      >
        <p
          className="tracking-wide text-gray-200"
          style={{ fontSize: '1.05rem', lineHeight: '2.2rem' }}
        >
          All prices displayed are <span className="font-extrabold text-yellow-500">EXCLUSIVE</span> of VAT.
        </p>

        <div className="flex items-center space-x-6">
          {/* Login / Register Button */}
   <button
  onClick={onLoginClick} // this will open the modal
  className="hover:text-yellow-500 transition-colors duration-200 font-semibold"
  style={{ fontSize: '0.75rem', lineHeight: '2.2rem', background: 'none', border: 'none', cursor: 'pointer' }}
>
  Login / Register
</button>

          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="hover:text-yellow-500 transition-colors duration-200 font-semibold"
            style={{ fontSize: '0.75rem', lineHeight: '2.2rem' }}
          >
            Installment Plans
          </a>

          <span className="text-gray-400">|</span>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-yellow-500 transition-colors duration-200 font-semibold"
            style={{ fontSize: '0.75rem', lineHeight: '2.2rem' }}
          >
            <FaShoppingCart className="text-lg" /> My Cart
          </a>
        </div>
      </div>

      {/* Branding & Social Icons */}
      <div className="w-full flex justify-between items-center px-6 py-4">
        <div>
          <h1 className="text-4xl font-extrabold">
            <span className="text-yellow-600">Flash</span>Mart
          </h1>
          <p className="text-xs uppercase tracking-wide">
            FlashMart ONLINE STORE
          </p>
          <p className="text-xs">
            FLASHMART PLAZA | GALLE PLAZA | SHOPPING MALL
          </p>
        </div>

        <div className="text-right">
          <p className="uppercase text-xs">[ Online Store ]</p>
          <p className="text-xl font-bold text-yellow-600">+94 714 576 576</p>
          <div className="flex justify-end gap-2 mt-1">
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-yellow-600"><FaFacebookF /></a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-yellow-600"><FaTwitter /></a>
            <a href="#" className="bg-gray-700 p-2 rounded hover:bg-yellow-600"><FaBloggerB /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="w-full bg-black border-t border-gray-700">
        <div className="w-full flex justify-between items-center px-6 py-3">
          <ul className="flex gap-6 text-sm font-semibold">
            <li><a href="#" className="text-yellow-600">HOME</a></li>
            <li><a href="#" className="hover:text-yellow-600">ABOUT US</a></li>
            <li><a href="#" className="hover:text-yellow-600">ALL PRODUCTS ▾</a></li>
            <li><a href="#" className="hover:text-yellow-600">SERVICES</a></li>
            <li><a href="#" className="hover:text-yellow-600">PAYMENT METHODS</a></li>
            <li><a href="#" className="hover:text-yellow-600">GALLERY</a></li>
            <li><a href="#" className="hover:text-yellow-600">CONTACT US</a></li>
          </ul>
          <div className="flex">
            <input
              type="text"
              placeholder="SEARCH HERE"
              className="px-3 py-1 text-black"
            />
            <button className="bg-yellow-600 px-4 py-1">Search</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
