/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function Reviews() {
  return (
    <div
      className="grid md:grid-cols-3 xs:grid-cols-none md:grid-rows-none xs:grid-rows-3 gap-4 w-full h-full "
      id="MainDivTestimonials"
    >
      <div
        className="flex justify-around md:items-center md:w-full xs:w-full md:h-3/5 xs:h-full rounded-3xl "
        style={{ backgroundColor: "#14142B" }}
      >
        {" "}
        {/* 1st Column */}
        <div className="flex flex-col justify-center items-start lg:gap-3 md:gap-6 xs:gap-2 w-4/5  h-full">
          <img
            className="md:w-7 xs:w-6 "
            src="./ReviewsAssets/Quotes.png"
            alt="Quote"
          />
          <small className="md:text-sm sm:text-xs xs:text-[0.65rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minima autem, corporis vel veritatis nisi ipsum excepturi eligendi
            laborum doloribus dolore!
          </small>
          <div className="flex flex-row justify-between items-center gap-2">
            <img
              className="md:w-12 xs:w-7"
              src="./ReviewsAssets/dummyPerson.png"
              alt="Dummy person"
            />
            <div className="flex flex-col justify-start items-start w-full h-full ">
              <p className="text-semibold md:text-sm xs:text-xs">
                Romário Lima
              </p>
              <small
                className="md:text-sm xs:text-xs"
                style={{ color: "#7B4AE2" }}
              >
                Engenheiro da Computação
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-around md:items-center md:w-full xs:w-full md:h-3/5 xs:h-full rounded-3xl "
        style={{ backgroundColor: "#14142B" }}
      >
        {" "}
        {/* 2nd Column */}
        <div className="flex flex-col justify-center items-start lg:gap-3 md:gap-6 xs:gap-2 w-4/5  h-full">
          <img
            className="md:w-7 xs:w-6"
            src="./ReviewsAssets/Quotes.png"
            alt="Quote"
          />
          <small className="md:text-sm sm:text-xs xs:text-[0.65rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minima autem, corporis vel veritatis nisi ipsum excepturi eligendi
            laborum doloribus dolore!
          </small>
          <div className="flex flex-row justify-between items-center gap-2 ">
            <img
              className="md:w-12 xs:w-7"
              src="./ReviewsAssets/dummyPerson.png"
              alt="Dummy person"
            />
            <div className="flex flex-col justify-start items-start w-full h-full ">
              <p className="text-semibold md:text-sm xs:text-xs">
                Romário Lima
              </p>
              <small
                className="md:text-sm xs:text-xs"
                style={{ color: "#7B4AE2" }}
              >
                Engenheiro da Computação
              </small>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-around md:items-center md:w-full xs:w-full md:h-3/5 xs:h-full rounded-3xl "
        style={{ backgroundColor: "#14142B" }}
      >
        {" "}
        {/* 3rd Column */}
        <div className="flex flex-col justify-center items-start lg:gap-3 md:gap-6 xs:gap-2 w-4/5  h-full">
          <img
            className="md:w-7 xs:w-6"
            src="./ReviewsAssets/Quotes.png"
            alt="Quote"
          />
          <small className="md:text-sm sm:text-xs xs:text-[0.65rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            minima autem, corporis vel veritatis nisi ipsum excepturi eligendi
            laborum doloribus dolore!
          </small>
          <div className="flex flex-row justify-between items-center gap-2 ">
            <img
              className="md:w-12 xs:w-7"
              src="./ReviewsAssets/dummyPerson.png"
              alt="Dummy person"
            />
            <div className="flex flex-col justify-start items-start w-full h-full ">
              <p className="text-semibold md:text-sm xs:text-xs">
                Romário Lima
              </p>
              <small
                className="md:text-sm xs:text-xs"
                style={{ color: "#7B4AE2" }}
              >
                Engenheiro da Computação
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
