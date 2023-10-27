import React from "react";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import fileUpload from "../../public/file.svg";
const Home = () => {
  return (
    <div className="h-full w-full font-poppin flex flex-col">
      <div className="h-[20%] px-8 pt-8">
        <div className="text-2xl px-1 font-medium flex gap-2 justify-between ">
          <div>
            Text<span className="text-C_Blue ">Quill</span>
          </div>
          <div>
            <button className="w-6 h-6 rounded-full flex items-center justify-center bg-white border border-C_DullBlack">
              <FontAwesomeIcon
                icon={faUser}
                className="stroke-C_DullBlack stroke-[25] text-white text-xs  rounded-full p-2"
              />
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between border rounded-xl shadow-md p-3 text-sm text-C_TextWhiteDull border-C_WhiteGray ">
          <input
            type="text"
            placeholder="Search Document..."
            className="bg-transparent w-3/4 border-none outline-none text-C_DullBlack"
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="h-[70%] flex flex-col items-center">
        <div className=" border-2 p-9 mt-9 border-dashed">
          <img src={fileUpload} alt="Upload File" />
        </div>
        <div className="flex flex-col mx-8 text-center text-C_GreyBlue">
          <span className=" text-3xl font-medium tracking-tighter">
            Drop file
          </span>
          <span className="text-xs px-6 flex flex-col">
            Oops! There are no documents selected{" "}
            <span className="text-C_Blue">Choose from files</span>
          </span>
        </div>
      </div>

      <div className="h-[10%]">
        <Navbar />
      </div>
    </div>
  );
};

export default Home;
