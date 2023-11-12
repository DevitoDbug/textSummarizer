import jsPDF from 'jspdf';
import React, { createContext, useState } from 'react';

export const DowloadPdfContext = createContext();

const DownloadPDFContextProvider = ({ children }) => {
  const [pdfText, setPdfText] = useState('');
  const [pdfTitle, setPdfTitle] = useState('');

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text(pdfTitle, margin, 10);
    const textLines = doc.splitTextToSize(pdfText, pageWidth);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(0, 0, 0);
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
