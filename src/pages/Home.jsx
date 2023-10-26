import React from "react";
import Navbar from "../components/Navbar";
import IntroInfo from "../components/IntroInfo";
import Services from "../components/Services";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Comments from "../components/Comments";
import Footer from "../components/Footer";

import image1 from "../../public/artificialIntelligence.svg";

const Home = () => {
  return (
    <div className="h-full w-screen">
      <Navbar />
      <IntroInfo />
      <Services />
      <Blog />
      <Pricing />

      <div className="bg-C_DullWhite py-8 p-4 flex flex-col justify-center items-center gap-1 md:flex-row">
        <img
          className="w-1/2 lg:w-1/3 self-start"
          src={image1}
          alt="research"
        />

        <div className="md:justify-end md:w-1/3">
          <h1 className="text-xl font-bold">
            Next generation home intelligence is here
          </h1>
          <div className="h-1 w-[90%] my-1 bg-C_Green rounded-xl"></div>
          <p className="text-sm text-C_TextBlack  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
            sint debitis cupiditate sed est ullam expedita ratione libero,
            eveniet recusandae vitae.
          </p>
        </div>
      </div>

      <Comments />
      <Footer />
    </div>
  );
};

export default Home;
