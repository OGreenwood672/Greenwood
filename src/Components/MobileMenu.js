import React from "react";
import { Link } from "react-scroll";


import "./MobileMenu.css"

import { useScrollDirection } from './../Effects/GetScrollDirection';


export default function MobileMenu() {

    const scrollDirection = useScrollDirection();

    return (
        <div>
            <div className={`${scrollDirection === "up" ? "show-logo" : "hide-logo"} mobile-menu`}>
                <Link to="about" spy={true} smooth={true} offset={-75} duration={500} className="small-logo">
                    <img id="about-menu-button" className="small-logo hidden" src="./icons/info.png" alt="About icon"/>
                </Link>
                <Link to="featured1" spy={true} smooth={true} offset={-200} duration={500} className="small-logo">
                    <img id="projects-menu-button" className="small-logo hidden" src="./icons/projects.png" alt="Projects icon"/>
                </Link>
                <Link to="name" spy={true} smooth={true} offset={-400} duration={500}>
                    <img id="mobile-menu-button" className="large-logo" src="./clock.png" alt="Website logo"/>
                </Link>
                <Link to="education" spy={true} smooth={true} offset={-75} duration={500} className="small-logo">
                    <img id="contact-menu-button" className="small-logo hidden" src="./icons/education.png" alt="Education icon"/>
                </Link>
                <Link to="contactme" spy={true} smooth={true} offset={-75} duration={500} className="small-logo">
                    <img id="contact-menu-button" className="small-logo hidden" src="./icons/contact.png" alt="Contact icon"/>
                </Link>
            </div>
        </div>
        );
    
}
