import { Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from '../assets/images/hani-logo.png'

export default function Footer() {
  return (
    <footer className="bg-[#2A1103] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold font-[outfit] text-white">Hani-Lah Enterprise</h3> */}
            <img className='w-30 h-10 flex shrink-0' src={Logo} alt="" />
            <p className="text-white font-[outfit]">
              Pure science meets natural beauty. Clinically proven botanical skincare for radiant, healthy skin.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-white font-[outfit] hover:text-[#D47125] cursor-pointer transition-colors" />
              <Facebook className="h-5 w-5 text-white font-[outfit] hover:text-[#D47125] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white font-[outfit] hover:text-[#D47125] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-white font-[outfit] hover:text-[#D47125] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-semibold text-white font-[outfit] mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Raw Shea Butter</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Soaps</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Hair Food</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Pomade</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white font-[outfit] mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">FAQ</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Reviews</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white font-[outfit] mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">About Us</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Our Story</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Ingredients</a></li>
              <li><a href="#" className="text-white font-[outfit] hover:text-[#D47125] transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm">
            © 2024 Hani-Lah Enterprise. All rights reserved.
          </p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-white font-[outfit] hover:text-[#D47125] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white font-[outfit] hover:text-[#D47125] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white font-[outfit] hover:text-[#D47125] text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


