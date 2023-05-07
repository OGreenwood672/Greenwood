import React from "react";
import { Link } from "react-scroll";
import { useScrollDirection } from './../Effects/GetScrollDirection';

import "./Navbar.css";
import "./Loading.css";

export default function Navbar() {

    const scrollDirection = useScrollDirection();

    return (
        <nav className={`nav ${scrollDirection === "up" ? "show-nav" : "hide-nav"}`} id="navbar">
            <ol className="nav-content">
                <img className="logo logo-slideleft" src="./clock.png" alt="Website logo">
                </img>
                <ol className="nav-items">
                    <li className="nav-item underline nav-slidedown">
                        <Link to="about" spy={true} smooth={true} offset={-75} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item underline nav-slidedown">
                        <Link to="projects" spy={true} smooth={true} offset={-75} duration={500}>
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item underline nav-slidedown">
                        <Link to="education" spy={true} smooth={true} offset={-75} duration={500}>
                            Education
                        </Link>
                    </li>
                    <li className="nav-item underline nav-slidedown">
                        <Link to="contactme" spy={true} smooth={true} offset={-75} duration={500}>
                            Contact Me
                        </Link>
                    </li>
                    <li className="nav-item">Resume</li>
                </ol>
            </ol>
        </nav>
        );
    
}
