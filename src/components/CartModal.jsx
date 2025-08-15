import React, { useContext } from "react";
import { CartContext } from "../Content/cart";
import { FaTimes, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router"; // Use react-router-dom for proper Link
// Use react-toastify consistently instead of react-hot-toast
import { toast } from "react-toastify";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Helper component for a single cart item, making the main modal cleaner
const CartItem = ({ item, onRemove }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="flex items-center p-4 hover:bg-gray-50 transition"
  >
    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="ml-4 flex-1 min-w-0">
      <h4 className="text-sm font-medium font-[outfit] text-[#2A1103] truncate">
        {item.name}
      </h4>
      <p className="text-xs text-[#2A1103] mt-1">{item.size}</p>
      <div className="flex items-center justify-between mt-2">
        <span className="text-sm font-[outfit] text-[#2A1103]">Qty: {item.quantity}</span>
        <span className="font-medium font-[outfit] text-[#ec8733]">
          GH₵ {(item.price * item.quantity).toFixed(2)}
        </span>
      </div>
    </div>
    <button
      onClick={() => onRemove(item.id)}
      className="ml-4 p-2 text-[#2A1103] hover:text-[#ec8733] transition"
      aria-label="Remove item"
    >
      <FaTrashAlt className="w-4 h-4" />
    </button>
  </motion.div>
);

const CartModal = ({ isOpen, onClose }) => {
  // CORRECTED: Destructuring `items` and `removeItem` from the context
  const { items, removeItem } = useContext(CartContext);

  // Use `items` here instead of `cartItems`
  const subtotal = items && Array.isArray(items)
    ? items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  const handleCheckoutClick = () => {
    // The toast function call is updated to use react-toastify's API
    toast("Complete your order via WhatsApp or phone", {
      position: "bottom-center",
      style: {
        background: "#1b5059",
        color: "white",
        borderRadius: "12px",
        fontFamily: "Montserrat",
      },
      icon: "�",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-xl flex flex-col"
          >
            {/* Header */}
            <div className="px-5 py-4 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 className="text-xl font-semibold font-[outfit] text-[#2A1103]">Your Cart</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-[#e2ab8b] transition"
                aria-label="Close cart"
              >
                <FaTimes className="text-[#2A1103] w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Use `items` here */}
              {items && items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="w-20 h-20 bg-[#bb7d59] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-[#2A1103]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium font-[outfit] text-[#2A1103] mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-[#2A1103] font-[display] mb-6">
                    Browse our collection to get started
                  </p>
                  <Link
                    to="/shop"
                    onClick={onClose}
                    className=" px-5 py-2.5 font-[outfit] font-medium transitionn bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                  >
                    Shop Products
                  </Link>
                </div>
              ) : (
                <motion.div layout className="divide-y divide-gray-100">
                  {/* Use `items` here and `removeItem` */}
                  {items && items.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onRemove={removeItem}
                    />
                  ))}
                </motion.div>
              )}
            </div>

            {/* Footer */}
            {/* Use `items` here */}
            {items && items.length > 0 && (
              <div className="border-t border-gray-100 p-5 bg-white sticky bottom-0">
                <div className="flex justify-between items-center mb-5">
                  <span className="font-medium font-[outfit] text-[#2A1103]">Subtotal</span>
                  <span className="text-lg font-bold font-[outfit] text-[#ec8733]">
                    GH₵ {subtotal.toFixed(2)}
                  </span>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleCheckoutClick}
                    className="w-full py-3 font-medium bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                  >
                    Proceed to Checkout
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <a
                      href="tel:+233540435713"
                      className="flex items-center justify-center gap-2 py-2.5 font-medium bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                    >
                      <Phone className="w-4 h-4" />
                      Call
                    </a>
                    <a
                      href="https://wa.me/233540435713?text=Hi Hani-Lah Enterprise, I want to order from my cart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 font-medium bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </a>
                  </div>

                  <Link
                    to="/shop"
                    onClick={onClose}
                    className="block text-center text-[#2A1103] hover:text-[#ec8733] transition mt-3 text-sm font-medium"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartModal;
