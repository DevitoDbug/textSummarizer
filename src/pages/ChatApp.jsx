import React, { useContext, useState } from 'react';
import { RequestParameterContext } from '../context/RequestParameterContext';
import ResponseModifierOptions from '../components/ResponseModifierOptions';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [summery, setSummery] = useState('');
  const [options, setOptions] = useState([]);
  const [selectedOptionsId, setSelectedOptionsId] = useState(0);

  //buttons
  const buttons = [
    {
      id: 1,
      name: 'Length',
      value: 'length',
      onClick: () => {
        setOptions(['short', 'medium', 'long']);
        setSelectedOptionsId(1);
      },
    },

    {
      id: 2,
      name: 'Format',
      value: 'format',
      onClick: () => {
        setOptions(['paragraph', 'sentence']);
        setSelectedOptionsId(2);
      },
    },

    {
      id: 3,
      name: 'Precision',
      value: 'extractiveness',
      onClick: () => {
        setOptions(['low', 'medium', 'high', 'auto']);
        setSelectedOptionsId(3);
      },
    },

    {
      id: 4,
      name: 'Creativity',
      value: 'temperature',
      onClick: () => {
        setOptions([0.0, 1.0, 0.3]);
        setSelectedOptionsId(4);
      },
    },
  ];

  //request data
  const contextValue_RequestParameters = useContext(RequestParameterContext);

  // Define the request parameters
  const apiUrl = 'https://api.cohere.ai/v1/summarize';
  const headers = {
    accept: 'application/json',
    authorization: 'Bearer 7qsHvX04HOQWlkIyBOilLC9ZTsNb12oU4jevUZkq',
    'content-type': 'application/json',
  };

  const requestData = {
    length: contextValue_RequestParameters.length,
    format: contextValue_RequestParameters.format,
    extractiveness: contextValue_RequestParameters.extractiveness,
    temperature: contextValue_RequestParameters.temperature,
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
    <div className="bg-C_DullWhite flex h-full flex-col gap-2 p-2">
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

      <div className="rounded-lg bg-white p-2 text-C_TextWhiteDull shadow-md">
        <p>{summery}</p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        ipsum omnis dolorum sapiente. Iusto ipsam nemo quasi deserunt sunt
        excepturi id? Iste quis et nisi eum suscipit pariatur totam temporibus.
        <div className="mt-3 text-C_Black">Modify response</div>
        <div className="flex justify-end gap-2 ">
          {buttons.map((button) => (
            <div className="relative" key={button.id}>
              <button
                onClick={button.onClick}
                className="rounded-md border-2  border-gray-300 px-3 py-1 text-sm  text-C_TextWhiteDull hover:bg-C_Blue hover:text-white"
              >
                {button.name}
              </button>
              {selectedOptionsId === button.id && <ResponseModifierOptions />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
