import * as React from "react";

export default function ExperienceCard() {
  return (
    <div className="flex flex-col items-center row-span-1 w-full h-full ">
      {" "}
      {/* Professsional area details */}
      {/* Experience 3*/}
      <div
        className="flex flex-col justify-start items-center mb-10 xl:w-[350px] lg:w-[300px] md:w-[350px] xs:w-[300px] lg:h-52 xs:h-50 rounded-3xl"
        style={{ backgroundColor: "#14142B" }}
      >
        <div className="flex flex-col justify-start items-start w-11/12 h-52 0 ">
          <h2 className=" mt-6 lg:text-base xs:text-base font-bold">
            Associate Consultant (Private Cloud)
          </h2>
          <small className="flex flex-wrap w-full mt-2 opacity-60 lg:text-xs xs:text-xs">
            Transformed customer bare-metal infrastructure into virtualized for
            better resilliency and scalability. Design and deploy virtualized IT
            infrastructure solutions leveraging VMware portfolio.
          </small>
          <div className="flex flex-row justify-between mt-6 w-full lg:relative">
            <p
              className="font-bold lg:text-xs xs:text-sm"
              style={{ color: "#7B4AE2" }}
            >
              VMware Indonesia
            </p>
            <p className="lg:text-xs xs:text-sm" style={{ color: "#7B4AE2" }}>
              July/22 &#x2022; December/23
            </p>
          </div>
        </div>
      </div>
      {/* Experience 2*/}
      <div
        className="flex flex-col justify-start items-center mb-10 xl:w-[350px] lg:w-[300px] md:w-[350px] xs:w-[300px] lg:h-52 xs:h-50 rounded-3xl"
        style={{ backgroundColor: "#14142B" }}
      >
        <div className="flex flex-col justify-start items-start w-11/12 h-52 0 ">
          <h2 className="  mt-6 lg:text-base xs:text-base font-bold">
            Technical Consultant (Business Process Automation)
          </h2>
          <small className="flex flex-wrap w-full mt-2 opacity-60 lg:text-xs xs:text-xs">
            Design, develop, and deploy successful Robotic Process Automation
            (RPA) systems, ensuring a seamless transition from manual business
            process to automate business process.
          </small>
          <div className="flex flex-row justify-between mt-6 w-full ">
            <p
              className="font-bold lg:text-xs xs:text-sm"
              style={{ color: "#7B4AE2" }}
            >
              PT. ISGS
            </p>
            <p className="lg:text-xs xs:text-sm" style={{ color: "#7B4AE2" }}>
              November/21 &#x2022; June/22
            </p>
          </div>
        </div>
      </div>
      {/* Experience 1*/}
      <div
        className="flex flex-col justify-start items-center mb-10 xl:w-[350px] lg:w-[300px] md:w-[350px] xs:w-[300px] lg:h-52 xs:h-50 rounded-3xl"
        style={{ backgroundColor: "#14142B" }}
      >
        <div className="flex flex-col justify-start items-start w-11/12 h-52 0 ">
          <h2 className=" mt-6 lg:text-base xs:text-base font-bold">
            Junior Software Engineer (Machine Learning/AI)
          </h2>
          <small className="flex flex-wrap w-full mt-2 opacity-60 lg:text-xs xs:text-xs">
            Worked with human-pose tracker model to analyze repetitive movement,
            leveraging the findings to craft a purpose-built application for
            fitness specific use case.
          </small>
          <div className="flex flex-row justify-between mt-6 w-full ">
            <p
              className="font-bold lg:text-xs xs:text-sm"
              style={{ color: "#7B4AE2" }}
            >
              PT. Datasintesa
            </p>
            <p className="lg:text-xs xs:text-sm" style={{ color: "#7B4AE2" }}>
              July/21 &#x2022; November/21
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* Experience 3*/
}
