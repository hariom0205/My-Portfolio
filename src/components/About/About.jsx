import React from "react";
import ReactTypingEffect from "react-typing-effect";
import profileImage from "../../assets/profilepic.jpg"; // Make sure path is correct

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-purple-500 shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Hello, I'm Hari Om Anand
          </h2>
          <ReactTypingEffect
            text={["Web Developer","MERN Stack Dev", "Tech Enthusiast | Code Learner "," Project Builder | Always Curious ", "Growing Through Learning & Building"]}
            speed={100}
            eraseSpeed={50}
            typingDelay={200}
            eraseDelay={1000}
            className="text-xl sm:text-2xl text-purple-400 font-semibold"
          />
          <p className="text-gray-300 max-w-xl">
            I’m a Full Stack (MERN) developer passionate about building functional, data-driven web applications. 
            I enjoy solving real-world problems through clean code and intuitive design. 
            Always eager to learn new tech, I love exploring ideas and turning them into impactful digital experiences.
          </p>
             <a
               href="/Hariomanand.pdf"
               download
                className="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-medium text-purple-600 transition duration-300 ease-out border-2 border-purple-600 rounded-full shadow-md group hover:text-white"
                >
              <span
                className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-600 group-hover:translate-x-0 ease"
              >
                Download CV
              </span>
                <span className="absolute flex items-center justify-center w-full h-full text-purple-600 transition-all duration-300 transform group-hover:translate-x-full ease">
                Download CV
              </span>
            <span className="relative invisible">Download CV</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
