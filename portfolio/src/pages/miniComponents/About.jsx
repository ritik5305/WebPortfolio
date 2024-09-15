import React from "react";

const About = () => {
  return (
    <div className="w-full flex flex-col overflow-x-hidden">
      <div className="relative">
        <h1
          className="flex gap-4 items-center text-[2rem] sm:text-[2.75rem] 
          md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] 
          lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold about-h1"
          style={{
            background: "hsl(222.2 84% 4.9%)",
          }}
        >
          ABOUT <span className="text-tubeLight-effect font-extrabold">ME</span>
        </h1>
        <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
      </div>
      <div className="text-center">
        <p className="uppercase text-xl text-slate-400">
          Allow me to introduce myself.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-2 my-8 sm:my-20 gap-14">
          <div className="flex justify-center items-center">
            <img
              src="/me.jpeg"
              alt="avatar"
              className="bg-white p-2 sm:p-4 rotate-[25deg] h-[240px] sm:h-[340px] md:h-[350px] lg:h-[450px]"
            />
          </div>
          <div className="flex justify-center flex-col tracking-[1px] text-xl gap-5">
            <p>
              My name is Ritik Roushan, but my friends call me Ritik. I'm
              pursuing a degree in Computer Science and am set to graduate in
              2025. I work as a MERN stack developer, always staying ahead with
              new technologies. My hobbies include exploring new tech, solving
              coding challenges, and staying updated with the latest trends in
              software development.
            </p>
            <p>
              I have a strong passion not only for technology but also for
              problem-solving and innovation. I'm dedicated to delivering
              high-quality work and thrive on meeting deadlines.
            </p>
          </div>
        </div>
        <p className="tracking-[1px] text-xl">
          I have interests not only in technology but also in football, writing
          poetry, and listening to music. I excel in meeting deadlines for my
          work.
        </p>
      </div>
    </div>
  );
};

export default About;
