import React, { useState } from "react";

import logo from "../assets/assets/logo.png";

import { RxHamburgerMenu } from "react-icons/rx";

import { RxCross1 } from "react-icons/rx";

import { NAVIGATION_LINKS } from "../assets/constants/index";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  const [toggle, setToggle] = useState(true);

  function toggler() {
    setMobileMenu(!mobileMenu);
    setToggle(!toggle)
  }

  function handleClick(e, href) {
    e.preventDefault();

    const targetElement = document.querySelector(href);

    if (targetElement) {
      //adjusts the scroll position by subtracting 85 pixels.

      const offset = -85;

      //retrieves the distance from the top of the viewport to the top of targetElement

      const elementPosition = targetElement.getBoundingClientRect().top;

      //calculates the final scroll position by adding the element's position, the current scroll position (window.scrollY), and the offset

      const offsetPostion = elementPosition + window.scrollY + offset;

      //scrolls the window to the calculated offsetPosition with smooth scrolling behavior ("smooth").

      window.scrollTo({
        top: offsetPostion,
        scroll: "smooth",
      });
    }

    setMobileMenu(false);
  }

  return (
    <nav className="fixed left-0 right-0 top-4 z-50">
      {/* DESKTOP NAVBAR */}

      {/* HERE ON LAREGE DEVICES NAV IS DISPLAY FLEX BUT FOR ALL DEVICES IT IS HIDDEN */}

      <div className="mx-auto gap-4 hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 p-3 backdrop-blur-lg lg:flex">
        <a href="#">
          <img src={logo} className="md:w-20 w-10" alt="logo" />
        </a>
        <ul className="flex items-center gap-4">
          {NAVIGATION_LINKS.map((link, index) => {
            return (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-sm hover:text-yellow-400"
                  onClick={(e) => {
                    handleClick(e, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* MOBILE NAVBAR */}

      <div className="rounded-lg backdrop-blur-md lg:hidden">

        <div className="flex items-center justify-between">
          <div>
            <a href="#">
              <img
                src={logo}
                style={{ width: "60px" }}
                alt="logo"
                className="m-2"
              />
            </a>
          </div>

          <div className="flex items-center">
            <button className="focus:outline-none lg:hidden" onClick={toggler}>
            
            {/* TOGGLE ICON */}
             {toggle ? <RxHamburgerMenu size={30}/> : <RxCross1 size={30}/>} 
            </button>
          </div>
        </div>

        {mobileMenu && (
          <ul className="flex flex-col m-2">
            {NAVIGATION_LINKS.map((link,index) => (
              <li key={index}>
                <a
                
                  href={link.href}
                  className="w-full text-xl block font-semibold hover:text-yellow-400"
                  onClick={(e) => {
                    handleClick(e, link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
