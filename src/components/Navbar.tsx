"use client";
import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Profile", href: "https://resume.io/r/qR7O3g02C" },
    { title: "About me", href: "https://www.linkedin.com/in/sai-manikanta-patro-b21011204/" },
    { title: "Studio", href: "/studio" },
  ];

  const gradientStyle = {
    backgroundImage: "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%)",
    WebkitBackgroundClip: "text", // For Safari
    backgroundClip: "text",
    color: "transparent",
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-20 shadow-md sticky top-0 backdrop-blur-2xl transition-colors z-50" style={{ backgroundColor: "hsla(222, 47%, 11%, 1)" }}>
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 lg:px-0 h-full">
        <Logo title="Tech Blog" style={{ color: "#0bd1d1" }} />

        <div className="hidden md:inline-flex items-center gap-7 hover:text-white duration-200">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-semibold relative group overflow-hidden"
            >
              <span style={gradientStyle}>{item?.title}</span>
              <span className="w-full h-[1px] bg-blue-700 absolute inline-block left-0 bottom-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200" />
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          {isMenuOpen ? (
            <FiX className="text-2xl cursor-pointer text-cyan-500" onClick={toggleMenu} />
          ) : (
            <FiMenu className="text-2xl cursor-pointer text-cyan-500" onClick={toggleMenu} />
          )}
        </div>

        {/* Responsive menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-hsla">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="block py-2 px-4 text-white text-sm font-semibold"
              >
                {item?.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
