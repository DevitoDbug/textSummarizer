import {
  faBookmark,
  faFile,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(0);
  const navIcons = [
    {
      icon: faHome,
      className: "stroke-C_DullBlack stroke-[30] text-white",
      move: "translate-y-[-1rem] duration-500",
      name: "Home",
    },
    {
      icon: faPlus,
      className: " text-C_DullBlack stroke-[30] rounded-md ",
      move: "translate-y-[-1rem] duration-500",
      name: "Add file",
    },
    {
      icon: faBookmark,
      className: "stroke-C_DullBlack stroke-[30] text-white",
      move: "translate-y-[-1rem] duration-500",
      name: "Bookmarks",
    },
    {
      icon: faFile,
      className: "stroke-C_DullBlack stroke-[30] text-white",
      move: "translate-y-[-1rem] duration-500",
      name: "Files",
    },
  ];

  return (
    <div className="px-6  flex gap-7 bg-C_GreyShades border-t-2 border-b-0 justify-around overflow-hidden">
      {navIcons.map((icon, index) => (
        <div
          className="w-14  h-14 flex flex-col relative  items-center justify-center"
          key={index}
        >
          <button
            onClick={() => setActive(index)}
            className={`flex justify-center items-center ${icon.className} ${
              active === index
                ? icon.move
                : "transform ease-in-out duration-500"
            }`}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              className={`text-xs ${
                active === index ? " text-C_Blue font-extrabold scale-150 " : ""
              } transition-colors duration-300`}
            />
          </button>
          <span
            className={`text-xs absolute font-bold  text-C_Blue ${
              active === index
                ? "-bottom-6 opacity-100 transform ease-in-out -translate-y-8 duration-100"
                : "-bottom-6 opacity-0 transform ease-in-out duration-100"
            }`}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
