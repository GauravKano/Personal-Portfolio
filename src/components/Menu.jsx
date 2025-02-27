import React from "react";
import { FaXmark } from "react-icons/fa6";
import { easeIn, easeOut, motion } from "framer-motion";

const Menu = ({
  handleMenuClose,
  displayMenu,
  removeMenuDOM,
  sections,
  links,
  sectionClick,
}) => {
  return (
    <>
      <>
        {/* Black out Background */}
        <div
          className="md:hidden fixed top-0 left-0 w-screen h-screen z-30 opacity-50 bg-slate-950"
          onClick={handleMenuClose}
        ></div>

        {/* Display the Drawer styled Menu */}
        <motion.div
          className="md:hidden fixed top-0 right-0 z-50 max-w-80 w-3/4 h-screen overflow-y-auto p-4 bg-app-500 text-foreground shadow-light-purple"
          onAnimationComplete={removeMenuDOM}
          initial={{ translateX: "100%" }}
          animate={displayMenu ? { translateX: "0%" } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="fixed top-4 right-4"
            aria-label="Close Button"
            onClick={handleMenuClose}
          >
            <FaXmark className="w-6 h-6" />
          </button>

          {/* Menu Options */}
          <div className="flex flex-col justify-center items-center gap-8 text-xl font-semibold h-full">
            {/* Links to inside portfolio */}
            {sections.map((section, index) => (
              <span
                className="block cursor-pointer"
                key={index}
                onClick={() => {
                  sectionClick(section);
                }}
              >
                {section.name}
              </span>
            ))}

            {/* Outer Links */}
            <div className="flex flex-row items-center justify-center gap-6 mt-4">
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
          </div>
        </motion.div>
      </>
    </>
  );
};

export default Menu;
