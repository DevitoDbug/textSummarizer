import React from "react";

const OptionsPanel = () => {
  return (
    <div className="w-32 p-3 rounded-lg border bg-red-300 right-0 top-0 absolute z-10">
      <ul className="flex flex-col gap-2  relative">
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
