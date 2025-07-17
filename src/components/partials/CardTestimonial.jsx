import React from "react";

const CardTestimonial = ({ src, alt, comment, name, position }) => {
  return (
    <>
      <div className="w-full flex shrink-0 px-4">
        <div className="bg-white p-8 rounded-xl shadow-md text-center">
          <img
            src={src}
            alt={alt}
            className="w-20 h-20 rounded-full mx-auto mb-4 object-cover "
          />
          <p className="text-gray italic mb-4">"{comment}"</p>
          <h4 className="font-bold">{name}</h4>
          <p className="text-gray-500 text-sm">{position}</p>
        </div>
      </div>
    </>
  );
};

export default CardTestimonial;
