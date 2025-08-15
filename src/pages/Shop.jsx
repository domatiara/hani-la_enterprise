'use client';

import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../Content/cart";
import products from "../data/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
// CORRECTED: Import the image correctly as a module. Assuming a correct path.
import shopPageImage from "../assets/images/shop-page.jpg";

const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    AOS.init({ duration: 800 });
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleCategoryChange = (e) => setSelectedCategory(e.target.value);
  const openModal = (product) => {
    setQuantity(1);
    setModalProduct(product);
  };
  const closeModal = () => setModalProduct(null);

  const handleAddToCart = async (product) => {
    setIsAdding(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    addToCart({ ...product, quantity });
    setIsAdding(false);
    closeModal();
    
    toast.success(`${product.name} added to cart`, {
      style: {
        borderRadius: "8px",
        background: "#fff",
        color: "#2A1103",
        fontWeight: "500",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      },
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);
  const categories = ["All", ...new Set(products.map((item) => item.category))];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ToastContainer />
      <Navbar />

      <section className="relative overflow-hidden h-[40vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center">
        {/* CORRECTED: Use the imported image module */}
        <img
          src={shopPageImage}
          alt="Hani-Lah Shea Products"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75 z-10 "></div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Hani-Lah Shea Products
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
            Embrace the Beauty of Shea Butter. <br />
            Discover the secret to radiant, healthy skin with Hani-lah products.
            From luxurious soaps to nourishing creams and pure, raw shea butter,
            our handcrafted creations are designed to pamper your skin with the
            goodness of nature. <br />
            Shop Hani-lah Shea Products today!
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 border-b border-gray-100 bg-white sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="w-full md:w-64">
            <select
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="w-full border border-gray-200 px-4 py-2 rounded-lg text-sm font-[outfit] bg-white text-[#2A1103] 
              focus:outline-none focus:ring-2 focus:ring-[#2A1103] focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="text-sm font-[outfit] text-[#2A1103]">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-white px-4 flex-grow">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="aspect-square bg-gray-100 animate-pulse" />
                  <div className="p-4 space-y-3">
                    <div className="h-4 bg-gray-100 rounded w-3/4" />
                    <div className="h-3 bg-gray-100 rounded w-1/2" />
                    <div className="h-4 bg-gray-100 rounded w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold text-[#2A1103] mb-2">
                No products found
              </h3>
              <p className="text-[#2A1103]">
                Try selecting a different category
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((item) => (
                <ProductCard key={item.id} item={item} openModal={openModal} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Product Modal */}
      {modalProduct && (
        <ProductModal
          modalProduct={modalProduct}
          closeModal={closeModal}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
        />
      )}

      <Footer />
    </div>
  );
};

export default AllProducts;
