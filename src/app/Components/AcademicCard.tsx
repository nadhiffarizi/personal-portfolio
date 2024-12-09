import * as React from "react";

export function AcademicCard() {
  return (
    <div className="flex flex-col items-center row-span-1 w-full lg:h-full xs:h-[300px] ">
      {" "}
      {/* Academic area details */}
      {/* Experience 3*/}
      <div
        className="flex flex-col justify-start items-center mb-10 xl:w-[350px] lg:w-[300px] md:w-[350px] xs:w-[300px] lg:h-52 xs:h-50 rounded-3xl"
        style={{ backgroundColor: "#14142B" }}
      >
        <div className="flex flex-col justify-start items-start w-11/12 h-52">
          <h2 className=" mt-6 lg:text-base xs:text-base font-bold">
            Bachelor Electrical Electronics Engineering
          </h2>
          <small className="flex flex-wrap w-full mt-2 opacity-60 lg:text-xs xs:text-xs">
            Earned my degree with final project in indoor device tracking. The
            project leveraged K-NN ML concept, WiFi signal, and hardware
            receiver for tracking indoor device.
          </small>
          <div className="flex flex-row justify-between mt-6 w-full lg:relative">
            <p
              className="font-bold lg:text-xs xs:text-sm"
              style={{ color: "#7B4AE2" }}
            >
              ITB, Bandung, Indonesia
            </p>
            <p className="lg:text-xs xs:text-sm" style={{ color: "#7B4AE2" }}>
              July/17 &#x2022; July/21
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
