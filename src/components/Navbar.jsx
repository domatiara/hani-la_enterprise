'use client';

import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, UserRound, Menu, X } from 'lucide-react';
import Logo from '../assets/images/hani-logo.png';
import { CartContext } from "../Content/cart";
import CartModal from "../components/CartModal";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUserName] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // CORRECTED: Use useContext to get the 'items' array from the CartContext
  const { items } = useContext(CartContext);

  // CORRECTED: Calculate the total number of items from the 'items' array
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    let storedUsername = localStorage.getItem("username") || "";
    setUserName(storedUsername);
  }, []);

  return (
    <nav className="flex flex-col w-full fixed top-0 left-0 shadow-lg z-50">
      {/* Top Banner */}
      <div className="bg-[#EDEDED]">
        <div className="text-black flex flex-col sm:flex-row justify-center items-center p-1.5 text-xs space-y-2 sm:space-y-0 sm:space-x-8">
          <p className="text-center">
            Get a <span className='text-[#2A1103] font-bold'>Renew Shea Butter Products</span> with your first purchase! Offer available in cart.
            <span className="text-[#2A1103] font-bold"> Shop Now!</span>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex flex-row justify-around items-center px-6 py-4 bg-[#2A1103] text-white">
        {/* Logo wrapped in Link */}
        <Link to='/'>
          {/* Using a placeholder image URL for demonstration */}
          <img className='w-20 h-5 flex shrink-0' src={Logo} alt="Hani-La Enterprise Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to='/' className="hover:text-[#D47125] text-sm font-[outfit]">HOME</Link>
          <Link to='/shop' className="hover:text-[#D47125] text-sm font-[outfit]">SHOP</Link>
          <Link to='/about-us' className="hover:text-[#D47125] text-sm font-[outfit]">ABOUT US</Link>
          <Link to='/contact' className="hover:text-[#D47125] text-sm font-[outfit]">CONTACT</Link>
        </div>

        {/* Icons & Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6 cursor-pointer">
          {/* Shopping Cart button with count badge */}
          <div
            className="relative cursor-pointer group"
            onClick={() => setIsCartOpen(true)}
            title=""
          >
            <FiShoppingCart size={20} className="hover:text-[#ec8733] transition-colors" />
            {/* CORRECTED: Conditionally render the badge if totalItems is greater than 0 */}
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#ec8733] text-white text-xs h-4 min-w-[16px] flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
            <span className="absolute hidden group-hover:block -right-2 top-full mt-2 text-xs px-2 py-1 whitespace-nowrap bg-white border-2 border-[#2A1103] shadow-lg text-[#2A1103]">
              View Cart
            </span>
          </div>

          <button 
            className="md:hidden text-[#2A1103] hover:text-[#ec8733] transition-colors" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f7c6ab] px-6 py-4 space-y-4 flex flex-col">
          <Link to='/' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D47125] text-sm font-[outfit]">HOME</Link>
          <Link to='/shop' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D47125] text-sm font-[outfit]">SHOP</Link>
          <Link to='/about-us' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D47125] text-sm font-[outfit]">ABOUT US</Link>
          <Link to='/contact' onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D47125] text-sm font-[outfit]">CONTACT</Link>
        </div>
      )}
      {/* Cart Modal */}
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </nav>
  );
}
