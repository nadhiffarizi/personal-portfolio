/* eslint-disable @next/next/no-img-element */
import * as React from "react";

export function Skills() {
  return (
    <div
      className="flex items-start justify-center w-full lg:h-4/5 md:h-5/6 "
      id="MainDivSkills"
    >
      <div className="flex flex-col justify-start items-center w-4/5 h-full">
        <div
          className="flex justify-center items-center w-48 h-12 mb-5 rounded-xl  "
          style={{ backgroundColor: "#0e1120" }}
        >
          <p className="text-md font-bold" style={{ color: "#694cbe" }}>
            {" "}
            🧑‍💻 Skills &#x2022; Experiences{" "}
          </p>
        </div>

        <h1 className="mb-20 text-4xl text-white font-bold xs:text-center md:text-start">
          Technologies and Skills
        </h1>

        <h3 className="mb-5 text-lg opacity-50">Tech I use on daily basis</h3>

        <div className="flex flex-row lg:justify-evenly xs:justify-center mb-12 w-3/5 h-24 xs:gap-3 lg:gap-0">
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/React.svg"
            alt="react"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/Javascript.svg"
            alt="javascript"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/TypeScript.svg"
            alt="typescript"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/Nextjs.svg"
            alt="NextJs"
          />
          <img
            className="w-14 h-auto md:block xs:hidden sm:hidden"
            src="./SkillsAssets/Github.svg"
            alt="Github"
          />
          <img
            className="w-14 h-auto md:block xs:hidden sm:hidden"
            src="./SkillsAssets/git.svg"
            alt="Git"
          />
          <img
            className="w-14 h-auto md:block xs:hidden sm:hidden"
            src="./SkillsAssets/css.svg"
            alt="CSS"
          />
          <img
            className="w-14 h-auto md:block xs:hidden sm:hidden"
            src="./SkillsAssets/html.svg"
            alt="NextJs"
          />
        </div>

        <h3 className="mb-5 text-lg opacity-50">Other tech I worked with..</h3>

        <div className="flex flex-row lg:justify-evenly xs:justify-center mb-5 w-3/5 h-24 xs:gap-3">
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/nodejs.svg"
            alt="nodejs"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/postgres.svg"
            alt="nodejs"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/Python.svg"
            alt="nodejs"
          />
          <img
            className="w-14 h-auto"
            src="./SkillsAssets/TailwindCSS.svg"
            alt="nodejs"
          />
          <svg
            className="w-14 h-auto lg:block xs:hidden sm:hidden"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0.155 0 37.299 38"
          >
            <g fill="#59459A">
              <path d="M37.454 36.845V1.155C37.454.578 37 0 36.317 0H1.292C.61 0 .155.462.155 1.155v35.69C.155 37.423.61 38 1.292 38h35.025c.682 0 1.137-.578 1.137-1.155zm-1.478-.346H1.634V1.502h34.342z" />
              <path d="M14.37 30.84c5.117 0 8.415-2.889 8.415-10.396V7.739h-3.753V20.79c0 4.967-1.933 6.584-4.662 6.584s-4.435-1.617-4.435-6.584V7.854h-3.98V20.56c0 7.392 3.298 10.28 8.415 10.28zM29.835 10.857c1.365 0 2.388-.924 2.388-2.194 0-1.386-1.023-2.31-2.388-2.31s-2.388.924-2.388 2.31c0 1.27 1.024 2.194 2.388 2.194zM31.768 13.86h-3.866v16.98h3.866z" />
            </g>
          </svg>
          <svg
            className="w-32 h-auto lg:block xs:hidden sm:hidden"
            viewBox="-0.4 0 140.3 21.8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#59459A">
              <path d="M60.1 20.2L54 3.1c-.1-.2-.2-.5-.2-.8 0-.7.6-1.5 1.6-1.5.7 0 1.3.5 1.6 1.3l5 14.7L67.1 2c.2-.7.7-1.3 1.5-1.3h.2c.8 0 1.4.5 1.6 1.3l5 14.8L80.5 2c.2-.6.6-1.2 1.5-1.2s1.5.6 1.5 1.4c0 .3-.1.6-.2.8l-6.2 17.1c-.3.9-.9 1.4-1.7 1.4h-.1c-.7 0-1.4-.4-1.7-1.4l-5-14.5-5 14.5c-.3.9-.8 1.4-1.7 1.4h-.1c-.8.1-1.4-.5-1.7-1.3M104.7 2.4c0-.8.6-1.6 1.5-1.6.8 0 1.6.6 1.6 1.6v3.5c1.5-3.4 4.8-4.9 6.9-4.9.9 0 1.5.6 1.5 1.6 0 .8-.5 1.4-1.4 1.6-3.9.4-7.1 3.4-7.1 9.2v6.8c0 .8-.6 1.6-1.5 1.6-.8 0-1.6-.6-1.6-1.6V2.4M125.9 21.7c-5.4 0-9.8-4.2-9.8-10.4v-.1c0-5.8 4-10.4 9.5-10.4 5.9 0 9.2 4.8 9.2 10.2 0 .8-.6 1.4-1.4 1.4H119c.4 4.3 3.5 6.8 7 6.8 2.4 0 4.3-.9 5.7-2.3.2-.2.5-.3.8-.3.7 0 1.3.6 1.3 1.3 0 .3-.1.7-.4.9-1.9 1.7-4.1 2.9-7.5 2.9m5.9-11.6c-.3-3.7-2.4-6.8-6.3-6.8-3.5 0-6.1 2.9-6.4 6.8zM83.4 15.5c0-4.3 3.5-6.6 8.6-6.6 2.6 0 4.4.3 6.2.8V9c0-3.7-2.2-5.4-6-5.4-2 0-3.2.2-4.7.9-.2.1-.4.1-.5.1-.7 0-1.4-.6-1.4-1.3s.3-1 .8-1.3c2-.8 3.5-1.2 6.1-1.2 2.8 0 5 .7 6.5 2.2 1.4 1.4 2.1 3.4 2.1 5.9V20c0 .8-.6 1.5-1.5 1.5-.8 0-1.5-.6-1.5-1.4v-2c-1.4 1.9-3.8 3.5-7.3 3.5-3.6.1-7.4-2-7.4-6.1m14.8-1.6v-2c-1.5-.4-3.5-.8-6-.8-3.8 0-5.9 1.7-5.9 4.2v.1c0 2.5 2.3 4 5 4 3.9 0 6.9-2.3 6.9-5.5M5.5 2.1C4.9.6 3.2 0 1.7.6.2 1.2-.4 3 .4 4.4l6.4 13.9c1 2.2 2.1 3.4 4.1 3.4 2.1 0 3-1.3 4.1-3.4 0 0 5.6-12.2 5.7-12.3s.2-.5.8-.5c.5 0 .8.4.8.9v11.8c0 1.8 1 3.4 2.9 3.4 2 0 3-1.5 3-3.4V8.6c0-1.9 1.4-3.1 3.1-3.1 1.8 0 3 1.3 3 3.1v9.7c0 1.8 1 3.4 2.9 3.4 2 0 3-1.5 3-3.4V8.6c0-1.9 1.4-3.1 3.1-3.1 1.8 0 3 1.3 3 3.1v9.7c0 1.8 1 3.4 2.9 3.4 2 0 3-1.5 3-3.4v-11C52.2 3.2 49 .4 45 .4s-6.4 2.7-6.4 2.7C37.2 1.4 35.5.4 32.4.4c-3.2 0-6.1 2.7-6.1 2.7C25 1.4 22.7.4 21 .4c-2.8 0-5.1 1.3-6.5 4.4l-4.1 9.6zM134.9 3.3c0-1.4 1.2-2.5 2.5-2.5 1.4 0 2.5 1.2 2.5 2.5 0 1.4-1.2 2.5-2.5 2.5-1.4 0-2.5-1.1-2.5-2.5m4.5 0c0-1.2-.8-2-2-2s-2 .9-2 2c0 1.2.8 2 2 2s2-.9 2-2" />
              <path d="M138.4 3.4c-.1.1-.3.2-.5.3l.6.9h-.5l-.6-.9h-.4v.9h-.5V2h1.1c.2 0 .3 0 .5.1.1.1.3.2.3.3.1.1.1.3.1.4.1.3 0 .5-.1.6zm-1.4-.1h.6c.2 0 .3 0 .4-.1s.1-.2.1-.3-.1-.2-.1-.3c-.1-.1-.2-.1-.4-.1h-.6z" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
