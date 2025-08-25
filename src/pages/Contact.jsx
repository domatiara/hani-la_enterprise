import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Inline SVG icons to avoid external dependencies like react-icons
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2A1103]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const MailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2A1103]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 9a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10z" />
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2A1103]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#2A1103]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const PaperPlaneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 00.149 1.485.999.999 0 00.744.275h12.5a1 1 0 00.894-1.553l-7-14z" />
    </svg>
);

export default function Contact() {
    const [submitted, setSubmitted] = useState(false);

    // Simple handler to simulate a successful form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted!");
        setSubmitted(true);
        // In a real application, you would send the form data to a server here.
        // Example: fetch('/api/contact', { method: 'POST', body: new FormData(e.target) });
    };

    const contactInfo = [
        { icon: <PhoneIcon />, title: "Call Us", details: ["+233 (546) 394-370"], link: "tel:+233546394370" },
        { icon: <MailIcon />, title: "Email Us", details: ["abdulwahabhanifa2@gmail.com"], link: "mailto:abdulwahabhanifa2@gmail.com" },
        { icon: <LocationIcon />, title: "Visit Us", details: ["Sinai Street, Kalpohin, Tamale"], link: "#" },
        { icon: <ClockIcon />, title: "Business Hours", details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"], link: null }
    ];

    return (
        <>
            <Navbar />

            <main className="min-h-screen font-[outfit] text-[#2A1103]">
                {/* Hero Section */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-6xl mx-auto px-4 text-center mt-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[display] mb-4 ">
                            Get in Touch with Hani-Lah
                        </h1>
                        <p className="text-lg md:text-xl text-[#2A1103] max-w-3xl mx-auto">
                            We're here to help you with all your cosmetic needs. Reach out to us through any of the channels below.
                        </p>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form Section */}
                        <div className="lg:order-2 bg-white p-8 shadow-md border border-gray-200">
                            <h2 className="text-3xl font-bold font-[display] mb-6">Send us a message</h2>
                            {submitted ? (
                                <div className="bg-white border text-[#2A1103] p-4 mb-6">
                                    Thank you! We have received your message and will respond shortly.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input type="text" placeholder="Full Name" required className="w-full p-3 border border-gray-300 focus:ring-[#2A1103] focus:border-transparent" />
                                    <input type="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 focus:ring-[#2A1103] focus:border-transparent" />
                                    <input type="tel" placeholder="Phone Number" className="w-full p-3 border border-gray-300 focus:ring-[#2A1103] focus:border-transparent" />
                                    <textarea placeholder="Tell us how we can help you..." rows="5" required className="w-full p-3 border border-gray-300  focus:ring-[#2A1103] focus:border-transparent"></textarea>
                                    <button
                                        type="submit"
                                        className="flex items-center justify-center w-full bg-[#2A1103] text-white px-8 py-3 font-semibold transition-all duration-300 ease-in-out shadow-lg hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103] border-2"
                                    >
                                        <PaperPlaneIcon />
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information & Hours Section */}
                        <div className="lg:order-1 space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                                {contactInfo.map((card, index) => (
                                    <a key={index} href={card.link || undefined} className="group p-6 hover transition-shadow duration-300 ">
                                        <div className="flex items-start">
                                            <div className="p-3 rounded-full group-hover:bg-[#2A1103]hover:text-white transition-colors duration-300 bg-white border-2 border-[#2A1103] text-sm shadow-lg text-[#2A1103] ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]">
                                                {card.icon}
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-xl font-bold font-[display] mb-1">{card.title}</h3>
                                                <div className="text-sm text-[#2A1103] space-y-0.5">
                                                    {card.details.map((detail, i) => (
                                                        <p key={i}>{detail}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Quick Connect and Social Media */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                                <h3 className="text-2xl font-bold font-[display] mb-4">Quick Connect</h3>
                                <p className="text-[#2A1103] mb-6">Chat with us or follow our journey on social media.</p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a
                                        href="https://wa.me/+233546394370"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-[#2A1103] text-white font-semibold py-3 text-center transition-all duration-300 ease-in-out shadow-lg hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103] border-2"
                                    >
                                        Chat on WhatsApp
                                    </a>
                                    {/* You can add social links here if needed */}
                                </div>
                            </div>

                            {/* Platform Support */}
                            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                                <h3 className="text-2xl font-bold font-[display] mb-4 text-center">Platform Support</h3>
                                <div className="grid md:grid-cols-3 gap-6 text-center">
                                    <div className="bg-[#2A1103] text-white p-6 rounded-lg shadow-inner">
                                        <h4 className="font-bold mb-1">FAQ</h4>
                                        <p className="text-sm">Find quick answers to common questions.</p>
                                    </div>
                                    <div className="bg-[#2A1103] text-white p-6 rounded-lg shadow-inner">
                                        <h4 className="font-bold mb-1">Technical Support</h4>
                                        <p className="text-sm">Get help with issues and platform functionality.</p>
                                    </div>
                                    <div className="bg-[#2A1103] text-white p-6 rounded-lg shadow-inner">
                                        <h4 className="font-bold mb-1">Partnership</h4>
                                        <p className="text-sm">Interested in partnering with us?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}
