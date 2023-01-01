import React from "react";

import HTML from "../assets/skills/html.png";
import CSS from "../assets/skills/css.png";
import JavaScript from "../assets/skills/javascript.png";
import ReactImg from "../assets/skills/react.png";
import Node from "../assets/skills/node.png";
import GitHub from "../assets/skills/github.png";
import Tailwind from "../assets/skills/tailwind.png";
import Mongo from "../assets/skills/mongo.png";
import Python from "../assets/skills/python.png";
import Java from "../assets/skills/java.png";
import C from "../assets/skills/c.png";
import CPP from "../assets/skills/cpp.png";
import CSharp from "../assets/skills/csharp.png";

import Ruby from "../assets/skills/ruby.png";
import Ocaml from "../assets/skills/ocaml.png";
import Rust from "../assets/skills/rust.png";
import Go from "../assets/skills/go.png";
import Assembly from "../assets/skills/assembly.png";

import Docker from "../assets/skills/docker.webp";
import SQL from "../assets/skills/sql.png";

import Azure from "../assets/skills/azure.png";
import JUnit from "../assets/skills/junit.png";
import XUnit from "../assets/skills/xunit.png";
import Flask from "../assets/skills/flask.png";
import Neo4J from "../assets/skills/neo4j.png";

import Django from "../assets/skills/django.png";
import Jupyter from "../assets/skills/jupyter.png";
import Pandas from "../assets/skills/pandas.ico";
import NumPy from "../assets/skills/numpy.png";
import OpenCV from "../assets/skills/opencv.png";
import TensorFlow from "../assets/skills/tensorflow.png";
import Git from "../assets/skills/git.png";
import Ghidra from "../assets/skills/ghidra.png";
import API from "../assets/skills/api.webp";
import Wireshark from "../assets/skills/wireshark.png";
import VirtualBox from "../assets/skills/virtualbox.png";

import Linux from "../assets/skills/linux.png";
import Apple from "../assets/skills/apple.png";
import Windows from "../assets/skills/windows.png";
import ROS from "../assets/skills/ros.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-full bg-[#28282B] text-gray-300">
      <div className="w-full h-[60px]" />
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">
            In order from MOST proficient to LEAST proficient
          </p>
        </div>
        {/* LANGUAGES */}
        <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
          Languages
        </p>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Python} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-24 mx-auto" src={Java} alt="HTML icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="HTML icon" />
            <p className="my-4">C</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CPP} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={CSharp} alt="c#" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={Rust} alt="rust" />
            <p className="my-4">Rust</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ruby} alt="HTML icon" />
            <p className="my-4">Ruby</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="html" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="css" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="javascript" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ocaml} alt="HTML icon" />
            <p className="my-4">OCaml</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={Go} alt="go" />
            <p className="my-4">GO</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Assembly} alt="assembly" />
            <p className="my-4">ASSEMBLY</p>
          </div>
        </div>
        {/* TECHNOLOGIES */}
        <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
          Technologies
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="github" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Git} alt="git" />
            <p className="my-4">Git</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="node.js" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-30 mx-auto" src={Django} alt="django" />
            <p className="my-4">Django</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-42 mx-auto" src={Flask} alt="flask" />
            <p className="my-4">Flask</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Azure} alt="azure" />
            <p className="my-4">Azure</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="mongodb" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Docker} alt="docker" />
            <p className="my-4">Docker</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="react" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="tailwind" />
            <p className="my-4">Tailwind</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={SQL} alt="sql" />
            <p className="my-4">SQL</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Jupyter} alt="jupyter" />
            <p className="my-4">Jupyter</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={JUnit} alt="junit" />
            <p className="my-4">JUnit</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={XUnit} alt="xunit" />
            <p className="my-4">XUnit</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Pandas} alt="pandas" />
            <p className="my-4">Pandas</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-28 mx-auto" src={NumPy} alt="numpy" />
            <p className="my-4">NumPy</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-32 mx-auto" src={Neo4J} alt="neo4j" />
            <p className="my-4">neo4j</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={OpenCV} alt="opencv" />
            <p className="my-4">OpenCV</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TensorFlow} alt="tensorflow" />
            <p className="my-4">TensorFlow</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Ghidra} alt="ghidra" />
            <p className="my-4">Ghidra</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Wireshark} alt="wireshark" />
            <p className="my-4">Wireshark</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={VirtualBox} alt="vbox" />
            <p className="my-4">VirtualBox</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={API} alt="api" />
            <p className="my-4">API's</p>
          </div>
        </div>
        {/* OPERATING SYSTEMS */}
        <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
          Operating Systems
        </p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={Linux} alt="linux" />
            <p className="my-4">Linux</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Apple} alt="apple" />
            <p className="my-4">Apple</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Windows} alt="windows" />
            <p className="my-4">Windows</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-36 mx-auto" src={ROS} alt="ros" />
            <p className="my-4">ROS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
