import React from "react";
import { FaTimes, FaShoppingCart, FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductModal = ({
  modalProduct,
  closeModal,
  quantity,
  setQuantity,
  handleAddToCart,
  isAdding,
}) => {
  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={closeModal}
      />
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="bg-white max-w-4xl w-full rounded-xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-xl font-bold font-[display] text-[#2A1103]">Product Details</h2>
            <button
              onClick={closeModal}
              className="text-[#2A1103] hover:text-[#D47125] transition"
            >
              <FaTimes size={20} />
            </button>
          </div>

          <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="flex justify-center">
              <div className="bg-gray-50 p-4 w-full">
                <img
                  src={modalProduct.image}
                  alt={modalProduct.name}
                  className="w-full h-auto max-h-[400px] object-contain "
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold font-[outfit] text-[#2A1103] mb-1">
                  {modalProduct.name}
                </h1>
                {modalProduct.tagline && (
                  <p className="text-sm text-[#2A1103]/70 mb-3">
                    {modalProduct.tagline}
                  </p>
                )}
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-[#D47125]">
                    GH₵{modalProduct.price.toFixed(2)}
                  </span>
                  {modalProduct.oldPrice && (
                    <span className="text-[#2A1103] line-through">
                      GH₵{modalProduct.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 text-sm font-[outfit]">
                <span className="bg-[#D47125] px-3 py-1 text-[#2A1103]">
                  {modalProduct.category}
                </span>
                <span className="bg-[#D47125] px-3 py-1 text-[#2A1103]">
                  {modalProduct.size}
                </span>
              </div>

              <p className="text-[#2A1103] font-[display] leading-relaxed">
                {modalProduct.description ||
                  "This premium product is crafted with the finest natural ingredients to nourish and revitalize your skin and hair."}
              </p>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="block text-sm font-medium font-[outfit] text-[#2A1103]">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-[#D47125] text-[#2A1103] flex items-center justify-center transition"
                  >
                    <FiMinus />
                  </button>
                  <span className="font-medium text-[#2A1103] text-lg w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-[#D47125] text-[#2A1103] flex items-center justify-center transition"
                  >
                    <FiPlus />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleAddToCart(modalProduct)}
                  className="w-full bg-[#2A1103] hover:bg-transparent text-white py-3 
                  font-[outfit] font-medium flex items-center justify-center gap-2 transition 
                  hover:border-[#2A1103] hover:text-[#2A1103] border-2 border-[#2A1103]"
                  disabled={isAdding}
                >
                  <FaShoppingCart />
                  {isAdding
                    ? "Adding..."
                    : `Add to Cart - GH₵ ${(
                        modalProduct.price * quantity
                      ).toFixed(2)}`}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`https://wa.me/233540435713?text=Hi Sheady, I want to order ${modalProduct.name} (Qty: ${quantity})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" py-3 font-[outfit] font-medium flex items-center justify-center gap-2 bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                  >
                    <FaWhatsapp />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+233540435713"
                    className=" py-3 font-[outfit] font-medium flex items-center justify-center gap-2 bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
                  >
                    <FaPhoneAlt />
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;