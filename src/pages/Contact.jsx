import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function Contact() {
    return (
        <>
            <Navbar />
            <div className="bg-lightgray text-[#2A1103]">
                <div className="max-w-6xl mx-auto text-[#2A1103] px-4 py-12 mt-15">
                    <h2 className="text-3xl font-bold font-[display] text-center mb-4">Get in Touch</h2>
                    <p className="text-center mb-10 font-[outfit]">
                        We're here to help you with all your cosmetic needs. Reach out to us through any of the channels below.
                    </p>

                    <form className="grid md:grid-cols-2 gap-6 bg-gray-100 text-[#2A1103] p-10 shadow">
                        <input type="text" placeholder="Full Name" className="p-3 border " />
                        <input type="email" placeholder="Email Address" className="p-3 border" />
                        <input type="tel" placeholder="Phone Number" className="p-3 border md:col-span-2" />
                        <select className="p-3 rounded border text-[#2A1103] md:col-span-2">
                            <option>General Inquiry</option>
                            <option>Support</option>
                            <option>Feedback</option>
                        </select>
                        <textarea placeholder="Tell us how we can help you..." rows="4" className="p-3 border md:col-span-2"></textarea>
                        <button className="bg-[#2A1103] text-white  px-8 py-3 font-semibold transition-all duration-300 ease-in-out shadow-lg  hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103] border-2 md:col-span-2">
                            Send Message
                        </button>
                    </form>

                    <div className="gap-6 mt-12">
                        <div className='bg-[#2A1103] text-white p-6 shadow'>
                            <h4 className="text-2xl font-[display] mb-2">Contact Information</h4>
                            <p className="font-[outfit]"><strong>Location:</strong> 123 Northern Region, Tamale</p>
                            <p className="font-[outfit]"><strong>Phone:</strong> +233 (546) 394-370</p>
                            <p className="font-[outfit]"><strong>Email:</strong> abdulwahabhanifa2@gmail.com</p>
                        </div>

                        <div>  
                            <h4 className="text-2xl font-[display] mb-6 mt-10">Quick Contact</h4>
                            <button className="w-full bg-[#331402] text-white py-2 mb-2">Chat on WhatsApp</button>
                            {/* <button className="w-full bg-[#2A1103] text-white py-2 mb-2">Live Chat Support</button> */}
                        </div>

                        <div className="text-[#2A1103]">
                            <h4 className="text-2xl font-[display] mb-2 mt-4">Business Hours</h4>
                            <p className="font-[outfit] ">Mon - Fri: 9:00 AM - 6:00 PM</p>
                            <p className="font-[outfit]">Saturday: 10:00 AM - 4:00 PM</p>
                            <p className="font-[outfit]">Sunday: Closed</p>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-3xl font-[display] mb-4 text-center">Platform Support</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-[#2A1103] text-white p-6 text-center">
                                <h4 className="font-[outfit] text-white">FAQ</h4>
                                <p className="text-white font-[outfit] text-sm">Find quick answers to common questions.</p>
                                <button className="text-white font-[display] mt-2">View FAQ</button>
                            </div>
                            <div className="bg-[#2A1103] text-white p-6 text-center">
                                <h4 className="font-[outfit] text-white">Technical Support</h4>
                                <p className="text-white font-[outfit] text-sm">Get help with issues and platform functionality.</p>
                                <button className="text-white font-[display] mt-2">Get Support</button>
                            </div>
                            <div className="bg-[#2A1103] text-white p-6 text-center">
                                <h4 className="font-[outfit] text-white">Partnership</h4>
                                <p className="text-white font-[outfit] text-sm">Interested in partnering with us?</p>
                                <button className="text-white font-[display] mt-2">Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}