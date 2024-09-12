"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaFileLines,
  FaBars,
  FaXmark,
} from "react-icons/fa6";

export default function Home() {
  const [menuDOM, setMenuDOM] = useState(false); // Menu showing in DOM
  const [displayMenu, setDisplayMenu] = useState(false); // Display the Menu
  const [isMobile, setIsMobile] = useState(false); // Mobile View
  const [homeHeight, setHomeHeight] = useState("calc(100vh - 56px)"); // Height of Intro Page
  const [aboutVisible, setAboutVisible] = useState(false);
  const navBar = useRef(null);
  const aboutSection = useRef(null);

  // Links in NavBar
  const sections = ["About", "Projects", "Skills"];
  const links = [
    {
      name: "Github",
      url: "https://github.com/GauravKano",
      icon: FaGithub,
      alt: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gaurav-kanoujia/",
      icon: FaLinkedin,
      alt: "linkedin",
    },
    {
      name: "Resume",
      url: "/Resume.pdf",
      icon: FaFileLines,
      alt: "resume",
    },
  ];
  const aboutMessage = [
    "I'm Gaurav Kanoujia, studying Computer Science with a minor in Communication at the University of Central Florida.",
    "I started coding in high school when I joined the competitive programming team. I quickly fell in love with software development while diving into Python, and it’s been a great ride ever since.",
    "Right now, I’m exploring full-stack development and getting into AI and Machine Learning. I’m excited about the journey ahead and look forward to picking up new skills and tackling interesting challenges as I grow in the tech world",
  ];
  const projects = [
    {
      name: "Personal Portfolio",
      date: "July 2024",
      description:
        "A stylish and interactive portfolio showcasing my work and skills. It features a modern design, smooth navigation, and responsive layouts, providing a polished and engaging user experience.",
      languages: ["NextJs", "Tailwind CSS", "Vercel"],
    },
    {
      name: "CelebBot",
      date: "August 2024",
      description:
        "Chat with your favorite celebrity's personality. Choose who to talk to, enjoy seamless API-driven chats, and stay organized with clear chat. Sign in easily with registration and email verification for secure access.",
      languages: [
        "NextJs",
        "Material UI",
        "GROQ",
        "Llama API",
        "Firebase",
        "Vercel",
      ],
    },
    {
      name: "Party Manager",
      date: "August 2024",
      description:
        "An intuitive platform for managing pantry inventory. Users can add items, adjust quantities, and search their stock, while a streamlined interface ensures easy and efficient tracking for a well-organized kitchen.",
      languages: ["NextJs", "Material UI", "Firebase", "Vercel"],
    },
    {
      name: "VolunTrack",
      date: "Feb 2023 - April 2023",
      description:
        "Your essential tool for managing volunteer hours. Log, edit, and track your total hours effortlessly. Perfect for nonprofits and volunteers, VolunTrack keeps your contributions organized and easy to monitor.",
      languages: ["Python"],
    },
    {
      name: "Seat Sync",
      date: "Jan 2024",
      description:
        "User-friendly tool for a hassle-free movie seat bookings. Effortlessly check seat availability, reserve your spot, and find out who’s sitting where—all with instant feedback to make your booking experience smooth and interactive",
      languages: ["C"],
    },
    {
      name: "QueueMaster",
      date: "Feb 2024",
      description:
        "An efficient system for handling customer ticket requests. Users enter their details and ticket quantity, while an intelligent queue ensures smooth and organized processing for a better overall experience.",
      languages: ["C"],
    },
  ];

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

    return () => {
      if (navBar.current) {
        observer.unobserve(navBar.current);
      }
    };
  }, [navBar.current]);

  // Handle PopOut Animation only when About Section Scrolled To
  useEffect(() => {
    const handleAnimation = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAboutVisible(true);
        observer.unobserve(aboutSection.current);
      }
    };

    const observer = new IntersectionObserver(handleAnimation, {
      threshold: isMobile ? 0.275 : 0.375,
    });

    if (aboutSection.current) {
      observer.observe(aboutSection.current);
    }

    return () => {
      if (aboutSection.current) {
        observer.unobserve(aboutSection.current);
      }
    };
  }, [aboutSection.current]);

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

  return (
    <>
      {/* Nav Bar */}
      <nav
        className="bg-app-300 w-full px-6 py-3 flex justify-end text-foreground shadow-light-nav-purple"
        ref={navBar}
      >
        {/* Normal NavBar */}
        <div className="hidden md:flex justify-around lg:justify-end items-center gap-14 text-xl font-semibold w-full">
          {/* Sections in Portfolio */}
          {sections.map((name, index) => (
            <span key={index}>{name}</span>
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

      {/* Display Menu */}
      {menuDOM && (
        <>
          {/* Black out Background */}
          <div
            className="md:hidden fixed top-0 left-0 w-screen h-screen z-30 opacity-50 bg-slate-950"
            onClick={handleMenuClose}
          ></div>

          {/* Display the Drawer styled Menu */}
          <div
            className={`md:hidden fixed top-0 right-0 z-50 max-w-80 w-3/4 h-screen overflow-y-auto p-4 bg-app-500 text-foreground shadow-light-purple ${
              displayMenu ? "animate-slide-right-in" : "animate-slide-right-out"
            } `}
            onAnimationEnd={removeMenuDOM}
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
              {sections.map((name, index) => (
                <span className="block" key={index}>
                  {name}
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
          </div>
        </>
      )}

      {/* Intro Section */}
      <section
        className="flex justify-center items-center"
        style={{
          minHeight: homeHeight,
        }}
      >
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12 w-10/12">
          {/* Intro Text */}
          <div className="flex flex-col gap-2 items-center">
            <span className="text-5xl lg:text-7xl mb-3 font-medium">
              Greetings!
            </span>
            <span className="text-3xl lg:text-4xl font-medium">I am</span>
            <span className="text-3xl lg:text-4xl font-medium">
              Gaurav Kanoujia
            </span>
          </div>

          {/* Image of Me */}
          <img
            src="/imgs/me.jpg"
            alt="Picture of Gaurav"
            className="rounded-full max-w-80"
            style={{ width: "75vw" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section className="flex justify-center items-center box-border pt-40 tall:pt-36">
        <div
          ref={aboutSection}
          className={`rounded-xl ${
            aboutVisible ? "animate-popOut" : "opacity-0"
          }`}
          style={{
            width: isMobile ? "90vw" : "80vw",
          }}
        >
          {/* Mac Buttons */}
          <div className=" flex flex-row justify-start items-center gap-2 bg-app-300 rounded-t-xl px-3 py-2 ">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-amber-300"></div>
            <div className="w-3 h-3 rounded-full bg-green-300"></div>
          </div>
          <div className="flex flex-col gap-5 bg-app-400 px-10p lg:px-12p pt-11 pb-16 rounded-b-xl">
            {/* About Title */}
            <h2 className="text-center text-3xl font-bold mb-2.5 text-balance">
              About Me
            </h2>
            {/* About Message */}
            {aboutMessage.map((item, index) => (
              <p key={index} className="text-base sm:text-lg font-normal">
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      <section className="flex flex-col justify-center items-center gap-14 pt-56">
        {/* Project Title */}
        <h1 className="text-4xl font-semibold">Projects</h1>
        {/* Display Projects */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 justify-around gap-10 text-center text-balance"
          style={{ width: "85vw" }}
        >
          {projects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-3.5 bg-app-400 rounded-lg px-10 py-12"
            >
              {/* Title and Date */}
              <div className="flex flex-col items-center gap-0.5">
                <h3 className="inline-block text-2xl font-bold">{item.name}</h3>
                <span className="text-base inline-block">{item.date}</span>
              </div>
              {/* Divider */}
              <div className="w-11/12 h-0.5 bg-white opacity-50"></div>
              {/* Description */}
              <span className="mb-1 text-base">{item.description}</span>
              {/* Languages */}
              <div className="flex justify-center items-center flex-wrap gap-2 mb-1 mt-3">
                {item.languages.map((language, index) => (
                  <span
                    key={index}
                    className="px-1.5 py-1 bg-app-350 rounded-md"
                  >
                    {language}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex justify-center items-center gap-14 pt-56">
        <h1 className="text-4xl font-semibold">Skills</h1>
        <div
          className="flex flex-wrap justify-center items-center gap-4"
          style={{ width: "80vw" }}
        >
          {" "}
        </div>
      </section>
    </>
  );
}
