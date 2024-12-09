/* eslint-disable @next/next/no-img-element */

import * as React from "react";

export function Contact() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full h-3/5 "
      id="MainDivContact"
    >
      <div className="flex flex-col items-center justify-start gap-2 w-4/5 h-full ">
        <div
          className="flex items-center justify-center w-28 h-11 rounded-2xl"
          style={{ backgroundColor: "#0e1120" }}
        >
          {" "}
          {/* Title Contact*/}
          <span className=" font-bold" style={{ color: "#7B4AE2" }}>
            {" "}
            📧 Contact
          </span>
        </div>
        <h1 className="sm:text-3xl xs:text-2xl font-bold">
          Let &apos;s Start Conversation!
        </h1>
        <div className="grid grid-cols-2 lg:w-3/5 xs:w-full h-1/3 ">
          {" "}
          {/* Grid column 2*/}
          <div className="flex justify-center items-center ">
            <button
              className="flex justify-center items-center md:w-36 xs:w-28 h-10 p-1 border rounded-xl"
              style={{ borderColor: "#3A286E" }}
            >
              {/* <img
                className="ms-1 me-2 object-contain"
                src="./HeroAssets/whatsapp.svg"
                alt="whatsappicon"
              /> */}
              <span
                className="md:text-lg xs:text-sm font-bold"
                style={{ color: "#3A286E" }}
              >
                Let&apos;s Talk!
              </span>
            </button>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <button>
              <img
                className="w-7"
                src="./ContactAssets/PaperPlaneTilt.svg"
                alt="sendEmail"
              />
            </button>
            <p
              className="font-semibold md:text-base xs:text-sm"
              style={{ color: "#3A286E" }}
            >
              nadhiffarizi@gmail.com
            </p>
            <button>
              <img
                className="w-7"
                src="./ContactAssets/CopySimple.svg"
                alt="CopySimple"
              />
            </button>
          </div>
        </div>

        <p className="text-lg" style={{ color: "#3A286E" }}>
          Back To Top{" "}
          <button>
            <a href="#MainDivHero">
              <img className="w-6" src="./ContactAssets/ArrowUp.svg" alt="" />{" "}
            </a>
          </button>
        </p>
      </div>

      <div
        className="grid lg:grid-cols-3 xs:grid-cols-2 w-full h-1/5"
        style={{ backgroundColor: "#14142B" }}
      >
        <div className="flex justify-center items-center ">
          <small className="font-normal text-white opacity-50">
            Copyright &#169; Nadhif Farizi &#x2022; 2024
          </small>
        </div>
        <div className="flex justify-center items-center gap-5">
          <a href="https://www.linkedin.com/in/nadhiffarizi/">
            <img
              className="object-contain"
              src="./HeroAssets/linkedinlogo.svg"
              alt="linkedin logo"
            />
          </a>
          <a href="https://github.com/nadhiffarizi">
            <img
              className=" object-contain"
              src="./HeroAssets/githublogo.svg"
              alt="linkedin logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
