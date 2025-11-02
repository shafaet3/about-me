"use client";

import { Navlinks } from "@/app/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY > 90);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section (scroll spy)
useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      threshold: 0.25, // triggers when 25% visible
      rootMargin: "0px 0px -50% 0px", // center bias
    }
  );

  sections.forEach((section) => observer.observe(section));
  return () => sections.forEach((section) => observer.unobserve(section));
}, []);

  // Smooth scroll for same-page links
  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <div
      className={`fixed w-full z-[10000] h-[12vh] transition-all duration-300 ${
        navBg ? "bg-[#0f142ed9] shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            SHAFAET
          </h1>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              onClick={(e) => handleScroll(e, link.url)}
              className={`text-base font-medium transition-all duration-200 ${
                activeSection === link.url.replace("#", "")
                  ? "text-cyan-300 border-b-2 border-cyan-300"
                  : "text-white hover:text-cyan-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CV + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <button className="px-8 py-3.5 text-sm cursor-pointer rounded-lg bg-blue-800 text-white hover:bg-blue-900 transition-all duration-300 flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 text-white lg:hidden cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
