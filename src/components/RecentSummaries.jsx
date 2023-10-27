import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import dummyData from "../data";

const RecentSummaries = () => {
  const [activePane, setActivePane] = useState(-1);

  return (
    <div className="mt-8 w-full flex flex-col justify-center items-center">
      <div className="flex flex-row justify-between fixed top-0 bg-C_TextWhite shadow-md py-3 px-2 w-full">
        <span className="text-lg">Recent summeries</span>
        {/* <span className="text-sm self-end text-C_Blue">View all </span> */}
      </div>
      <div className="w-[90%] pb-40 overflow-scroll mt-5">
        {dummyData.map((data, index) => (
          <SummaryCard
            key={index}
            size={data.size}
            name={data.name}
            fileTypeImageUrl={data.fileTypeImageUrl}
            index={index}
            setActivePane={setActivePane}
            activePane={activePane}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSummaries;
