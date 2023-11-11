import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';
// import { DowloadPdfContext } from '../context/DownloadPDFContext';

const PDFFile = () => {
  // const pdfData = useContext(DowloadPdfContext);

  const pdfData = {
    pdfTitle: 'PDF Title',
    pdfText:
      'This is a PDF file generated with React and React-PDF in the client side.',
  };

  const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#E4E4E4',
      padding: 30,
    },
    title: {
      fontSize: 24,
      textAlign: 'left',
      textDecoration: 'underline',
      texfFontWeight: 'bold',
      fontFamily: 'Times-Roman',
      marginBottom: 20,
    },
    text: {
      fontSize: 12,
      textAlign: 'left',
      fontFamily: 'Times-Roman',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>{pdfData?.pdfTitle}</Text>
        <Text style={styles.text}>{pdfData?.pdfText}</Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
