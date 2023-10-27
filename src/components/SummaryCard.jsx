import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const SummaryCard = ({ size, name, fileTypeImageUrl }) => {
  return (
    <div className="text-C_GreyBlue h-16 mt-2 flex flex-row rounded-xl py-3 px-4 items-center justify-between border border-C_WhiteGray">
      <div className="flex flex-row gap-2">
        <img src={fileTypeImageUrl} alt="pdf" />
        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
          <span className="text-xs ">{size}</span>
        </div>
      </div>
      <div className="">
        <FontAwesomeIcon icon={faEllipsisV} />
      </div>
    </div>
  );
};

export default SummaryCard;
