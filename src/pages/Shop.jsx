import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";



export default function Shop() {
    return (
        <>
            <Navbar />
            {/* Hero Section with Image Overlay */}
            <section className="relative overflow-hidden h-[40vh] md:h-[75vh] lg:h-[80vh] flex items-center justify-center">
                <img src="https://i.pinimg.com/736x/e5/51/4e/e5514e6b5598a313f939255371ba71bb.jpg" alt="" className="absolute inset-0 w-full h-full object-center" />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/75 z-10 "></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Hani-Lah Shea Products
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                        Embrace the Beauty of Shea Butter. <br />

                       Discover the secret to radiant, healthy skin with Hani-lah products. From luxurious soaps to nourishing creams and pure, raw shea butter, our handcrafted creations are designed to pamper your skin with the goodness of nature. <br />

                        Shop Hani-lah Shea Products today!
                    </p>
                </div>
            </section>  

            <div className="text-center px-4 sm:px-8 md:px-12 lg:px-20"></div>
            <h1 className="text-3xl text-[#2A1103] sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold mt-8 mb-4">Best sellers</h1>
            <h4 className="text-sm text-[#2A1103] sm:text-base font-bold mt-2 text-center">SHOP NOW
                <hr className="mx-auto mt-1 w-22 border-t-3 border-[#2A1103]" /></h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 py-10 sm:px-6 md:px-10 lg:px-12 ">
                {/* {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))} */}
                {[1, 2, 3, 4,].map((product, index) => (
                    <ProductCard key={index} {...product} />))}
            </div>
            <Footer />
        </>
    );
};