import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ summaryText }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + summaryText.charAt(i));
      i++;
      if (i > summaryText.length - 1) {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [summaryText]);

  return <p>{text}</p>;
};

export default TypingAnimation;
