import React from 'react';

const OptionsPanel = () => {
  return (
    <div className=" absolute right-0 top-0 z-10 w-32 rounded-lg border bg-C_Blue p-3 text-white shadow-md">
      <ul className="relative flex flex-col  gap-3">
        <li className="text-md">Rename</li>
        <li className="text-md">Delete</li>
        <li className="text-md">Download</li>
        <li className="text-md">BookMark</li>
        <li className="text-md">Properties</li>
      </ul>
    </div>
  );
};

export default OptionsPanel;
