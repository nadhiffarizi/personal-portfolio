/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function PortfolioCard() {
  return (
    <div className="grid lg:grid-cols-3 xs:grid-row-2 lg:gap-3 xs:gap-1 md:gap-10 w-full h-full ">
      {" "}
      {/**Main Grid */}
      <div
        className="flex flex-col justify-evenly items-center lg:w-full xs:w-full xl:h-[450px] lg:h-[400px] md:h-[500px] xs:h-4/5 rounded-2xl"
        style={{ backgroundColor: "#14142B" }}
      >
        {" "}
        {/*Gojek Portfolio */}
        <div className="flex flex-col gap-3 w-5/6 h-full py-5">
          <h1 className="text-xl font-semibold"> GoJek Front-End Clone</h1>{" "}
          <small className="opacity-50 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus cupiditate possimus quasi enim earum nihil, non iste,
            fuga natus adipisci quas.
          </small>
          <div className="flex flex-row gap-3  items-center w-full h-11">
            <div
              className="flex flex-row justify-center items-center w-20 h-9 rounded-xl "
              style={{ backgroundColor: "#1E193E" }}
            >
              {" "}
              <small className="font-bold" style={{ color: "#5965E0" }}>
                ReactJS{" "}
              </small>
            </div>

            <div
              className="flex justify-center items-center w-20 h-9 rounded-xl"
              style={{ backgroundColor: "#1E193E" }}
            >
              {" "}
              <small className="font-bold" style={{ color: "#5965E0" }}>
                TypeScript{" "}
              </small>
            </div>
          </div>
          <div className="flex w-full lg:h-44 md:h-96 sm:h-80 xs:h-72 rounded-xl border-2 border-purple-400  bg-slate-200">
            <img
              className="w-full h-auto rounded-xl object-cover "
              src="./PortfolioAssets/Gojek.png"
              alt="Gojek"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col justify-evenly items-center lg:w-full xs:w-full xl:h-[450px] lg:h-[400px] md:h-[500px] xs:h-4/5 rounded-2xl"
        style={{ backgroundColor: "#14142B" }}
      >
        {" "}
        {/*TodoList Portfolio */}
        <div className="flex flex-col gap-3 w-5/6 h-full py-5">
          <h1 className="text-xl font-semibold"> ToDoList</h1>{" "}
          <small className="opacity-50 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus cupiditate possimus quasi enim earum nihil, non iste,
            fuga natus adipisci quas.
          </small>
          <div className="flex flex-row gap-3  items-center w-full h-11">
            <div
              className="flex flex-row justify-center items-center w-20 h-9 rounded-xl "
              style={{ backgroundColor: "#1E193E" }}
            >
              {" "}
              <small className="font-bold" style={{ color: "#5965E0" }}>
                ReactJS{" "}
              </small>
            </div>

            <div
              className="flex justify-center items-center w-20 h-9 rounded-xl"
              style={{ backgroundColor: "#1E193E" }}
            >
              {" "}
              <small className="font-bold" style={{ color: "#5965E0" }}>
                TypeScript{" "}
              </small>
            </div>
          </div>
          <div className="flex w-full lg:h-44 md:h-96 sm:h-80 xs:h-72 rounded-xl border-2 border-purple-400  bg-slate-200">
            <img
              className="w-full h-auto rounded-xl object-cover "
              src="./PortfolioAssets/todolist.png"
              alt="ToDoList"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
