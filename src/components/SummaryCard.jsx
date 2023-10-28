import React, { useEffect, useRef, useState } from 'react';
import OptionsPanel from './OptionsPanel';
import {
  faClose,
  faEllipsisV,
  faBookmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SummaryCard({
  size,
  name,
  fileTypeImageUrl,
  index,
  setActivePane,
  activePane,
  bookmarked,
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

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div
      className="mt-2 flex h-16 flex-row items-center justify-between rounded-xl border border-C_WhiteGray px-4 py-3 text-C_GreyBlue"
      ref={cardRef}
    >
      <div className="flex flex-row gap-2">
        <img src={fileTypeImageUrl} alt="pdf" />
        <div className="flex flex-col">
          <span className="text-sm">{name}</span>
          <span className="text-xs">{size}</span>
        </div>
      </div>
      <div className="relative flex gap-3">
        {bookmarked && (
          <FontAwesomeIcon icon={faBookmark} className=" text-C_Blue" />
        )}
        <button
          className={`${
            index === activePane ? `scale-110 text-C_Blue` : `text-C_GreyBlue`
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
              className="absolute right-3 top-3 z-20 text-white"
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default SummaryCard;
