import React, { Component } from "react";

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
                <div className="featured">
                    <div className="project-summary">
                        <h3 className="project-title">Algorithm Website</h3>
                        <p className="summary-text">
                            A website which visualises different types of algorithms, including: Graphing algorithms,    
                            Sorting algorithms, and some miscellaneous algorithms. 
                        </p>
                        <div className="project-technologies">
                            <p>Technologies used to develop this project include:</p>
                            <svg height="140" width="500">
                                <g>
                                    <ellipse cx="65" cy="35" rx="60" ry="30"
                                    className="tech" />
                                    <text className="tech-text" x="32" y="42">React</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="featured-right">
                        <img className="featured-img" src="./project_imgs/project_algorithms.png" alt="" />
                        <div className="project-link-button">
                            <div onClick={() => this.send_to_website("https://github.com/OGreenwood672/algorithms")} className="project-link">
                                <img className="project-link-icon" src="./social_icons/github.png" alt="" />
                                <b>View on GitHub</b>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="featured">
                    
                </div>
            </div>
          );
      
    }

}