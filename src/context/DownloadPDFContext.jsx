import jsPDF from 'jspdf';
import React, { createContext, useState } from 'react';

export const DowloadPdfContext = createContext();

const DownloadPDFContextProvider = ({ children }) => {
  const [pdfText, setPdfText] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');

  // const generatePDF = () => {
  //   console.log(pdfText);
  //   const doc = new jsPDF();
  //   doc.setFontSize(12);
  //   doc.text(pdfTitle, 10, 10);
  //   doc.text(pdfText, 10, 20);
  //   doc.save('Summary.pdf');
  //   return doc;
  // };

  const generatePDF = () => {
    console.log(pdfText);
    const doc = new jsPDF();
    doc.setFontSize(12);

    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;

    doc.text(pdfTitle, margin, 10);

    // Split the text into lines that fit within the page width
    const textLines = doc.splitTextToSize(pdfText, pageWidth);

    // Add each line to the PDF
    doc.text(textLines, margin, 20);

    doc.save('Summary.pdf');
    return doc;
  };

  const pdfData = {
    pdfText,
    setPdfText,
    pdfTitle,
    setPdfTitle,
    generatePDF,
  };
  return (
    <DowloadPdfContext.Provider value={pdfData}>
      {children}
    </DowloadPdfContext.Provider>
  );
};

export default DownloadPDFContextProvider;
