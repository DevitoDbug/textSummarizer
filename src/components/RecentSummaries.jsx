import React, { useContext, useState } from 'react';
import SummaryCard from './SummaryCard';
import { SummeryDataContext } from '../context/SummeryCardContext';

const RecentSummaries = () => {
  const { data } = useContext(SummeryDataContext);

  const [activePane, setActivePane] = useState(-1);

  return (
    <div className="mt-8 flex w-full flex-col items-center ">
      <div className="fixed top-0 z-30 flex w-full flex-row justify-between bg-C_TextWhite px-2 py-3 shadow-md">
        <span className="text-lg">Recent summeries</span>
      </div>
      <div className="mt-5 w-[90%] pb-40">
        {data.map((data, index) => (
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
