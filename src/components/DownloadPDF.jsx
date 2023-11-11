import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { PDFDownloadLink } from '@react-pdf/renderer';
import PDFFile from './PDFFile';
import React from 'react';

const DownloadPDF = () => {
  return (
    <>
      <PDFDownloadLink
        document={<PDFFile />}
        fileName="summary.pdf"
        className=""
      >
        {({ loading, error }) => {
          if (error) {
            return <div>Something went wrong</div>;
          }
          return loading ? (
            <span className="flex items-center gap-2 rounded-3xl border border-C_Blue pl-2">
              Loading document...
              <span className="animate-bounce rounded-full border border-C_Blue bg-blue-600 p-1 text-white ">
                <span className="p-1 ">...</span>
              </span>
            </span>
          ) : (
            <button className="flex items-center gap-2 rounded-3xl border border-C_Blue pl-2">
              Download
              <span className="rounded-full border border-C_Blue bg-blue-600 p-1 text-white">
                <span className="p-1 ">
                  <FontAwesomeIcon icon={faArrowDown} />
                </span>
              </span>
            </button>
          );
        }}
      </PDFDownloadLink>
    </>
  );
};

export default DownloadPDF;
