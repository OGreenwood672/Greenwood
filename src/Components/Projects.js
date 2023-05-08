import React, { Component } from "react";

import "./Projects.css"

export default class Projects extends Component {


    render() {
        return (
            <div id="projects">
                <h2>
                    Projects
                </h2>
                <div className="featured">
                    <div className="project-summary">
                        <h3 className="project-title">yadyyada</h3>
                        <p>Hello summary</p>
                        <div className="project-technologies">
                        <p>technologies:</p>
                        </div>
                    </div>
                    <div className="project-img">
                        <a href="/">
                        <img href="./project-imgs/project_algorithms.png" alt="algorithms-website">
                        </img>
                        </a>
                    </div>
                </div>
                <div className="featured">
                    
                </div>
            </div>
          );
      
    }

}