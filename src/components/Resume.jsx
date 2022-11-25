import React from "react";
import Resume from "../assets/resume/JASON_DEVERS.pdf";
const Contact = () => {
  return (
    <div name="resume" className="w-full h-full bg-[#28282B] flex-col p-4">
      <div className="w-full h-[60px]" />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Resume
          </p>

          <p className="text-gray-300 py-4">
            {" "}
            <a
              href="https://github.com/jsondevers/ResumeBuilder-/raw/main/JASON_DEVERS.pdf"
              download="JASON_DEVERS.pdf"
            >
              <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg
                  class="fill-current w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>Download</span>
              </button>
            </a>
          </p>

          <embed src={Resume} width="100%" height="100%"></embed>
        </div>
      </div>
    </div>
  );
};

export default Contact;
