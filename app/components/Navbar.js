import React from "react";
import { FaBars } from "react-icons/fa6";

const Navbar = ({
  navBarRef,
  sections,
  links,
  sectionClick,
  handleMenuOpen,
}) => {
  return (
    // Nav Bar
    <nav
      className="bg-app-300 w-full px-6 py-3 flex justify-end text-foreground shadow-light-nav-purple"
      ref={navBarRef}
    >
      {/* Normal NavBar */}
      <div className="hidden md:flex justify-around lg:justify-end items-center gap-14 text-xl font-semibold w-full">
        {/* Sections in Portfolio */}
        {sections.map((section, index) => (
          <span
            key={index}
            className="cursor-pointer"
            onClick={() => {
              sectionClick(section);
            }}
          >
            {section.name}
          </span>
        ))}

        {/* Outer Links */}
        {links.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.url}
              aria-label={item.alt}
              target="_blank"
            >
              <Icon className="w-8 h-8" />
            </a>
          );
        })}
      </div>

      {/* Mobile View NavBar */}
      <button
        className="md:hidden w-8 h-8 flex justify-center items-center"
        aria-label="Menu Button"
        onClick={handleMenuOpen}
      >
        <FaBars className="w-7 h-7" />
      </button>
    </nav>
  );
};

export default Navbar;
