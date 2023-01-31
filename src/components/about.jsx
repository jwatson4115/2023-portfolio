import React, { Component } from "react";

function AboutSection() {
  return (
    <div id="About" className="px-4 py-16 border-b-[#dcd9d9] border-b border-solid;">
      <div className="container mx-auto px-[15px] w-auto flex">
        <div className="w-1/3">
          <h1 className="relative inline-block text-[#374054] text-2xl
          after:absolute after:content-[''] after:h-px after:w-[50px] after:mx-auto after:my-0 after:top-full after:inset-x-0;
          after:bg-[#3498db] after:left-8
          ">
            About Me
          </h1></div>
        <div className="w-2/3">
          <p className="text-[#74808a] text-xl mt-0 mb-[15px] mx-0;">A passionate Software Engineer based in South Wales with a strong focus on Full-Stack Web Development.</p>
          <p className="text-[#74808a] text-xl mt-0 mb-[15px] mx-0;">I'm currently working for We Predict, writing software and predictive analytics solutions for leaders in the automotive industry, including Honda and JCB.</p>
        </div>
      </div>

    </div>
  );
}
export default AboutSection;
