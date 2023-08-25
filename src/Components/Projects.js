import React, { Component } from "react";

import "./Projects.css"

export default class Projects extends Component {

    render() {
        return (
            <div>
                <h4 id="projects-title">Projects</h4>
                <div className="projects">

                    <a href="https://github.com/OGreenwood672/">
                        <div className="project">
                            <img src="./project_imgs/project_algorithms.png" alt="" />
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/">
                        <div className="project">
                            <img src="./project_imgs/project_twitter.png" alt="" />
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/LyricGame">
                        <div className="project">
                            <img src="./project_imgs/project_lyric.png" alt="" />
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/Natural-Selection-Simulation">
                        <div className="project">
                            <img src="./project_imgs/project_natural_selection.png" alt="" />
                        </div>
                    </a>
                </div>
            </div>
          );
      
    }

}