import React, { Component } from "react";

import Featured1 from "./Featured1.js";
import Featured2 from "./Featured2.js";

import FadeIn from "./../Effects/FadeIn";

import "./Projects.css"

export default class Projects extends Component {

    send_to_website(website) {
        window.location.href = website;
    }

    render() {
        return (
            <div id="projects">
                <h2 className="project-tab-title">
                    Projects
                </h2>
                <FadeIn>
                    <Featured1 />
                </FadeIn>
                <FadeIn>
                    <Featured2 />
                </FadeIn>
                
                
            </div>
          );
      
    }

}