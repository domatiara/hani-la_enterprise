// ProductCard.jsx
import React from "react";

export default function ProductCard({ badge, image, name, description, rating, price, buttonLabel }) {
  return (
    <div className="p-4 flex flex-col justify-between mb-10">
      {badge && (
        <span className="bg-[#F2FAE9] text-black text-xs font-[outfit] font-semibold px-2 py-1 absolute 
         w-fit mt-2 ml-2">
          {badge}
        </span>
      )}
      <img src='https://i.pinimg.com/736x/a9/76/ae/a976aee65def9ea16872ab9e7b9fa34d.jpg' alt='' className="w-[90%] h-[100%] object-cover transition-transform duration-500 group-hover:scale-110 mb-4 " />
      <h3 className="text-lg font-semibold font-[outfit]">{name}</h3>
      <p className="text-[#2A1103] text-[11px] mt-1 mb-2 font-[0utfit]">Clinically proven to outperform two <br /> leading anti-aging serums.</p>
      <div className="flex items-center text-[#2A1103] text-sm font-[outfit] mb-3">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        {/* <span className="text-gray-900 font-bold">$90</span> */}
        <button className="bg-[#2A1103] text-white text-xs font-[outfit] px-10 py-2 w-[90%] 
         hover:bg-transparent transition border-2 border-[#2A1103 hover:border-[#2A1103] hover:text-[#2A1103] shadow-lg">
          ADD TO CART - ₵90

        </button>
      </div>
    </div>
  );
}


{/* <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between mb-10">
      {badge && (
        <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full w-fit mb-2">
          {badge}
        </span>
      )} */}

{/* <img src={image} alt={name} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-2">{description}</p>
      <div className="flex items-center text-yellow-500 text-sm mb-3">
        {"★".repeat(rating)}{"☆".repeat(5 - rating)}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-gray-900 font-bold">${price}</span>
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
          {buttonLabel}
        </button> */}