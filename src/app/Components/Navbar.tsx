/* eslint-disable @next/next/no-img-element */

export default function Navbar() {
  return (
    <div className="flex justify-center w-full h-20 mt-4 ">
      <div
        className="flex flex-none justify-between w-4/5 h-full rounded-2xl xs:full"
        style={{ backgroundColor: "#0e1120" }}
      >
        <div className="flex flex-none items-center w-1/6" id="logo">
          {" "}
          {/**Logo */}
          <img
            src="./Logo.svg"
            alt="logo"
            srcSet=""
            className="ms-10 object-contain"
          />
        </div>

        <div
          className="xxs:hidden md:flex flex-row flex-none flex-nowrap justify-around items-center xl:2/5 lg:w-8/12 md:w-10/12 me-6"
          id="navbar-default"
        >
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#heroProfile-greeting"
          >
            Home
          </a>
          <a
            className=" lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivAbout"
          >
            About
          </a>
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivSkills"
          >
            Skills
          </a>
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivProject"
          >
            Portfolio
          </a>
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivExperience"
          >
            Experience
          </a>
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivTestimonials"
          >
            Testimonials
          </a>
          <a
            className="lg:text-lg md:text-base opacity-50 focus:text-[#694cbe] focus:font-bold"
            href="#MainDivContact"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}
