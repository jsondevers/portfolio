import React from "react";
import Bot from "../assets/projects/bot.png";

import Face from "../assets/projects/face.png";
import SCORE from "../assets/projects/score.png";
import Resume from "../assets/projects/resume.png";
import Maze from "../assets/projects/maze.png";
import DSA from "../assets/projects/dsa.png";
import Vision from "../assets/projects/vision.png";
import DS from "../assets/projects/ds.png";
import Suit from "../assets/projects/suit-repair.png";
import Regex from "../assets/projects/regex.png";
import Interpret from "../assets/projects/interpret.png";
import Parser from "../assets/projects/parser.png";
import Battleship from "../assets/projects/battleship.png";
import Shell from "../assets/projects/shell.png";
import ASM from "../assets/projects/assembly.png";
import Calendar from "../assets/projects/calendar.png";
import DocumentManager from "../assets/projects/doc-man.png";
import Orders from "../assets/projects/orders.png";
import VideoManager from "../assets/projects/video.png";
import WebPage from "../assets/projects/webpage.png";
import OnlineTest from "../assets/projects/design.png";
import Tetris from "../assets/projects/tetris.png";
import WateringStation from "../assets/projects/watering-station.png";
import GymBot from "../assets/projects/gym-bot.png";
import FoodTracker from "../assets/projects/food-tracker.png";

import Python from "../assets/projects/used/python.png";
import LaTex from "../assets/projects/used/latex.png";
import Heroku from "../assets/projects/used/heroku.png";
import GroupMe from "../assets/projects/used/groupme.png";
import Flask from "../assets/projects/used/flask.png";
import C from "../assets/projects/used/c.png";
import CPP from "../assets/projects/used/cpp.png";
import Java from "../assets/projects/used/java.png";
import JUnit from "../assets/projects/used/junit.png";
import Jupyter from "../assets/projects/used/jupyter.png";
import Make from "../assets/projects/used/make.png";
import MATLAB from "../assets/projects/used/matlab.png";
import NumPy from "../assets/projects/used/numpy.png";
import Ruby from "../assets/projects/used/ruby.png";
import Pandas from "../assets/projects/used/pandas.png";
import Ocaml from "../assets/projects/used/ocaml.png";
import OpenCV from "../assets/projects/used/opencv.png";
import TensorFlow from "../assets/projects/used/tensorflow.png";
import Axis from "../assets/projects/used/axis.png";
import Rust from "../assets/projects/used/rust.png";
import Assembly from "../assets/projects/used/assembly.png";
import HTML from "../assets/projects/used/html.png";
import Docker from "../assets/projects/used/docker.webp";
import Arduino from "../assets/projects/used/arduino.png";

