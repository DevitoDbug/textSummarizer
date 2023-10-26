import React from "react";

const Service = ({ service }) => {
  return (
    <div className="bg-C_White flex flex-col text-center p-2 justify-center items-center w-[46%] h-48 shadow-md rounded-lg hover:shadow-sm hover:shadow-C_GreenSlit hover:scale-[1.05] transition duration-[0.12s] ease-in md:w-[30%] md:shadow-lg">
      <img src={service.logoURL} alt="logo" className="w-12 h-12" />
      <h2 className="text-C_TextBlack font-bold px-2">{service.name}</h2>
      <p className="text-sm text-gray-700 p-2">{service.description}</p>
    </div>
  );
};

export default Service;
