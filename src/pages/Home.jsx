import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlideshow from "../components/HeroSlideshow";
import ProductCard from "../components/ProductCard"; // You call the card component here


export default function Home() {

    const products = [
        {
            name: "Chebula Active Serum",
            badge: "Bestseller",
            image: "/images/chebula.jpg",
            description: "Clinically proven to outperform two leading anti-aging serums.",
            rating: 5,
            price: 90,
            buttonLabel: "ADD TO BAG - $90"
        },
        // Add more product objects as needed
    ];



    return (
        <>
            <Navbar />
            <HeroSlideshow />
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
}