import {
  faBookmark,
  faFile,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  const navIcons = [
    {
      icon: faHome,
      className: "stroke-C_DullBlack stroke-[30] text-white",
    },
    {
      icon: faPlus,
      className: "border-2  text-C_DullBlack rounded-md p-[0.13rem]",
    },
    {
      icon: faBookmark,
      className: "stroke-C_DullBlack stroke-[30] text-white",
    },
    {
      icon: faFile,
      className: "stroke-C_DullBlack stroke-[30] text-white",
    },
  ];

  return (
    <div className="px-6 py-4 flex gap-7 bg-C_GreyShades border-t-2 border-b-0  justify-around ">
      {navIcons.map((icon, index) => (
        <button key={index}>
          <FontAwesomeIcon icon={icon.icon} className={icon.className} />
        </button>
      ))}
    </div>
  );
};

export default Navbar;
