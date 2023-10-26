import {
  faBookmark,
  faFile,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className="px-6 py-4 flex gap-7 bg-C_GreyShades border-t-2 border-b-0  justify-around ">
      <button>
        <FontAwesomeIcon
          icon={faHome}
          className="stroke-C_DullBlack stroke-[30] text-white"
        />
      </button>

      <button>
        <FontAwesomeIcon
          icon={faPlus}
          className="border-2  text-C_DullBlack rounded-md p-[0.13rem]"
        />
      </button>

      <button>
        <FontAwesomeIcon
          icon={faBookmark}
          className="stroke-C_DullBlack stroke-[30] text-white"
        />
      </button>

      <button>
        <FontAwesomeIcon
          icon={faFile}
          className="stroke-C_DullBlack stroke-[30] text-white"
        />
      </button>
    </div>
  );
};

export default Navbar;
