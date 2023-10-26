/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import NavList from "./NavList";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  const [prevScrollPos, setPrevScrollPos] = useState(0); // initiate prevScrollPos state with 0
  const [wasNavVisible, setWasNavVisible] = useState(false); // initiate wasNavVisibel state with false
  const navbarRef = useRef();

  const handleToggleView = () => {
    setIsNavOpen((prev) => !prev); // toggle the state value
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsNavOpen(false);
      }
    }

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(false);
        if (wasNavVisible) setWasNavVisible(false);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, wasNavVisible]);

  return (
    <div className=" flex items-center justify-between border-b border-gray-400 py-3 px-2 md:border-none">
      <a href="/" className="px-2 font-semibold text-gray-800 md:font-bold">
        Klipay
        <div className="h-1 w-[85%] my-[0.1rem] bg-C_Green rounded-xl animate-pulse"></div>
      </a>

      <nav className="">
        <section className="md:hidden" ref={navbarRef}>
          <button onClick={handleToggleView}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-[120%] text-C_TextBlack"
            />
          </button>

          {/*Nav in mobile view */}
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <button
              className="absolute top-0 right-0 p-2"
              onClick={handleToggleView}
            >
              <FontAwesomeIcon
                icon={faClose}
                className="text-[150%] text-gray-300"
              />
            </button>

            <NavList />
          </div>
        </section>

        {/*Nav in desktop view */}
        <div className="hidden md:block">
          <NavList />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
