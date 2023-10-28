import React, { useEffect, useRef, useState } from "react";
import OptionsPanel from "./OptionsPanel";
import { faClose, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SummaryCard({
  size,
  name,
  fileTypeImageUrl,
  index,
  setActivePane,
  activePane,
}) {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);
  const cardRef = useRef(null);

  function handleOptionsClick(e) {
    e.stopPropagation();
    setActivePane(index);
    setShowOptions(!showOptions);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="text-C_GreyBlue h-16 mt-2 flex flex-row rounded-xl py-3 px-4 items-center justify-between border border-C_WhiteGray"
      ref={cardRef}
    >
      <div className="flex flex-row gap-2">
        <img src={fileTypeImageUrl} alt="pdf" />
        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
          <span className="text-xs">{size}</span>
        </div>
      </div>
      <div className="relative">
        <button
          className={`${
            index === activePane ? `text-C_Blue scale-110` : `text-C_GreyBlue`
          }`}
          onClick={handleOptionsClick}
        >
          <FontAwesomeIcon icon={faEllipsisV} className="" />
        </button>
        {showOptions && (
          <div ref={optionsRef}>
            <OptionsPanel />
          </div>
        )}
        {showOptions && (
          <button
            onClick={() => {
              setActivePane(-1);
              setShowOptions(false);
            }}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-white absolute top-3 right-3 z-20"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
