// ProductList.jsx
import React from "react";
import ProductCard from "../components/ProductCard";

const products = [
    {
        badge: "Bestseller",
        image: "https://i.pinimg.com/736x/a9/76/ae/a976aee65def9ea16872ab9e7b9fa34d.jpg",
        name: "Chebula Active Serum",
        description: "Clinically proven to outperform two leading anti-aging serums.",
        rating: 5,
        price: 90,
        buttonLabel: "ADD TO CART"
    },
    {
        badge: "Bestseller",
        image: "https://i.pinimg.com/736x/3c/33/96/3c33965e08e079ddb04f507ef96d71c0.jpg",
        name: "Renew Pure Radiance Oil",
        description: "Helps target signs of aging for luminous skin.",
        rating: 5,
        price: "72 - 120",
        buttonLabel: "ADD TO CART"
    },
    {
        badge: "Bestseller",
        image: "https://i.pinimg.com/736x/4f/25/5a/4f255a7d6e864335d139682f9eab7bb5.jpg",
        name: "Phyto-Retinol Advanced Clinical Cream",
        description: "10 age-defying benefits in one cream.",
        rating: 4,
        price: 110,
        buttonLabel: "ADD TO CART"
    },
    {
        badge: "Selling Fast",
        image: "https://i.pinimg.com/736x/90/f9/82/90f982866412ee068954353475fcafba.jpg",
        name: "Ginger Turmeric Cleansing Balm",
        description: "Effectively removes makeup, sunscreen, and dirt.",
        rating: 5,
        price: 52,
        buttonLabel: "ADD TO CART"
    }
];

export default function ProductList() {
    return (
        <div className="bg-gray-100 py-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Shop Now</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, idx) => (
                        <ProductCard key={idx} {...product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
