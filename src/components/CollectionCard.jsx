// src/components/CollectionCard.jsx
import React from 'react';

const CollectionCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="relative overflow-hidden group cursor-pointer">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-[85%] h-[95%] rounded-lg object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      {/* Text Content - now below the image */}
      <div className="p-4 "> {/* Added text-center here */}
        <h3 className="text-xl font-bold font-[outfit] text-[#2A1103] mb-1">{title}</h3>
        <p className="text-sm text-[#2A1103] font-[outfit] group-hover:underline transition-all duration-200">
          {subtitle}
        </p>
      </div>
      {/* Optional: A link/button overlay for clickability, similar to the image's example */}
      <a href="#" className="absolute inset-0 z-10" aria-label={`View ${title} collection`}></a>
    </div>
  );
};

export default CollectionCard;