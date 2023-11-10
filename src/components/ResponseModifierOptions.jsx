import React, { useContext } from 'react';
import { RequestParameterContext } from '../context/RequestParameterContext';

const ResponseModifierOptions = ({ options }) => {
  const contextValue_RequestParameters = useContext(RequestParameterContext);

  const handleOptionChange = (e) => {
    let newValue = options[parseInt(e.target.value)];

    contextValue_RequestParameters.setData((prevData) => ({
      ...prevData,
      [contextValue_RequestParameters.selectedOption]: newValue,
    }));
  };

  return (
    <div className="absolute left-0 top-8 z-10 w-28 rounded-lg border bg-C_Blue p-2 text-white shadow-md">
      <ul className="relative flex flex-col  gap-3">
        {options.map((option, index) => (
          <label key={option} className="flex gap-1">
            <input
              type="radio"
              value={index}
              checked={
                option ===
                contextValue_RequestParameters.data[
                  contextValue_RequestParameters.selectedOption
                ]
              }
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </ul>
    </div>
  );
};

export default ResponseModifierOptions;
