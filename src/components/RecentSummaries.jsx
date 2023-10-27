import React, { useState } from "react";
import SummaryCard from "./SummaryCard";
import dummyData from "../data";

const RecentSummaries = () => {
  const [activePane, setActivePane] = useState(-1);

  return (
    <div className="mt-8 w-[85%]">
      <div className="flex flex-row justify-between">
        <span className="text-md">Recent summeries</span>
        {/* <span className="text-sm self-end text-C_Blue">View all </span> */}
      </div>
      <div className=" h-[40%] mb-2 overflow-scroll">
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
