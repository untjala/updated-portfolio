import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-darkGreen">
            hiya, i'm jala.
            <br className="hidden lg:inline-block" />
            i like to build cool things.
          </h1>
          <p className="mb-8 leading-relaxed text-black">
            full-stack developer passionate about creating creative & useful applications. I love to learn new skills, and push the ones I think I know.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-mauve border-0 py-2 px-6 focus:outline-none hover:bg-lightGreen rounded text-lg">
              work with me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-mauve border-0 py-2 px-6 focus:outline-none hover:bg-lightGreen hover:text-white rounded text-lg">
              my projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./placeholderjala.jpeg"
          />
        </div>
      </div>
    </section>
  );
}
