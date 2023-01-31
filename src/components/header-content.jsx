import React, { Component } from "react";

const HeaderContent = (props) => {
  const { name, title } = props;

  return (
    <headerContent
      class="flex h-screen justify-center items-center overflow-hidden relative
        bg-header-2 bg-gradient-to-b from-theme1-gradient-start to-theme1-gradient-end max-h-[600px] min-h-[500px]"
    >
      {/* <RandomAnimation></RandomAnimation> */}

      <div class="text-center p-2 bg-theme1-primary80 z-10">
        <h1 class="text-4xl md:text-6xl lg:text-8xl text-shadow text-white font-bold mb-2 animate-fade-in-left">
          {name}
        </h1>

        <p class="text-2xl md:text-4xl lg:text-5xl text-shadow text-lead-title animate-fade-in-right mb-10">
          {title}
        </p>

        <button
          className="bg-theme1-button border-solid border-4 border-white rounded-full
            text-white text-xl font-bold
            hover:underline hover:animate-button-pulse hover:text-white p-4"
        >
          Download Resume
        </button>
      </div>

      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </headerContent>
  );
};

export default HeaderContent;
