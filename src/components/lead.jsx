import React, { Component } from "react";
import HeaderContent from "./header-content";
function Lead() {
  const name = "James Watson";
  const title = "Software Engineer & Full-Stack Web Developer";

  return (
    <HeaderContent name={name} title={title}></HeaderContent>
    // <Header1 name={name} title={title}></Header1>
  );
}

export default Lead;
