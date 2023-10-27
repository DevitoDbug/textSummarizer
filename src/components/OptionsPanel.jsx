import React from "react";

const OptionsPanel = () => {
  return (
    <div className=" text-white w-32 p-3 rounded-lg border bg-C_Blue shadow-md right-0 top-0 absolute z-10">
      <ul className="flex flex-col gap-3  relative">
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