const Experience = () => {
  // projects file

  //setProject(data);

  return (
    <div name="projects" className="w-full h-fit text-gray-300 bg-[#28282B]">
      <div className="w-full h-[60px]" />
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Projects
          </p>
          <p className="py-2 font-bold">
            Some of the cards are clickable to links of code.
          </p>
        </div>
        <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
          Personal
        </p>
        {/* container for projects */}
        <div className="w-fit grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://github.com/jsondevers/ra_bot">
              <button>
                <img class="w-full" src={Bot} alt="Bot"></img>

                <div class="font-bold text-lg  text-gray-300">RA Bot</div>
                <h1>August 2022</h1>
                <p className="text-sm text-center">
                  <li>
                    Designed a bot to interact with my residents via GroupMe
                    while I'm in class.
                  </li>
                  <li>
                    RA bot is able to remind residents of important events,
                    check for profanity, help with FAQs, let them know when
                    there’s chicken-tenders at the dining hall, and play games.
                  </li>
                  <li>
                    Working with supervisor to scale bot to multiple RA staffs!
                  </li>
                </p>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <img
                    src={Python}
                    alt="python"
                    style={{ width: "40px" }}
                  ></img>
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <img
                    src={Heroku}
                    alt="heroku"
                    style={{ width: "100px" }}
                  ></img>
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <img
                    src={GroupMe}
                    alt="groupme"
                    style={{ width: "60px" }}
                  ></img>
                </span>
                <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  <img src={Flask} alt="flask" style={{ width: "70px" }}></img>
                </span>
              </button>
            </a>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={Face} alt="face"></img>
            <div class="font-bold text-lg  text-gray-300">
              Dev[ers]Ops Facial Recognition
            </div>
            <h1>October 2022</h1>
            <p className="text-sm text-center">
              <li>
                Upgraded family security camera using opensource SDK kit from
                Axis Communications to detect family members.
              </li>
              <li>
                Tested classifier to successfully recognize 3/4 family members.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={CPP} alt="cpp" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={OpenCV} alt="opencv" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img
                src={TensorFlow}
                alt="tensorflow"
                style={{ width: "40px" }}
              ></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Axis} alt="flask" style={{ width: "70px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={SCORE} alt="score"></img>

            <div class="font-bold text-lg  text-gray-300">
              SCORE Ticket Routing
            </div>
            <h1>September 2022</h1>
            <p className="text-sm text-center">
              <li>
                Redefined NLP functionality for Score Association company to
                streamline ticket processing.
              </li>
              <li>
                Synthesized over 1500 ticket reports that categorized tags for
                ticket, improving routing classification with 92% accuracy.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Python} alt="python" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Pandas} alt="pandas" style={{ width: "60px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={NumPy} alt="numpy" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Jupyter} alt="jupyter" style={{ width: "40px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/jsondevers/ra_bot">
                <img class="w-full" src={Resume} alt="resume"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">Resume Builder</div>
              <h1>Time</h1>
              <p className="text-sm text-center">
                <li>
                  Created a resume template for students in my honors program
                  and professional fraternity to use.
                </li>
                <li>
                  Allows customization for resume that standard document editors
                  don't allow.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={LaTex} alt="latex" style={{ width: "100px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/jsondevers/ra_bot">
                <img class="w-full" src={DSA} alt="dsa"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Data Structures & Algorithms
              </div>
              <p className="text-lg">∞</p>
              <p className="text-sm text-center">
                <li>
                  Upgraded family security camera using opensource SDK kit from
                  Axis Communications to detect family members.
                </li>
                <li>
                  Tested classifier to successfully recognize 3/4 family
                  members.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={CPP} alt="cpp" style={{ width: "40px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Python} alt="python" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/jsondevers/mazerunner">
                <img class="w-full" src={Maze} alt="maze"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">Maze Runner</div>
              <h1>June 2021</h1>
              <p className="text-sm text-center">
                <li>
                  Visualized algorithms to solve mazes, showing efficiency and
                  approaches of different algorithms.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Python} alt="python" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/jsondevers/FoodTracker">
                <img class="w-full" src={FoodTracker} alt="dsa"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">Food Tracker</div>
              <h1>August 2021</h1>
              <p className="text-sm text-center">
                <li>
                  Built a Food Tracker program using linked-list with dynamic
                  memory allocation.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={C} alt="C" style={{ width: "40px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Make} alt="make" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={GymBot} alt="dsa"></img>

            <div class="font-bold text-lg  text-gray-300">
              Gym Reservation Bot
            </div>
            <h1>November 2020</h1>
            <p className="text-sm text-center">
              <li>
                During COVID, we had to sign-up for reservations to use our
                school gym.
              </li>
              <li>Problem was that these spots would fill up very quickly.</li>
              <li>
                Created an automation bot using UMD’s RecWell API that would
                sign up for the Gym at 9am so I could sleep-in.
              </li>
            </p>

            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Python} alt="python" style={{ width: "40px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/jsondevers/wateringStation">
                <img class="w-full" src={WateringStation} alt="dsa"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Watering Station
              </div>
              <h1>July 2018</h1>
              <p className="text-sm text-center">
                <li>
                  My first ever personal project, finishing this project is what
                  sparked me to pursue computer-science!
                </li>
                <li>
                  Created watering system to water my grandmother’s plants using
                  scripts and sensors.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={CPP} alt="cpp" style={{ width: "40px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Arduino} alt="python" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>
        </div>

        <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
          School
        </p>
        <p className="py-4"> Some of my favorite school projects!</p>
        <p className="py-2 font-bold">
          Links to project descriptions. No links to my code for academic
          integrity reasons.
        </p>

        <div className="w-fit grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://cmsc426.github.io/">
                <img class="w-full" src={Vision} alt="Mountain"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Computer Vision Projects
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC426 Fall '22</p>
              <p className="text-sm text-center">
                <li>
                  Applied color segmentation, image acquisition, and panaroma
                  stitching on real projects.
                </li>
                <li>
                  Researched and tested various classification methods such as
                  RANSAC, Linear Least Squares, and Gaussian Mixture Models
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={MATLAB} alt="matlab" style={{ width: "50px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/cmsc320/fall2022/">
                <img class="w-full" src={DS} alt="Mountain"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Data Science Projects
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC320 Fall '21</p>
              <p className="text-sm text-center">
                <li>
                  Developed skills such as data exploration, data visualization,
                  machine learning, and feature engineering.
                </li>
                <li>
                  Explored and used classification methods such as Support
                  Vector Machines, Naive Bayes, Logistic Regression, Neural
                  Networks, and K-Nearest Neighbors.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Python} alt="python" style={{ width: "40px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img
                  src={Jupyter}
                  alt="jupyter"
                  style={{ width: "40px" }}
                ></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Docker} alt="docker" style={{ width: "50px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={NumPy} alt="numpy" style={{ width: "50px" }}></img>
              </span>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Pandas} alt="pandas" style={{ width: "60px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/umd-cmsc330/cmsc330spring22/tree/main/project5">
                <img class="w-full" src={Suit} alt="suit"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Stark Suit Repair
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC330 Spring '22</p>
              <p className="text-sm text-center">
                <li>
                  Implemented functional programming in Rust to help Tony Stark
                  repair his Iron Man suit.
                </li>

                <li>
                  Allowed the use of shared memory safely using Rust invariants,
                  taking advantage of smart pointers.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Rust} alt="rust" style={{ width: "50px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/umd-cmsc330/cmsc330spring22/tree/main/project3">
                <img class="w-full" src={Regex} alt="regex"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Regular Expression Engine
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC330 Spring '22</p>
              <p className="text-sm text-center">
                <li>
                  Implemented algorithms for NFA/DFA and regular expressions to
                  match strings based off interpreter.
                </li>
                <li>
                  Converted Regular Expressions to NFA, then NFA to DFA, and
                  vise-versa. Then running DFA to determine if string matched.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Ocaml} alt="ocaml" style={{ width: "50px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/umd-cmsc330/cmsc330spring22/tree/main/project4b">
                <img class="w-full" src={Interpret} alt="interpret"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Ocaml Interpreter
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC330 Spring '22</p>
              <p className="text-sm text-center">
                <li>
                  Evaluated expressions and Mutop directives in a given
                  environment to produce a new given environment.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Ocaml} alt="ocaml" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/umd-cmsc330/cmsc330spring22/tree/main/project4a">
                <img class="w-full" src={Parser} alt="parser"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">
                Ocaml Lexer & Parser
              </div>
              <p class="italic  text-sm  text-gray-300">CMSC330 Spring '22</p>
              <p className="text-sm text-center">
                <li>
                  Developed a tokenizer/scanner by intelligently processing
                  input string using regular expressions.
                </li>
                <li>
                  Parsed expressions and Mutop directives by taking a stream of
                  tokens and producing a abstract syntax tree.
                </li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Ocaml} alt="ocaml" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <button>
              <a href="https://github.com/umd-cmsc330/cmsc330spring22/tree/main/project1b">
                <img class="w-full" src={Battleship} alt="battleship"></img>
              </a>
              <div class="font-bold text-lg  text-gray-300">Battleship</div>
              <p class="italic  text-sm  text-gray-300">CMSC330 Spring '22</p>

              <p className="text-sm text-center">
                <li>
                  Implemented Battleship game logic by processing text files and
                  using attack strategies.
                </li>

                <li>Processed input and tested to build a 10x10 Game Board.</li>
              </p>
              <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                <img src={Ruby} alt="ruby" style={{ width: "40px" }}></img>
              </span>
            </button>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={Shell} alt="shell"></img>
            <div class="font-bold text-lg  text-gray-300">Shell</div>
            <p class="italic  text-sm  text-gray-300">CMSC216 Summer '21</p>

            <p className="text-sm text-center">
              <li>
                Implemented the guts of a shell supporting boolean operations,
                pipes, anf file redirection.
              </li>
              <li>
                Allowed for functionality of subshells, pipes, and logical
                functions such as AND or OR.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={C} alt="C" style={{ width: "40px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={ASM} alt="asm"></img>
            <div class="font-bold text-lg  text-gray-300">
              Assembly Functions
            </div>
            <p class="italic  text-sm  text-gray-300">CMSC216 Summer '21</p>
            <p className="text-sm text-center">
              <li>Recreated string and math functions in Assembly.</li>
              <li>
                Implemented is_palindrome, reverse_prefix_sum, fibonacci, and
                is_sqrt.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img
                src={Assembly}
                alt="assembly"
                style={{ width: "60px" }}
              ></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={Calendar} alt="calendar"></img>
            <div class="font-bold text-lg  text-gray-300">
              Calendar Application
            </div>
            <p class="italic  text-sm  text-gray-300">CMSC216 Summer '21</p>

            <p className="text-sm text-center">
              <li>
                Implemented a Calendar application using dynamic memory
                allocation techniques.
              </li>
              <li>
                Implemented a scheduling system from scratch with memory
                testing.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={C} alt="c" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Make} alt="make" style={{ width: "50px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              class="w-full"
              src={DocumentManager}
              alt="documentmanager"
            ></img>
            <div class="font-bold text-lg  text-gray-300">Document Manager</div>
            <p class="italic  text-sm  text-gray-300">CMSC216 Summer '21</p>

            <p className="text-sm text-center">
              <li>
                Implemented a document manager that allowed users to add
                paragraphs, add lines to paragraphs, replace text, and edit the
                document.
              </li>
              <li>
                Created a user-interface via the command line that allowed users
                to load and use the functions that were created.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={C} alt="c" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Make} alt="make" style={{ width: "50px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={Orders} alt="Mountain"></img>
            <div class="font-bold text-lg  text-gray-300">Order Processor</div>
            <p class="italic  text-sm  text-gray-300">CMSC132 Spring '21</p>
            <p className="text-sm text-center">
              <li>
                Processed a plethora of files and used multi-threading and
                synchronization to process orders simultaneously.
              </li>
              <li>
                Tested and ensured thread safety and allowed program to process
                up to 600k orders.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Java} alt="java" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={JUnit} alt="junit" style={{ width: "70px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={VideoManager} alt="videomanager"></img>
            <div class="font-bold text-lg  text-gray-300">Video Manager</div>
            <p class="italic  text-sm  text-gray-300">CMSC132 Spring '21</p>
            <p className="text-sm text-center">
              <li>
                Designed a program from scratch to manage a video database,
                similar to YouTube.
              </li>
              <li>
                Implemented functions including searching for videos, clearing
                the database, getting statistics for a video, and more.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Java} alt="java" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={JUnit} alt="junit" style={{ width: "70px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={WebPage} alt="webpage"></img>
            <div class="font-bold text-lg  text-gray-300">
              Web Page Generator
            </div>
            <p class="italic  text-sm  text-gray-300">CMSC132 Spring '21</p>
            <p className="text-sm text-center">
              <li>
                Developed a set of classes that support HTML page generation.
              </li>
              <li>
                Created an element interface that implmented different tags to
                create a HTML5 web page.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Java} alt="java" style={{ width: "35px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={JUnit} alt="junit" style={{ width: "60px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={HTML} alt="html" style={{ width: "35px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={OnlineTest} alt="onlinetest"></img>
            <div class="font-bold text-lg  text-gray-300">
              Online Test Design
            </div>
            <p class="italic  text-sm  text-gray-300">CMSC132 Spring '21</p>
            <p className="text-sm text-center">
              <li>Created a data manager of an online test manager system.</li>
              <li>
                The manager allowed for the definition of exams with different
                kinds of questions, along with statistics.
              </li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Java} alt="java" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={JUnit} alt="junit" style={{ width: "70px" }}></img>
            </span>
          </div>

          <div class="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img class="w-full" src={Tetris} alt="tetris"></img>
            <div class="font-bold text-lg  text-gray-300">Tetris</div>
            <p class="italic  text-sm  text-gray-300">CMSC132 Spring '21</p>
            <p className="text-sm text-center">
              <li>Implemented the classic Tetris game with a GUI.</li>
              <li>Developed game logic to support Tetris functionality.</li>
            </p>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={Java} alt="java" style={{ width: "40px" }}></img>
            </span>
            <span class="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <img src={JUnit} alt="junit" style={{ width: "70px" }}></img>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
