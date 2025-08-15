import React from "react";
import { FaShoppingCart } from "react-icons/fa";


const ProductCard = ({ item, openModal }) => {
  return (
    <div
      // data-aos="fade-up"
      className=" overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-md group "
      onClick={() => openModal(item)}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {item.oldPrice && (
          <div className="absolute top-3 right-3 bg-[#2A1103] text-white text-xs font-bold px-2 py-1 rounded-full">
            SALE
          </div>
        )}
      </div>
      <div className="p-2  ">
        <h3 className="font-bold font-[outfit] text-[#2A1103] mb-1 group-hover:text-[#D47125] transition-colors duration-300">
          {item.name}
        </h3>
        <p className="text-sm font-[display] text-gray mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center border bg-[#2A1103] py-2 px-4 w-full   ">
          <div>
            <span className="text-sm font-bold font-[outfit] text-white ">
              GH₵ {item.price.toFixed(2)}
            </span>
            {item.oldPrice && (
              <span className="ml-2 text-sm font-[outfit] text-white line-through">
                GH₵ {item.oldPrice.toFixed(2)}
              </span>
            )}
          </div>
          <span className="text-sm text-white font-[outfit] px-2 py-1 rounded">
            {item.size}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;