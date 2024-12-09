import * as React from "react";
import ExperienceCard from "./ExperienceCard";
import { AcademicCard } from "./AcademicCard";

export function Experience() {
  return (
    <div className="flex justify-center w-full " id="MainDivExperience">
      <div className="flex flex-col w-4/5 lg:h-full xs:h-2/3 ">
        <div className="flex flex-col justify-center items-center w-full h-1/6 xs:mb-10 lg:mb-20">
          <div
            className="flex justify-center items-center w-28 h-11 mb-5 rounded-xl "
            style={{ backgroundColor: "#0e1120" }}
          >
            <span className=" font-bold" style={{ color: "#7B4AE2" }}>
              {" "}
              💼 Career
            </span>
          </div>
          <h1 className=" lg:text-4xl xs:text-3xl text-white font-bold ">
            My Journey So Far
          </h1>
        </div>
        <div className="grid lg:grid-cols-2 xs:grid-cols-none lg:grid-rows-none xs:flex-col w-full h-1/3 ">
          {" "}
          {/*grid col-2*/}
          <div className="flex flex-col items-center justify-start w-full h-full ">
            {" "}
            {/*professional area column*/}
            <div className="flex flex-col flex-none justify-center items-center mb-5 w-full h-1/8 ">
              {" "}
              {/* Title Professional area column */}
              <h2 className="lg:text-4xl xs:text-2xl lg:text-start xs:text-center mb-3">
                Professional Career
              </h2>
              <h3 className="text-lg opacity-50">2021 &#x2022; Present</h3>
            </div>
            <ExperienceCard />
          </div>
          <div className="flex flex-col items-center justify-start w-full xs:h-[300px] ">
            {" "}
            {/*Academic area column*/}
            <div className="flex flex-col flex-none justify-center items-center mb-5 w-full lg:h-1/8 xs:h-5/8 ">
              {" "}
              {/* Title Academic area column */}
              <h2 className="lg:text-4xl xs:text-2xl lg:text-start xs:text-center mb-3">
                Academic Area
              </h2>
              <h3 className="text-lg opacity-50">2017 &#x2022; 2021</h3>
            </div>
            <div className="row-span-1 "> {/* Academic area details */}</div>
            <AcademicCard />
          </div>
        </div>
      </div>
    </div>
  );
}
