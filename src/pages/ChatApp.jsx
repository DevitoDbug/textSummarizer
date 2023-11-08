import React, { useState } from 'react';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [summery, setSummery] = useState('');

  // Define the request parameters
  const apiUrl = 'https://api.cohere.ai/v1/summarize';
  const headers = {
    accept: 'application/json',
    authorization: 'Bearer 7qsHvX04HOQWlkIyBOilLC9ZTsNb12oU4jevUZkq',
    'content-type': 'application/json',
  };

  const requestData = {
    length: 'medium',
    format: 'paragraph',
    extractiveness: 'low',
    temperature: 0.3,
    text: inputText,
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setInputText(e.target.form[0].value);
    console.log(inputText);
    e.target.form[0].value = '';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      // Handle the response data here
      setSummery(data.summary);
    } catch (error) {
      // Handle any errors here
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex h-full flex-col gap-2">
      <form className="flex flex-col gap-2 p-1">
        <textarea
          className="rounded-lg border border-C_GreyBlue p-1"
          type="text"
          name="inputText"
          id="inputText"
          placeholder="Enter text..."
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button
          onClick={handleClick}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          Generate summery
        </button>
      </form>

      <div className="summery">
        <p>{summery}</p>
      </div>
    </div>
  );
};

export default ChatApp;
