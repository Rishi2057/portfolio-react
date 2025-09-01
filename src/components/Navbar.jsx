import React, { useState, useEffect } from "react";
import logo from "/logo.png";
import logo_white from "/logo_white.png";
import { IoIosMenu } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.querySelector("#home");
      if (firstSection) {
        const sectionHeight = firstSection.offsetHeight;
        setScrolled(window.scrollY > sectionHeight - 50); // trigger near end
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-500 ${
        scrolled
          ? "bg-black md:bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-20 py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <img
            className="w-20 hidden md:flex"
            src={scrolled ? logo : logo}
            alt="Logo"
          />
          <img
            className="w-20 md:hidden"
            src={scrolled ? logo_white : logo_white}
            alt="Logo"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-10">
            <a
              href="#home"
              className={`font-medium transition ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
            >
              About Me
            </a>
            <a
              href="#skills"
              className={`font-medium transition ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
            >
              Skills
            </a>
            <a
              href="#portfolio"
              className={`font-medium transition ${
                scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"
              }`}
            >
              Portfolio
            </a>
          </div>
          <a href="#contact"> <button
            className={`px-4 py-2 rounded-3xl font-semibold transition ${
              scrolled
                ? "bg-black text-white hover:bg-gray-800"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            Contact Me
          </button>
        </div> </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden text-3xl transition ${
            scrolled ? "text-white" : "text-white"
          }`}
        >
          <IoIosMenu />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden text-center space-y-4  transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } ${scrolled ? "bg-black text-white" : "bg-black/90 text-white"}`}
      >
        <div className="py-6 space-y-2">
            <a href="#home" className="block font-medium">About Me</a>
            <a href="#skills" className="block font-medium">Skills</a>
            <a href="#portfolio" className="block font-medium">Portfolio</a>
           <a href="#contact" ><button className="bg-white text-black px-4 py-2 rounded-3xl font-semibold hover:bg-gray-200 transition">
              Contact Me
            </button></a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
