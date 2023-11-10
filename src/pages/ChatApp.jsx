import React, { useContext, useState } from 'react';
import { RequestParameterContext } from '../context/RequestParameterContext';
import ResponseModifierOptions from '../components/ResponseModifierOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [summery, setSummery] = useState('');
  const [options, setOptions] = useState([]);
  const [regenerate, setRegenerate] = useState(false); //for re-rendering the respnse

  //request data
  const contextValue_RequestParameters = useContext(RequestParameterContext);

  //buttons
  const buttons = [
    {
      id: 1,
      name: 'Length',
      value: 'length',
      onClick: () => {
        setOptions(['short', 'medium', 'long']);
        contextValue_RequestParameters.setSelectedOption(`length`);
      },
    },

    {
      id: 2,
      name: 'Format',
      value: 'format',
      onClick: () => {
        setOptions(['paragraph', 'sentence']);
        contextValue_RequestParameters.setSelectedOption(`format`);
      },
    },

    {
      id: 3,
      name: 'Precision',
      value: 'extractiveness',
      onClick: () => {
        setOptions(['low', 'medium', 'high', 'auto']);
        contextValue_RequestParameters.setSelectedOption('extractiveness');
      },
    },

    {
      id: 4,
      name: 'Creativity',
      value: 'temperature',
      onClick: () => {
        setOptions([0.0, 1.0, 0.3]);
        contextValue_RequestParameters.setSelectedOption('temperature');
      },
    },
  ];

  // Define the request parameters
  const apiUrl = 'https://api.cohere.ai/v1/summarize';
  const headers = {
    accept: 'application/json',
    authorization: 'Bearer 7qsHvX04HOQWlkIyBOilLC9ZTsNb12oU4jevUZkq',
    'content-type': 'application/json',
  };

  const requestData = {
    length: contextValue_RequestParameters.data.length,
    format: contextValue_RequestParameters.data.format,
    extractiveness: contextValue_RequestParameters.data.extractiveness,
    temperature: contextValue_RequestParameters.data.temperature,
    text: inputText,
  };

  const handleOptionClick = (onClick) => {
    onClick();
    setRegenerate(true);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setInputText(e.target.form[0].value);
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
    <div className="h-full w-full overflow-hidden p-1">
      <div className="flex h-full w-full flex-col gap-2 bg-C_WhiteGray p-2">
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
          excepturi id? Iste quis et nisi eum suscipit pariatur totam
          temporibus.
          <div className="mt-3 flex justify-between p-2 text-C_Black">
            <span>Modify response</span>
            <button onClick={handleClick}>
              <FontAwesomeIcon
                icon={faRefresh}
                className={`text-md self-end pr-3  ${
                  regenerate ? 'text-C_Blue' : 'text-C_DullBlack'
                }`}
              />
            </button>
          </div>
          <div className="flex justify-center gap-2 ">
            {buttons.map((button) => (
              <div className="relative" key={button.id}>
                <button
                  onClick={() => {
                    handleOptionClick(button.onClick);
                  }}
                  className="rounded-md border-2  border-gray-300 px-3 py-1 text-sm  text-C_TextWhiteDull hover:bg-C_Blue hover:text-white"
                >
                  {button.name}
                </button>
                {contextValue_RequestParameters.selectedOption ===
                  button.value && <ResponseModifierOptions options={options} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
