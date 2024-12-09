/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function About() {
  return (
    <div
      className="flex justify-center w-full xl:h-[550px] lg:h-[600px] md:h-[960px] sm:h-[960px] xs:h-[1000px] pb-10 "
      id="MainDivAbout"
    >
      {" "}
      {/**full width div */}
      <div className="flex lg:flex-row xs:flex-col lg:justify-between xs:items-start w-4/5 h-full ">
        {" "}
        {/**main div 4/5 center */}
        <div className="flex lg:justify-start xs:justify-center items-center h-full lg:w-2/5 xs:w-full xs:mb-5 object-cover ">
          {" "}
          {/**Photo div */}
          <img
            className="lg:w-5/6 md:w-2/3 sm:w-4/5 xs:w-full  h-auto rounded-full object-cover"
            src="./AboutAssets/professionalphoto.jpg"
            alt="professionalphoto"
          />
        </div>
        <div className="flex flex-col lg:justify-center xs:justify-start lg:items-start xs:items-center xs:mt-1 lg:w-3/5 xs:w-full h-full ">
          {" "}
          {/**Details div */}
          <div
            className="flex items-center mb-8 w-32 h-9 rounded-xl"
            style={{ backgroundColor: "#0e1120" }}
            id="aboutmetitle"
          >
            <span className="ms-2 font-bold" style={{ color: "#7B4AE2" }}>
              &#129488; About me
            </span>
          </div>
          <div className="flex flex-col" id="aboutmedetails">
            <h1 className="lg:text-5xl xs:text-4xl font-bold mb-7">
              Muhammad Nadhif Farizi
            </h1>
            <div>
              <div className="flex flex-row mb-3">
                <p className="me-3">👋</p>{" "}
                <p className="lg:text-base xs:text-sm xs:opacity-50">
                  Hello, my name is Muhammad Nadhif Farizi, but you can just
                  call me just Nadhif. Greetings!
                </p>
              </div>
              <div className="flex flex-row mb-3 text-md">
                <p className="me-3"> 👨‍💻</p>{" "}
                <p className="lg:text-base xs:text-sm xs:opacity-50">
                  {" "}
                  Over 2 years in IT and Software Industry. Have been
                  contributing in design, develop, and program software
                  solutions ranging from AI, automation RPA, private cloud
                  infrastructure consulting.{" "}
                </p>
              </div>
              <div className="flex flex-row mb-3 text-md">
                <p className="me-3">&#128187;</p>
                <p className="lg:text-base xs:text-sm xs:opacity-50">
                  Now, focusing my endeavour in building fullstack scalable apps
                  with JavaScript, React JS, Typescript, and other technologies.
                </p>
              </div>
              <div className="flex flex-row mb-3 text-md">
                <p className="me-3">&#127891;</p>
                <p className="lg:text-base xs:text-sm xs:opacity-50">
                  Graduated in Electrical Engineering from Bandung Institute of
                  Technology, redirected my passion towards software industry.
                </p>
              </div>
              <div className="flex flex-row mb-3 text-md">
                <p className="me-3">&#128161;</p>
                <p className="lg:text-base xs:text-sm xs:opacity-50">
                  {" "}
                  Interests in front-end dev, back-end dev, AI automation
                  solutions, and scalable apps leveraging anything-as-a-service
                  cloud model.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
