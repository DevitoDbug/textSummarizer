import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DownloadPDF = () => {
  return (
    <>
      <button className="flex items-center gap-2 rounded-3xl border border-C_Blue pl-3 text-sm text-C_GreyBlue">
        <span className="rounded-l-xl ">Download</span>
        <span className="rounded-full border border-C_Blue bg-blue-600 p-1 text-white">
          <span className="p-1 ">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </span>
      </button>
    </>
  );
};

export default DownloadPDF;
