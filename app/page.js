"use client";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { sectionInfo, links, aboutMessage, projects, skills } from "./Info";

export default function Home() {
  //init Ref to Sections
  const aboutSection = useRef(null);
  const projectSection = useRef(null);
  const skillSection = useRef(null);

  const sections = [
    { ...sectionInfo[0], ref: aboutSection },
    { ...sectionInfo[1], ref: projectSection },
    { ...sectionInfo[2], ref: skillSection },
  ];

  const [menuDOM, setMenuDOM] = useState(false); // Menu showing in DOM
  const [displayMenu, setDisplayMenu] = useState(false); // Display the Menu
  const [isMobile, setIsMobile] = useState(false); // Mobile View
  const [homeHeight, setHomeHeight] = useState("calc(100vh - 56px)"); // Height of Intro Page
  const navBar = useRef(null);

  // Set the Mobile View State using listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); //init run

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Reset Menu Display
  useEffect(() => {
    if (!isMobile) {
      setDisplayMenu(false);
      setMenuDOM(false);
    }
  }, [isMobile]);

  // Set the Intro Page Height based on NavBar Height
  useEffect(() => {
    const handleHomeHeight = () => {
      const navBarHeight = navBar.current?.clientHeight || 0;
      setHomeHeight(`calc(100vh - ${navBarHeight}px)`);
    };

    // create observer
    const observer = new ResizeObserver(() => {
      handleHomeHeight();
    });

    // add observer to element
    if (navBar.current) {
      observer.observe(navBar.current);
    }

    // Remove Observer on Dismount
    return () => {
      if (navBar.current) {
        observer.unobserve(navBar.current);
      }
    };
  }, [navBar.current]);

  // Open the Menu
  const handleMenuOpen = () => {
    setMenuDOM(true);
    setDisplayMenu(true);
  };

  // Close the Menu
  const handleMenuClose = () => {
    setDisplayMenu(false);
  };

  // Remove Menu from DOM
  const removeMenuDOM = () => {
    if (!displayMenu) {
      setMenuDOM(false);
    }
  };

  // Set Scroll Position Once Section is Clicked
  const sectionClick = (section) => {
    let offset;

    // Choose Offset
    if (
      section.name === "About" &&
      section.ref.current?.clientHeight < window.innerHeight
    ) {
      offset = (window.innerHeight - section.ref.current?.clientHeight) / 2; // Half of vh on top
    } else {
      offset = 50; // default
    }

    // Set Scroll Position
    window.scrollTo({
      top: section.ref.current?.offsetTop - offset,
      behavior: "smooth",
    });

    // Close Menu if Open
    if (menuDOM) {
      handleMenuClose();
    }
  };

  return (
    <>
      <Navbar
        navBarRef={navBar}
        sections={sections}
        links={links}
        sectionClick={sectionClick}
        handleMenuOpen={handleMenuOpen}
      />

      {/* Display Menu */}
      {menuDOM && (
        <Menu
          handleMenuClose={handleMenuClose}
          displayMenu={displayMenu}
          removeMenuDOM={removeMenuDOM}
          sections={sections}
          links={links}
          sectionClick={sectionClick}
        />
      )}

      <Intro height={homeHeight} />

      <About
        message={aboutMessage}
        aboutRef={aboutSection}
        isMobile={isMobile}
      />

      <Projects projectRef={projectSection} projects={projects} />

      <Skills skills={skills} skillRef={skillSection} />
    </>
  );
}
