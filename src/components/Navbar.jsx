import React, { useEffect, useState, useMemo } from 'react';
import {
  faBookmark,
  faFile,
  faHome,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  const navIcons = useMemo(
    () => [
      {
        icon: faHome,
        className: 'stroke-C_DullBlack stroke-[30] text-white',
        move: 'translate-y-[-1rem] duration-500 stroke-none',
        name: 'Home',
        path: '/',
      },
      {
        icon: faRobot,
        className: 'text-C_DullBlack stroke-[30] rounded-md',
        move: 'translate-y-[-1rem] duration-500 stroke-none',
        name: 'Chat',
        path: '/chatapp',
      },
      {
        icon: faBookmark,
        className: 'stroke-C_DullBlack stroke-[30] text-white',
        move: 'translate-y-[-1rem] duration-500 stroke-none',
        name: 'Bookmarks',
        path: '/bookmarks',
      },
      {
        icon: faFile,
        className: 'stroke-C_DullBlack stroke-[30] text-white',
        move: 'translate-y-[-1rem] duration-500 stroke-none',
        name: 'Summaries',
        path: '/summeries',
      },
    ],
    [],
  ); // Empty dependency array, as the navIcons array is constant

  useEffect(() => {
    const activeIndex = navIcons.findIndex(
      (icon) => icon.path === location.pathname,
    );
    if (activeIndex !== -1) {
      setActive(activeIndex);
    }
  }, [location.pathname, navIcons]);

  return (
    <div className=" flex justify-around gap-7 overflow-y-hidden border-b-0 border-t-2 bg-C_GreyShades px-6">
      {navIcons.map((icon, index) => (
        <div
          className="relative flex h-14 w-14 flex-col items-center justify-center"
          key={index}
        >
          <button
            onClick={() => {
              setActive(index);
              navigate(icon.path);
            }}
            className={`flex items-center justify-center ${icon.className} ${
              active === index
                ? icon.move
                : 'transform duration-500 ease-in-out'
            }`}
          >
            <FontAwesomeIcon
              icon={icon.icon}
              className={`text-md ${
                active === index ? ' scale-150 font-extrabold text-C_Blue ' : ''
              } transition-colors duration-300 `}
            />
          </button>
          <span
            className={`absolute text-xs font-bold text-C_Blue ${
              active === index
                ? '-bottom-6 -translate-y-8 transform opacity-100 duration-100 ease-in-out'
                : '-bottom-6 transform opacity-0 duration-100 ease-in-out'
            }`}
          >
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
