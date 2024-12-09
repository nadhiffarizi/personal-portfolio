/* eslint-disable @next/next/no-img-element */

// tsrpfc
import * as React from "react";

export function HeroSection() {
  return (
    <div
      className=" flex justify-center w-full lg:h-[650px] md:h-[700px] sm:h-[700px] xs:h-[780px] mt-6"
      id="MainDivHero"
    >
      {" "}
      {/** Full width div */}
      <div className="flex lg:flex-row xs:flex-col xs:items-center w-4/5 h-full ">
        {" "}
        {/** Main div, centered*/}
        <div
          className="flex flex-col lg:justify-start md:justify-center lg:items-start xs:items-center xs:mb-6 lg:w-1/5 xs:w-4/5"
          id="heroProfile"
        >
          {" "}
          {/** Hero, profile */}
          <div
            className="flex xs:items-center xs:h-10 xs:mb-6"
            id="heroProfile-greeting"
          >
            <div
              className="flex justify-start items-start xs:items-center lg:w-44 lg:h-11 xs:w-36 xs:h-10 rounded-2xl"
              style={{ backgroundColor: "#0e1120" }}
            >
              <span className="lg:text-2xl xs:text-sm ms-3 me-2">
                &#128075;
              </span>{" "}
              <span
                className="lg:text-lg xs:text-base font-extrabold"
                style={{ color: "#7B4AE2" }}
              >
                {" "}
                Greetings!
              </span>
            </div>
          </div>
          <div
            className="flex flex-row lg:justify-start xs:justify-center mb-6 "
            id="heroProfile-name"
          >
            <p className="flex flex-1 font-bold fill-neutral-50 lg:text-7xl xs:text-6xl lg:text-start xs:text-center">
              Nadhif Farizi
            </p>
          </div>
          <div
            className="flex lg:justify-start xs:justify-center mb-6"
            id="heroProfile-jobtitle"
          >
            <small className=" text-neutral-50 opacity-80 lg:text-md xs:text-sm xs:font-bold lg:text-start xs:text-center">
              Fullstack Developer <span> &#x2022; </span> Software Engineer{" "}
              <span>&#x2022;</span> IT Consultant
            </small>
          </div>
          <div
            className="mb-6 flex flex-row justify-start"
            id="HeroContactIcons"
          >
            <a href="https://www.linkedin.com/in/nadhiffarizi/">
              <img
                className="me-2 object-contain"
                src="./HeroAssets/linkedinlogo.svg"
                alt="linkedin logo"
                id="heroProfile-linkedinlogo"
              />
            </a>
            <a href="https://github.com/nadhiffarizi">
              <img
                className="me-2 object-contain"
                src="./HeroAssets/githublogo.svg"
                alt="linkedin logo"
                id="heroProfile-githublogo"
              />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center w-3/5" id="heroMain">
          {" "}
          {/**Hero main section */}
          <div className="flex justify-center items-center w-1/2 h-3/5 xs:mb-5">
            {" "}
            {/**Hero main - photo div */}
            <img
              className="lg:w-4/5 xs:w-full h-auto object-contain"
              id="heroMain-photo"
              src="./HeroAssets/avatar.svg"
              alt="avatar"
            />
          </div>
          <div className="flex justify-center xs:mb-5">
            {" "}
            {/**hero main summary */}
            <p className="w-4/5 text-center text-lg xs:text-base">
              <i>
                Delivering innovative web-app solutions and comprehensive IT
                services to meet your business objectives.{" "}
              </i>
            </p>
          </div>
        </div>
        <div
          className="flex flex-col lg:items-end xs:items-center justify-center w-1/5 xs:"
          id="heroDownloadCV"
        >
          {" "}
          {/**HeroDownloadCV section */}
          <button className="mb-2">
            <span className="font-lg font-bold" style={{ color: "#3A286E" }}>
              {" "}
              Download CV{" "}
            </span>{" "}
            <img
              className="inline w-5 h-auto"
              src="./HeroAssets/ArrowLineDown.svg"
              alt="downloadbutton"
            />
          </button>
          <button>
            <a
              className="flex items-center w-36 h-10 p-1 border rounded-xl"
              style={{ borderColor: "#3A286E" }}
              href="https://api.whatsapp.com/send/?phone=081399199545&text&type=phone_number&app_absent=0"
            >
              <img
                className="ms-1 me-2 object-contain"
                src="./HeroAssets/whatsappLogo.svg"
                alt="whatsappicon"
              />
              <span className="font-lg font-bold" style={{ color: "#3A286E" }}>
                Let&apos;s Talk!
              </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
