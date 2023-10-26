import React from "react";

const NavList = () => {
  return (
    <ul className="bg-C_Green h-[40vh] p-2 m-1 text-lg text-C_TextWhiteDull font-semibold flex flex-col gap-2 justify-center rounded-lg md:flex-row md:h-10 md:justify-around md:gap-5 md:px-2 md:py-0 md:text-xl md:bg-transparent md:text-C_TextBlack ">
      <li className="md:hover:bg-C_Green md:hover:text-C_TextWhite md:px-3 md:py-1 md:rounded-3xl md:hover:scale-[1.05]">
        <a href="/about">Blog</a>
      </li>
      <li className="md:hover:bg-C_Green md:hover:text-C_TextWhite md:px-3 md:py-1 md:rounded-3xl md:hover:scale-[1.05]">
        <a href="#Services">Services</a>
      </li>
      <li className="md:hover:bg-C_Green md:hover:text-C_TextWhite md:px-3 md:py-1 md:rounded-3xl md:hover:scale-[1.05]">
        <a href="/contact">About Us</a>
      </li>
      <li className="md:hover:bg-C_Green md:hover:text-C_TextWhite md:px-3 md:py-1 md:rounded-3xl md:hover:scale-[1.05]">
        <a href="/contact">Career</a>
      </li>
      <li className="md:hover:bg-C_Green md:hover:text-C_TextWhite md:px-3 md:py-1 md:rounded-3xl md:hover:scale-[1.05]">
        <a href="/contact">Contact</a>
      </li>
    </ul>
  );
};

export default NavList;
