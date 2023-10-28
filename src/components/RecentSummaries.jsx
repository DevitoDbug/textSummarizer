import React, { useState } from 'react';
import SummaryCard from './SummaryCard';
import dummyData from '../data';

const RecentSummaries = () => {
  const [activePane, setActivePane] = useState(-1);

  return (
    <div className="mt-8 flex w-full flex-col items-center justify-center">
      <div className="fixed top-0 z-30 flex w-full flex-row justify-between bg-C_TextWhite px-2 py-3 shadow-md">
        <span className="text-lg">Recent summeries</span>
        {/* <span className="text-sm self-end text-C_Blue">View all </span> */}
      </div>
      <div className="mt-5 w-[90%] overflow-scroll pb-40">
        {dummyData.map((data, index) => (
          <SummaryCard
            key={index}
            size={data.size}
            name={data.name}
            bookmarked={data.bookmarked}
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
