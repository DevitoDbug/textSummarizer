import React from 'react';

const ResponseModifierOptions = () => {
  return (
    <div className="absolute left-0 top-8 z-10 w-24 rounded-lg border bg-C_Blue p-2 text-white shadow-md">
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

export default ResponseModifierOptions;
