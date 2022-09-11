import { ArrowRightIcon } from "@heroicons/react/solid";

import React from "react";

export default function Navbar() {
  return (
    <header className="body-font font-roboto bg-dustPink md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="text-white italic font-bold mb-4 md:mb-0 hover:text-darkGreen">
          <a href="#about" className="ml-3 text-3xl hover:animate-pulse">
            jala unterreiner
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-darkGreen flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            projects
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-white border-0 py-1 px-3 hover:bg-lightGreen hover: animate-pulse rounded text-base mt-4 md:mt-0">
          hire me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
