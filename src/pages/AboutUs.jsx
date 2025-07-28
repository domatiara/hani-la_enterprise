import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



export default function AboutUs () {
    return (
        <>
    <Navbar />
     {/* Hero Section with Image Overlay */}
            <section className="relative overflow-hidden h-[60vh] md:h-[75vh] lg:h-[90vh] flex items-center justify-center">
                <img src="https://assets.unileversolutions.com/v1/127247980.jpg?im=AspectCrop=(1024,460);Resize=(1024,460)" alt="Modern Apartment in Kasoa, Central Region, Ghana" className="absolute inset-0 w-full h-full object-cover" />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/75 z-10"></div>
                <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        About Hani-Lah
                    </h1>
                    <p className="text-xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
                       Embrace the Beauty of Shea Butter. <br />

                       Discover the secret to radiant, healthy skin with Hani-lah products. From luxurious soaps to nourishing creams and pure, raw shea butter, our handcrafted creations are designed to pamper your skin with the goodness of nature. <br />

                        Shop Hani-lah Shea Products today!
                    </p>
                </div>
            </section>
    <Footer />
    </>
    );
}