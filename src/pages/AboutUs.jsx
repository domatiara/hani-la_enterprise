import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../assets/videos/About.mp4"
import { Link } from "react-router";



export default function AboutUs() {
    return (
        <>
            <Navbar />
            {/* Mission Section */}
            <section className="py-20 bg-[#F9F9F9] mt-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img
                                src="https://i.pinimg.com/1200x/2e/32/29/2e32296edefd4526207e512b2c484bde.jpg"
                                alt="Shea butter"
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold font-[display] text-[#2A1103] mb-6">
                                About Us
                            </h2>
                            <p className="text-lg text-[#2A1103] font-[outfit] mb-6 leading-relaxed">
                                Hani-Lah Enterprise is a producer of quality shea butter and related shea products for the general public.
                                We transform carefully selected shea kernels into premium products, including shea butter, pomade, hair food, and a variety of natural soaps.
                                Our soap range features shea soap, moringa soap, baobab soap, black soap, and neem soap, each crafted to deliver unique benefits.

                            </p>
                            <p className="text-lg text-[#2A1103] font-[outfit] leading-relaxed">
                                We are committed to maintaining high production standards to ensure our customers receive safe, effective, and nourishing products.
                                By combining traditional methods with modern innovation, we preserve the natural qualities of our ingredients while enhancing their value.
                                Through our products, we aim to promote healthy living, support local communities, and share the goodness of shea with the world.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-extrabold font-[display] text-[#2A1103] mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-[#2A1103] font-[outfit] mb-6 leading-relaxed">
                                At Hani-Lah Enterprise, our mission is to produce high-quality shea products that deliver exceptional value to our customers.
                                We are committed to transforming raw shea into premium, skin-friendly products through careful and innovative value addition.
                                Our processes combine traditional knowledge with modern techniques to preserve the natural goodness of shea.

                            </p>
                            <p className="text-lg text-[#2A1103] font-[outfit] leading-relaxed">
                                We prioritize quality at every stage, ensuring that our customers receive safe, effective, and reliable products.
                                By promoting the use of locally sourced ingredients, we support sustainable livelihoods and empower our community.
                                Through our dedication to excellence, we aim to become a trusted brand for natural shea-based products.
                            </p>

                        </div>
                        <div className="relative">
                            <img
                                src="https://i.pinimg.com/736x/83/cf/11/83cf11f46bb94371fd79f369a6d7da63.jpg"
                                alt="Handmade soap"
                                className="rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How DirectRent Works Section - NEWLY ADDED */}
            <section className="py-20 bg-[#F9F9F9]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-[display] font-extrabold text-[#2A1103] mb-4">
                            Hani-Lah Shea Products
                        </h2>
                        <p className="text-lg text-[#2A1103] font-[outfit] max-w-3xl mx-auto">
                            Transforming raw shea into premium products through value addition, enriching our customers’ lives with quality and care.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Step 1: List Your Property */}
                        <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
                            <h3 className="text-lg text-[#2A1103] mb-3">1. Pure and Natural</h3>
                            <p className="text-[#2A1103] font-[outfit] text-sm leading-relaxed">
                                We believe in the power of nature's bounty. Our shea butter products are crafted using only the finest, ethically sourced ingredients, ensuring purity and potency with every use.
                            </p>
                        </div>

                        {/* Step 2: Search & Connect */}
                        <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
                            <h3 className="text-lg text-[#2A1103] mb-3">2. Nourishing Formulas</h3>
                            <p className="text-[#2A1103] font-[outfit] text-sm leading-relaxed">
                                Whether you're looking for a gentle cleanser, a rich moisturizer. or pure shea butter for DIY skincare, Hani-lah has you covered, Our products are formulated to nourish and hydrate, leaving your skin soft, smooth, and glowing.
                            </p>
                        </div>

                        {/* Step 3: Secure & Move In */}
                        <div className="text-center p-6 hover:bg-gray-750 transition-all duration-300">
                            <h3 className="text-lg text-[#2A1103] mb-3">3. Variety of Options</h3>
                            <p className="text-[#2A1103] font-[outfit] text-sm leading-relaxed">
                                Explore our diverse range of shea butter products, including soaps, creams, lotions, balms, and more. With options for every skin type and concern, there's something for everyone in the Hani-lah collection.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* End How DirectRent Works Section */}


            {/* Ready to Experience Direct Rentals Section with Video Overlay - NEWLY ADDED */}
            <section className="relative py-20 bg-[#F9F9F9] overflow-hidden flex items-center justify-center mb-7">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline // Important for mobile autoplay
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={About} type="video/mp4" /> {/* Replace with your video path */}
                    Your browser does not support the video tag.
                </video>

                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-black/70 z-10"></div> {/* Darker overlay */}

                {/* Content */}
                <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold font-[display] text-white mb-6 leading-tight">
                        Explore Hani-Lah Shea Products
                    </h2>
                    <p className="text-xl text-white font-[outfit] mb-10 max-w-3xl mx-auto leading-relaxed">
                        Creating high-quality shea products through value addition, combining tradition, innovation, and customer-focused excellence.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/shop"><button className="bg-[#2A1103] border-2 border-[#2A1103] hover:bg-white hover:border-[#2A1103] hover:text-[#2A1103] text-white py-3 px-6 text-sm shadow-lg">
                            SHOP
                        </button></Link>
                        <Link to="/contact">
                            <button className="bg-transparent border-2 border-[#2A1103] text-white hover:text-[#2A1103] hover:bg-white hover:border-[#2A1103] py-3 px-8 text-sm shadow-lg transition-colors duration-300">
                                CONTACT
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
            {/* End Ready to Experience Direct Rentals Section */}

            <Footer />
        </>
    );
}