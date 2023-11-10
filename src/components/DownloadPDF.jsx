import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DownloadPDF = () => {
  return (
    <>
      <button className="flex items-center gap-1 rounded-3xl bg-C_Blue  pl-3  text-xs">
        <span className="rounded-l-xl text-white">Download</span>
        <span className="rounded-full bg-blue-600 p-1 text-white">
          <span className="p-1 text-sm">
            <FontAwesomeIcon icon={faArrowDown} />
          </span>
        </span>
      </button>
    </>
  );
};

export default DownloadPDF;
