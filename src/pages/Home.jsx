import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import fileUpload from '../../public/file.svg';
const Home = () => {
  return (
    <div className="flex h-[100svh] w-full flex-col font-poppin">
      <div className="h-[20%] px-8 pt-8">
        <div className="flex justify-between gap-2 px-1 text-2xl font-medium ">
          <div>
            Text<span className="text-C_Blue ">Quill</span>
          </div>
          <div>
            <button className="flex h-6 w-6 items-center justify-center rounded-full border border-C_DullBlack bg-white">
              <FontAwesomeIcon
                icon={faUser}
                className="rounded-full stroke-C_DullBlack stroke-[25] p-2  text-xs text-white"
              />
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-between rounded-xl border border-C_WhiteGray p-3 text-sm text-C_TextWhiteDull shadow-md ">
          <input
            type="text"
            placeholder="Previous Summeries..."
            className="w-3/4 border-none bg-transparent text-C_DullBlack outline-none"
          />
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>

      <div className="flex h-[70%] flex-col items-center ">
        <div className=" mt-9 border-2 border-dashed px-20 py-9">
          <img src={fileUpload} alt="Upload File" />
        </div>
        <div className="mx-8 flex flex-col text-center text-C_GreyBlue">
          <span className=" text-3xl font-medium tracking-tighter">
            Drop file
          </span>
          <span className="flex flex-col px-6 text-xs">
            Oops! There are no documents selected{' '}
            <span className="text-C_Blue">Upload file</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
