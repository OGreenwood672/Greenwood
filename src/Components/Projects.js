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
                    <div className="featured-right">
                        <img className="featured-img" src="./project_imgs/project_algorithms.png" alt="" />
                        <div className="project-link-button">
                            <b><p href="/" className="project-link">Img</p></b>
                        </div>
                    </div>
                </div>
                <div className="featured">
                    
                </div>
            </div>
          );
      
    }

}