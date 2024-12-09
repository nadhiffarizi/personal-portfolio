import * as React from "react";
import { PortfolioCard } from "./PortfolioCard";

export function Portfolio() {
  return (
    <div
      className="flex justify-center w-full xl:h-[700px] lg:h-[650px] md:h-[1200px] xs:h-[1100px]"
      id="MainDivProject"
    >
      <div className="flex flex-col w-4/5 h-full">
        <div className="flex flex-col lg:items-start xs:items-center gap-4 w-full lg:h-[150px] xs:h-1/4 lg:mb-0 xs:mb-2">
          <div
            className="flex items-center justify-center w-28 h-10 rounded-2xl"
            style={{ backgroundColor: "#0e1120" }}
          >
            {" "}
            {/* Title Projects*/}
            <span className=" font-bold" style={{ color: "#7B4AE2" }}>
              {" "}
              🔗 Projects
            </span>
          </div>
          <h1 className="text-3xl font-bold lg:mb-0 xs:mb-5">
            Projects and Works
          </h1>
        </div>
        <PortfolioCard />
      </div>
    </div>
  );
}
