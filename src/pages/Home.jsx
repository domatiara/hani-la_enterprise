import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlideshow from "../components/HeroSlideshow";
import ProductCard from "../components/ProductCard";
import CollectionCard from "../components/CollectionCard"; // Import the CollectionCard
import HomeVideo from "../assets/videos/Home.mp4";
import { Link } from "react-router"; // Ensure this import is correct for your react-router version
import React, { useRef } from 'react'; // Import useRef for scrolling
import { Leaf, Shield, Award, Heart } from 'lucide-react';

export default function Home() {
    const products = [
        {
            name: "Chebula Active Serum",
            badge: "Bestseller",
            image: "/images/chebula.jpg",
            description: "Clinically proven to outperform two leading anti-aging serums.",
            rating: 5,
            price: 90,
            buttonLabel: "ADD TO BAG - $90",
        },
        // Add more product objects as needed
    ];

    const collections = [
        {
            title: "HAIR",
            subtitle: "Coconut & Hibiscus",
            imageUrl: "https://assets.unileversolutions.com/v1/131029681.jpg?im=AspectCrop=(320,320);Resize=(320,320)",
            link: "/collections/hair"
        },
        {
            title: "BODY",
            subtitle: "100% Virgin Coconut Oil",
            imageUrl: "https://assets.unileversolutions.com/v1/131029660.jpg?im=AspectCrop=(320,320);Resize=(320,320)",
            link: "/collections/body"
        },
        {
            title: "MEN'S",
            subtitle: "Maracuja & Shea Butter",
            imageUrl: "https://assets.unileversolutions.com/v1/131029668.jpg?im=AspectCrop=(320,320);Resize=(320,320)",
            link: "/collections/men"
        },
        {
            title: "SKIN",
            subtitle: "African Black Soap",
            imageUrl: "https://assets.unileversolutions.com/v1/131029684.jpg?im=AspectCrop=(320,320);Resize=(320,320)",
            link: "/collections/skin"
        },
        {
            title: "BABY & KIDS",
            subtitle: "Mango & Carrot Kids' Line",
            imageUrl: "https://i.pinimg.com/736x/5e/9c/54/5e9c54326b4eca0655a43770dd8171d9.jpg",
            link: "/collections/baby-kids"
        },
        {
            title: "ACCESSORIES",
            subtitle: "Hair Tools & More",
            imageUrl: "https://i.pinimg.com/736x/ba/74/44/ba74445f5a20e2521febafb847d4d2c4.jpg",
            link: "/collections/accessories"
        },
    ];

    // Ref for the scrollable container
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; // Adjust scroll amount as needed
            if (direction === 'left') {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }
    };



    const benefits = [
        {
            icon: Leaf,
            title: "100% Natural Ingredients",
            description: "Pure botanical extracts and plant-based actives with no harmful chemicals or synthetic fragrances."
        },
        {
            icon: Shield,
            title: "Clinically Tested",
            description: "Every formula is rigorously tested for safety and efficacy with proven results in clinical studies."
        },
        {
            icon: Award,
            title: "Award Winning",
            description: "Recognized by beauty experts and dermatologists worldwide for outstanding quality and results."
        },
        {
            icon: Heart,
            title: "Gentle & Effective",
            description: "Suitable for all skin types including sensitive skin, delivering results without irritation."
        }
    ];


    return (
        <>
            <Navbar />
            {/* <HeroSlideshow /> */}

            {/* Welcome Section with Video Overlay */}
            <section
                className="relative w-full h-screen my-10 py-20 bg-[#F9F9F9] overflow-hidden flex items-center justify-center"
            >
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={HomeVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <div className="relative z-20 text-center font-[outfit] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Welcome to Hani-Lah
                        Enterprise
                    </h2>
                    <p className="text-xl text-white mb-10 max-w-3xl mx-auto leading-relaxed">
                        We produce shea butter, shea pomade, hair food, black soap, baobab & moringa soaps, and lip balm — delivering nationwide.
                    </p>
                    <a
                        href="#shop"
                        className="bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white px-8 py-3 transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-white"
                    >
                        Shop Now
                    </a>
                </div>
            </section>

            {/* Discover Collections Section */}
            <section className="py-16 bg-white relative mt-5">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-extrabold font-[display] text-center text-[#2A1103] mb-4">
                        Discover the best selling collections from Hani-lah Shea Products
                    </h2>
                    <p className="text-center text-[#2A1103] font-[outfit] mb-12">
                        Explore our curated selection of top-rated products.
                    </p>

                    <div className="relative">
                        {/* Left Arrow */}
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none z-30"
                            aria-label="Scroll left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Collection Cards Container (scrollable) */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
                        >
                            {collections.map((collection, index) => (
                                <div key={index} className="flex-none w-72 md:w-80 lg:w-96">
                                    <CollectionCard
                                        title={collection.title}
                                        subtitle={collection.subtitle}
                                        imageUrl={collection.imageUrl}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Right Arrow */}
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-75 rounded-full p-2 shadow-md hover:bg-opacity-100 focus:outline-none z-30"
                            aria-label="Scroll right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>

            {/* Shea Butter Hero Section (first image overlay, keep this as is) */}
            <div
                className="relative w-full h-[50vh] min-h-[300px] max-h-[600px] bg-cover bg-center mt-20 mb-10"
                style={{ backgroundImage: 'url("https://i.pinimg.com/1200x/0b/12/13/0b1213c5cfdf2f64f6035c1f3cfcbb0f.jpg")' }}
            >
                <div className="absolute inset-0 z-10 flex items-center justify-start p-4 sm:p-8 md:p-12 lg:p-16">
                    <div className="bg-[#D8D0BE] bg-opacity-50 p-4 sm:p-6 md:p-8 lg:p-10 w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-xl text-[#2A1103]">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[display] mb-4">Embrace the Beauty of Shea Butter</h1>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                            Discover the secret to radiant, healthy skin with Hani-lah products. From Shea products, luxurious soaps, to nourishing creams and pure, raw shea butter, our handcrafted creations are designed to pamper your skin with the goodness of nature.
                        </p>
                    </div>
                </div>
            </div>

            <section className="py-8 lg:py-10 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold font-[display] text-[#2A1103] mb-4">
                            Why Choose Hani-Lah Shea Products?
                        </h2>
                        <p className="text-xl text-[#2A1103] font-[outfit] max-w-3xl mx-auto">
                            We combine the wisdom of nature with the precision of science to create skincare that truly works.
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 font-[outfit] gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center group">
                                <div className="mb-6">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                        <benefit.icon className="h-8 w-8 text-[#2A1103]" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold text-[#2A1103] mb-3">{benefit.title}</h3>
                                <p className="text-[#2A1103] leading-relaxed">{benefit.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            {/* MODIFIED: READY TO EXPERIENCE HANI-LAH PRODUCTS SECTION - Image Background with Text on Right */}
            <section
                className="relative py-20 overflow-hidden flex items-center justify-center mt-20 h-[500px] md:h-[600px] lg:h-[700px]" // Adjusted height
            >
                {/* Image on the left side */}
                <div
                    className="absolute inset-y-0 left-0 h-[70%] w-full lg:w-full md:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://truebotanicals.com/cdn/shop/files/Homepage_Skincare_Quiz_1.jpg?v=1745607154&width=960")' }}
                >
                    {/* Optional: Overlay on the image if needed for contrast */}
                    {/* <div className="absolute inset-0 bg-black opacity-10"></div> */}
                </div>

                {/* Content on the right side */}
                <div className="relative z-20 flex justify-end items-center w-full px-4 sm:px-6 lg:px-8 h-full mb-40">
                    <div className="text-left max-w-lg md:ml-auto md:w-1/2 p-4 md:p-8 bg-white md:bg-transparent rounded-lg md:rounded-none">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-[display] text-[#2A1103] mb-6 leading-tight">
                            Ready to Experience Hani-Lah Products? {/* Changed color for highlight */}
                        </h2>
                        <p className="text-xl text-[#2A1103] font-[outfit] mb-10 leading-relaxed">
                            Experience the difference that natural skincare can make by shopping Hani-lah Shea products today. With convenient online ordering and prompt delivery, it's never been easier to treat your skin to the goodness it deserves.
                        </p>
                        <div className="flex flex-col font-[outfit] sm:flex-row gap-4 justify-start"> {/* Align buttons to start */}
                            <button className="bg-[#2A1103] border-2 border-[#2A1103] hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103] text-white py-3 w-[30%] text-sm shadow-lg">
                                SHOP
                            </button>
                            <Link to="/contact">
                                <button className="bg-transparent border-2 border-[#2A1103] text-[#2A1103] hover:bg-gray-100 hover:border-[#2A1103] py-3 px-8 text-sm shadow-lg transition-colors duration-300">
                                    CONTACT
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <div className="text-center mb-16">
                <div className="bg-white h-[50%] border lg:p-10 ">
                    <h3 className="text-2xl lg:text-3xl font-bold font-[display] text-[#2A1103] mb-4">
                        Join 50,000+ Happy Customers
                    </h3>
                    <p className="text-[#2A1103] font-[outfit] text-lg mb-8">
                        Experience the difference that pure, science-backed botanicals can make for your skin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <div className="flex items-center text-[#2A1103] justify-center space-x-1 ">
                            <span>⭐⭐⭐⭐⭐</span>
                            <span className="text-[#2A1103] ml-2">4.8/5 from 12,000+ reviews</span>
                        </div>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    );
}