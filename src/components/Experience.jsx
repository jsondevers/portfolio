import React from "react";
import ReactCardFlip from "react-card-flip";
import Microsoft from "../assets/teams/microsoft.gif";
import BAH from "../assets/teams/boozallen.jpeg";
import APL from "../assets/teams/jhuapl.png";
import UMDCS from "../assets/teams/umdcs.png";
import ARLIS from "../assets/teams/arlis.png";
import QUEST from "../assets/teams/quest.png";
import RA from "../assets/teams/reslife.png";
import SIGPHI from "../assets/teams/sigphi.png";

export default class Experience extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped1: false,
      isFlipped2: false,
      isFlipped3: false,
      isFlipped4: false,
      isFlipped5: false,
      isFlipped6: false,
      isFlipped7: false,
      isFlipped8: false,
      isFlipped9: false,
    };
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
    this.handleClick4 = this.handleClick4.bind(this);
    this.handleClick5 = this.handleClick5.bind(this);
    this.handleClick6 = this.handleClick6.bind(this);
    this.handleClick7 = this.handleClick7.bind(this);
    this.handleClick8 = this.handleClick8.bind(this);
    this.handleClick9 = this.handleClick9.bind(this);
  }
  handleClick1(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped1: !prevState.isFlipped1 }));
  }
  handleClick2(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped2: !prevState.isFlipped2 }));
  }
  handleClick3(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped3: !prevState.isFlipped3 }));
  }
  handleClick4(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped4: !prevState.isFlipped4 }));
  }
  handleClick5(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped5: !prevState.isFlipped5 }));
  }
  handleClick6(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped6: !prevState.isFlipped6 }));
  }
  handleClick7(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped7: !prevState.isFlipped7 }));
  }
  handleClick8(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped8: !prevState.isFlipped8 }));
  }
  handleClick9(e) {
    e.preventDefault();
    this.setState((prevState) => ({ isFlipped9: !prevState.isFlipped9 }));
  }
  render() {
    return (
      <div
        name="experience"
        className="w-full h-full bg-[#28282B] text-gray-300"
      >
        <div className="w-full h-[60px]" />
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
              Experience
            </p>
            <p className="py-4">Where I've worked:</p>
            <p className="py-2 font-bold">
              Click to flip the card to see what I did there!
            </p>
          </div>
          {/* LANGUAGES */}
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Internships
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped1}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick1}>
                  <img
                    className="w-30 mx-auto"
                    src={Microsoft}
                    alt="HTML icon"
                  />
                  <p className="text-base">Microsoft</p>
                  <p className="text-base">Software Engineering Intern</p>
                  <p className="text-sm">May 2023 - August 2023</p>
                  <p className="text-sm">Redmond, WA</p>
                </button>
                <button onClick={this.handleClick1}>
                  This upcoming summer I'm going to be working within the Azure
                  Cloud organization.{" "}
                </button>
              </ReactCardFlip>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped2}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick2}>
                  <img className="w-30 mx-auto" src={BAH} alt="HTML icon" />
                  <p className="text-base">Booz Allen Hamilton</p>
                  <p className="text-base">Software Engineering Intern</p>
                  <p className="text-sm">June 2022 - August 2022</p>
                  <p className="text-sm">Annapolis Junction, MD</p>
                </button>
                <button onClick={this.handleClick2}>
                  <p className="text-sm text-center">
                    <li>
                      Established secure communication between servers and
                      clients, using SSL TLS 1.3 to successfully defend against
                      48/50 attacks in Booz Allen internal tool testing.
                      <li>
                        Reverse engineered binaries to conduct vulnerability
                        analysis, decrypting communication, writing 3
                        exploitations that successfully took internal testing
                        systems offline.
                      </li>
                      <li>
                        Solved Xtensa processor instruction set to enable Ghidra
                        to process binary files with 90% accuracy.
                      </li>
                      <li>
                        Presented outline and documentation to Booz Allen staff
                        for deployment.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped3}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick3}>
                  <img className="w-30 mx-auto" src={APL} alt="HTML icon" />
                  <p className="text-base">Johns Hopkins Applied Physics Lab</p>
                  <p className="text-base">Software Engineering Intern</p>
                  <p className="text-sm">June 2018 - September 2018</p>
                  <p className="text-sm">Laurel, MD</p>
                </button>
                <button onClick={this.handleClick3}>
                  <p className="text-sm text-center">
                    <li>
                      Constructed autonomous system and charted LIDAR using
                      Python, ROS, Linux, VM-Ware, MATLAB to launch robot.
                      <li>
                        Enhanced algorithm to demonstrate computer-vision using
                        LIDAR to scan surroundings, and a colored-camera to
                        detect certain objects, taking system surroundings from
                        90◦ to 270◦.
                      </li>
                      <li>
                        Documented ROS manual for Johns Hopkins APL staff for
                        future Navy use
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>
          </div>
          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Academic
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped4}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick4}>
                  <img className="w-30 mx-auto" src={UMDCS} alt="HTML icon" />
                  <p className="text-base">UMD Computer Science Department</p>
                  <p className="text-base">Coding Instructor</p>
                  <p className="text-sm">August 2022 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick4}>
                  <p className="text-sm text-center">
                    <li>
                      Formulated and lectured course content for over 150
                      students, teaching topics such as Graphs, OOP, and
                      Algorithms.
                    </li>
                    <li>
                      Analyzed logic and identified flaws in algorithms designed
                      by students from across 300 various assignments and exams.
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped5}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick5}>
                  <img className="w-30 mx-auto" src={ARLIS} alt="HTML icon" />
                  <p className="text-base">UMD ARLIS</p>
                  <p className="text-base">Research Assistant</p>
                  <p className="text-sm">August 2022 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick5}>
                  <p className="text-sm text-center">
                    <li>
                      Examined NLP using techniques involving AI/ML based off
                      predictive analytics to examine risk assessments.
                      <li>
                        Identified, tested, and resolved 2 previous projects to
                        improve scalability and design.
                      </li>
                      <li>
                        Oversaw 3 intern projects to delegate and manage project
                        timeline and deliverables using Agile and DMAIC process
                        improvement.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped6}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick6}>
                  <img className="w-30 mx-auto" src={QUEST} alt="HTML icon" />
                  <p className="text-base">QUEST Honors Program</p>
                  <p className="text-base">Student Consultant</p>
                  <p className="text-sm">May 2021 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick6}>
                  <p className="text-sm text-center">
                    <li>
                      Quality Enhancement Systems and Teams: Multidisciplinary
                      curriculum that engages to complete experimental learning
                      projects, and gain unique teamwork, and problem-solving
                      skills to prepare for future careers.
                      <li>
                        SenCycle: Launched a blind-spot detection sensor for
                        bicycles and presented the product within a team
                        covering market analysis and financial considerations.
                      </li>
                      <li>
                        Residential Facilities Consultant: Collaborated with UMD
                        staff to improve the current procurement process and
                        lead to more efficient project management.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>
          </div>

          <p className="text-2xl font-bold inline border-b-4 border-pink-600 ">
            Leadership
          </p>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped7}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick7}>
                  <img className="w-30 mx-auto" src={RA} alt="HTML icon" />
                  <p className="text-base">UMD ResLife</p>
                  <p className="text-base">Resident Assistant</p>
                  <p className="text-sm">July 2021 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick7}>
                  <p className="text-sm text-center">
                    <li>
                      Facilitated community development and enforced student
                      conduct and crisis management.
                      <li>
                        Coordinated event programming to build relationships
                        amongst students and staff to create inclusive
                        environments.
                      </li>
                      <li>
                        Served as a role model and mentor, guiding over 500
                        students in the community.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>
            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped8}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick8}>
                  <img className="w-30 mx-auto" src={QUEST} alt="HTML icon" />
                  <p className="text-base">QUEST Honors Program</p>
                  <p className="text-base">Director of Recruiting/Mentor</p>
                  <p className="text-sm">August 2022 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick8}>
                  <p className="text-sm text-center">
                    <li>
                      Implement essential skills for mentoring and coaching
                      multidisciplinary teams, including: effective
                      communication, facilitation, conflict resolution, and the
                      ability to motivate.
                      <li>
                        Guide 9 student teams in involving Design-Thinking,
                        DMAIC/DMEDI, Six-Sigma, Agile Development, Kaizen, and
                        more.
                      </li>
                      <li>
                        Organized and spoke at informational events for over 300
                        students to learn about the program.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>

            <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <ReactCardFlip
                isFlipped={this.state.isFlipped9}
                flipDirection="vertical"
              >
                <button onClick={this.handleClick9}>
                  <img className="w-30 mx-auto" src={SIGPHI} alt="HTML icon" />
                  <p className="text-base">Sigma Phi Delta Engineering Frat</p>
                  <p className="text-base">Co Rush Chair</p>
                  <p className="text-sm">July 2021 - Current</p>
                  <p className="text-sm">College Park, MD</p>
                </button>
                <button onClick={this.handleClick9}>
                  <p className="text-sm text-center">
                    <li>
                      Orchestrated events to bring in largest rush class in
                      history of Fraternity.
                      <li>
                        Facilitated mental and physical health seminars and
                        check-ins to ensure wellness throughout the Fraternity.
                      </li>
                    </li>
                  </p>
                </button>
              </ReactCardFlip>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
