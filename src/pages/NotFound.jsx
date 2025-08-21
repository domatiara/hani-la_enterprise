import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";



/**
 * A simple 404 page component for handling routes that do not exist.
 * The styling is consistent with the Hani-Lah website theme,
 * featuring a centered layout and a call-to-action button
 * to guide users back to the homepage.
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content area, centered vertically and horizontally */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-md mx-auto text-center font-[outfit] text-[#2A1103]">
          {/* Large, prominent 404 text */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold font-[display] mb-4">
            404
          </h1>

          {/* Page not found heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            Page Not Found
          </h2>

          {/* Descriptive text */}
          <p className="text-lg sm:text-xl mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist or has been moved.
            Please use the navigation or button below to return home.
          </p>

          {/* Call-to-action button */}
          <Link
            to="/"
            className="inline-block bg-[#2A1103] border-2 border-[#2A1103] text-sm shadow-lg text-white px-8 py-3 transition-all duration-300 ease-in-out hover:bg-transparent hover:border-[#2A1103] hover:text-[#2A1103]"
          >
            Go to Homepage
          </Link>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}
