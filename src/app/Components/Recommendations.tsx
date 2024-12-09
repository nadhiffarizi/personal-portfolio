import * as React from "react";
import { Reviews } from "./Reviews";

export function Recommendations() {
  return (
    <div className="flex justify-center mb-5 lg:pt-4 lg:mt-0 xs:mt-5 w-full lg:h-4/5 xs:h-full ">
      <div className="flex flex-col justify-center items-center w-4/5  h-full ">
        <div className="flex flex-col md:justify-start md:items-start xs:items-center gap-3 w-full h-1/4 md:mb-5 xs:mb-0 ">
          <div
            className="flex justify-center items-center w-40 h-11 rounded-xl "
            style={{ backgroundColor: "#0e1120" }}
          >
            <span className=" font-bold" style={{ color: "#7B4AE2" }}>
              {" "}
              💬 Testimonials
            </span>
          </div>
          <h1 className=" font-bold text-3xl">In Testimony..</h1>
        </div>
        <Reviews />
      </div>
    </div>
  );
}
