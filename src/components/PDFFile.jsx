import React from 'react';
import { Document, Page, Text, StyleSheet } from '@react-pdf/renderer';

const PDFFile = (text, title) => {
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
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{text}</Text>
          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber}/${totalPages}`
            }
          />
        </Page>
      </Document>
    </>
  );
};

export default PDFFile;
