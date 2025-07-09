import { useState } from 'react';
import { Link } from 'react-router';
import { ShoppingCart, UserRound, Menu, X } from 'lucide-react';
import { useEffect } from 'react';
import Logo from '../assets/images/hani-logo.png'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [username, setUserName] = useState()
    useEffect(() => {
        let username = localStorage.getItem("username")
        if (!username) {
            username = ""
        }
        setUserName(username)
    }, [])

    return (
        <nav className="flex flex-col w-full fixed top-0 left-0 shadow-lg z-50">
            {/* Top Banner */}
            <div className="bg-[#EDEDED]">
                <div className="text-black flex flex-col sm:flex-row justify-center items-center p-1.5 text-xs space-y-2 sm:space-y-0 sm:space-x-8">
                    <p className="text-center">
                        Get a <span className='text-[#2A1103] font-bold'>Renew Shea Butter Products</span> with your first purchase! Offer available in cart.<span className="text-[#2A1103] font-bold">   Shop Now!</span>
                    </p>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="flex flex-row justify-around items-center px-6 py-4 bg-[#2A1103] text-white">
                {/* Logo */}
                <img className='w-20 h-5 flex shrink-0' src={Logo} alt="" />
                <Link to={"/"}>
                    {/* <img className='h-[20%] w-[20%]' src={Logo} alt="" /> */}
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8">
                    <Link to={"/"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">HOME</Link>
                    <Link to={"/about-us"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">SHOP</Link>
                    <Link to={"/contact"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">ABOUT US</Link>
                    <Link to={"/signupuser"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">CONTACT</Link>
                </div>

                {/* Icons & Hamburger */}
                <div className="flex items-center space-x-4 md:space-x-6">
                    <Link to={""}>
                        <ShoppingCart className="hover:text-[#D47125]" />
                    </Link>

                    <div className='flex items-center gap-1'>
                        <Link to={"/login"}>
                            <UserRound className="hover:text-[#D47125]" />
                        </Link>
                        {/* <p className='font-bold text-[#D47125] text-lg uppercase'>{username}</p> */}
                    </div>

                    {/* Hamburger menu for mobile */}
                    <button
                        className="md:hidden focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-[#f7c6ab] px-6 py-4 space-y-4 flex flex-col">
                    <Link to={"/"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">HOME</Link>
                    <Link to={"/about-us"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">SHOP</Link>
                    <Link to={"/contact"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">ABOUT US</Link>
                    <Link to={"/signup"} className="hover:text-[#D47125] text-sm font-[outfit] cursor-pointer">CONTACT</Link>
                </div>
            )}
        </nav>
    );
}
