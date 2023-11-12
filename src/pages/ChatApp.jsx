import React, { useContext, useEffect, useRef, useState } from 'react';
import { RequestParameterContext } from '../context/RequestParameterContext';
import ResponseModifierOptions from '../components/ResponseModifierOptions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { DowloadPdfContext } from '../context/DownloadPDFContext';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [summery, setSummery] = useState('');
  const [options, setOptions] = useState([]);
  const [regenerate, setRegenerate] = useState(false); //for re-rendering the respnse

  const [optionsVisible, setOptionsVisible] = useState(false);
  const componentRef = useRef(null);

  const [loading, setLoading] = useState(false);

  //request data
  const contextValue_RequestParameters = useContext(RequestParameterContext);

  //update download pdf
  const pdfData = useContext(DowloadPdfContext);

  //buttons
  const buttons = [
    {
      id: 1,
      name: 'Length',
      value: 'length',
      onClick: () => {
        setOptions(['short', 'medium', 'long', 'auto']);
        contextValue_RequestParameters.setSelectedOption(`length`);
      },
    },

    {
      id: 2,
      name: 'Format',
      value: 'format',
      onClick: () => {
        setOptions(['paragraph', 'bullets', 'auto']);
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
        setOptions([0.0, 0.3, 1.0]);
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
    setOptionsVisible(true);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setInputText(e.target.form[0].value);
    e.target.form[0].value = '';

    fetchSummery();
  };

  const updateDownloadPDF = () => {
    pdfData.setPdfText(summery);
    pdfData.setPdfTitle('Your summery');
  };

  useEffect(() => {
    updateDownloadPDF();
  }, [summery]);

  const fetchSummery = async () => {
    setLoading(true);
    if (requestData.text === '' || requestData.text === undefined) {
      return;
    } else {
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
        console.log(data.summary);
      } catch (error) {
        // Handle any errors here
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }
    setRegenerate(false);
    updateDownloadPDF();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target)
      ) {
        // Clicked outside the component
        setOptionsVisible(false);
      }
    };

    const handleScroll = () => {
      // Scrolling occurred
      setOptionsVisible(false);
    };

    // Attach event listeners when the component mounts
    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Detach event listeners when the component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full p-1">
      <div className="flex h-full w-full flex-col gap-3 p-2 md:grid md:grid-cols-2 md:gap-4">
        <form className="flex flex-col gap-2 p-1 md:col-span-1 md:p-4">
          <textarea
            className="rounded-lg outline-none"
            type="text"
            name="inputText"
            id="inputText"
            placeholder="Enter text..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
            rows={10}
          />
          <button
            onClick={handleClick}
            className="rounded bg-C_Blue px-4 py-2 font-bold text-white hover:bg-blue-500"
          >
            Generate summery
          </button>
        </form>

        <div className="rounded-lg p-2 text-C_TextWhiteDull shadow-md md:col-span-1 md:p-4">
          {loading && <div className="text-center">Loading...</div>}
          {!loading && <p>{summery}</p>}
          <div className="mt-3 flex justify-between p-2 text-C_Black">
            <span>Modify response</span>
            <button onClick={fetchSummery}>
              <FontAwesomeIcon
                icon={faRefresh}
                className={`text-md self-end pr-3  ${
                  regenerate ? 'text-C_Blue' : 'text-C_DullBlack'
                }`}
              />
            </button>
          </div>
          <div ref={componentRef} className="flex justify-center gap-2 ">
            {buttons.map((button) => (
              <div className="relative" key={button.id}>
                <button
                  onClick={() => {
                    handleOptionClick(button.onClick);
                    setOptionsVisible(true);
                  }}
                  className="rounded-md border-2 border-gray-300 px-3 py-1 text-sm  text-C_TextWhiteDull hover:bg-C_Blue hover:text-white"
                >
                  {button.name}
                </button>
                {optionsVisible &&
                  contextValue_RequestParameters.selectedOption ===
                    button.value && (
                    <div>
                      <ResponseModifierOptions options={options} />
                    </div>
                  )}
              </div>
            ))}
          </div>
          {summery && (
            <button
              className="mt-5 w-28  rounded-2xl bg-C_Blue px-1 py-2 text-sm font-bold text-C_White hover:bg-blue-500"
              onClick={() => {
                pdfData.generatePDF();
              }}
            >
              Download file
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
