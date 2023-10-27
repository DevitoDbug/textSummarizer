import React from "react";
import pdf from "../../public/Pdf.svg";
import SummaryCard from "./SummaryCard";

const RecentSummaries = () => {
  const dummyData = [
    { size: "1.2mb", name: "Lorem ipsum dolor sit.", fileTypeImageUrl: pdf },
    {
      size: "0.5mb",
      name: "Consectetur adipiscing elit.",
      fileTypeImageUrl: pdf,
    },
    { size: "2.0mb", name: "Sed do eiusmod tempor.", fileTypeImageUrl: pdf },
    { size: "1.8mb", name: "Incididunt ut labore et.", fileTypeImageUrl: pdf },
    { size: "1.0mb", name: "Dolore magna aliqua.", fileTypeImageUrl: pdf },
    { size: "0.7mb", name: "Ut enim ad minim.", fileTypeImageUrl: pdf },
    {
      size: "1.3mb",
      name: "Veniam, quis nostrud exercitation.",
      fileTypeImageUrl: pdf,
    },
    { size: "1.9mb", name: "Ullamco laboris nisi ut.", fileTypeImageUrl: pdf },
    { size: "0.6mb", name: "Aliquip ex ea commodo.", fileTypeImageUrl: pdf },
    { size: "1.6mb", name: "Duis aute irure dolor.", fileTypeImageUrl: pdf },
  ];

  return (
    <div className="mt-8 w-[85%]">
      <div className="flex flex-row justify-between">
        <span className="text-md">Recent summeries</span>
        <span className="text-sm self-end text-C_Blue">View all </span>
      </div>
      <div className=" h-52  overflow-scroll">
        {dummyData.map((data, index) => (
          <SummaryCard
            key={index}
            size={data.size}
            name={data.name}
            fileTypeImageUrl={data.fileTypeImageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentSummaries;
