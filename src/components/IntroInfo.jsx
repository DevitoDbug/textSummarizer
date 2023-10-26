import React from "react";
import image1 from "../../public/thinking.svg";

const IntroInfo = () => {
  return (
    <div className="bg-C_DullWhite h-2/3 flex flex-col gap-2 items-center justify-center md:h-1/3 md:flex-row-reverse md:gap-2 md:px-9 lg:h-3/4 lg:p-20">
      <img
        className="mt-6 w-[70%] md:w-[40%] md:mt-2"
        src={image1}
        alt="focusing"
      />
      <div className="p-3 md:p-9 lg:p-28">
        <h2 className="text-gray-800 text-2xl font-bold mt-4 leading-tight ">
          Your customixed Token For Globally Complient Distribution Events
        </h2>
        <p className="my-6 text-sm text-C_TextBlack ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
        </p>
        <button className=" text-C_White bg-C_Green px-3 py-2 outline-none rounded-3xl ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default IntroInfo;
