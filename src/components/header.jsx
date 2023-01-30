import React, { Component } from "react";

const Header = (props) => {
    const { } = props;

    return (
        <header class="absolute top-0 left-0 right-0 text-center z-20 animate-fade-in-top">
            {/* <div _ngcontent-c2="" id="mobile-menu-close">
            <span _ngcontent-c2="">Close</span>
            <i _ngcontent-c2="" aria-hidden="true" class="fa fa-times"></i>
        </div> */}
            <ul class="shadow inline-block bg-white text-center p-3 m-0 rounded-b" id="menu">
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="about-button" >About</a></li>
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="experience-button">Experience</a></li>
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="current-projects-button">Recent Projects</a></li>
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="projects-button">Projects</a></li>
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="skills-button">Skills</a></li>
                <li class="inline-block"><a class="block p-3 cursor-pointer text-theme1-textblue hover:bg-gray-200 rounded" id="contact-button">Contact</a></li>
            </ul>
        </header>
    );
};

export default Header;