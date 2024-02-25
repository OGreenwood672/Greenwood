import React, { Component } from "react";

import "./Projects.css"

export default class Projects extends Component {

    render() {
        return (
            <div className="project-section">
                <h4 id="projects-title">Projects</h4>
                <div className="projects">

                    <a href="https://ogreenwood672.github.io/algorithms/#/">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">Algorithm Showcase Website</p>
                            </div>
                            <img src="./project_imgs/project_algorithms.png" alt="" />
                            <div className="mobile-title">
                                <p>Algorithm Showcase Website</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://ogreenwood672.github.io/algorithms/#/twitter/verified/2d">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">Twitter Map</p>
                            </div>
                            <img src="./project_imgs/project_twitter.png" alt="" />
                            <div className="mobile-title">
                                <p>Twitter Map</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/LyricGame">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">Online Lyric Game</p>
                            </div>
                            <img src="./project_imgs/project_lyric.png" alt="" />
                            <div className="mobile-title">
                                <p>Online Lyric Game</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/Natural-Selection-Simulation">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">Natural Selection Simulator</p>
                            </div>
                            <img src="./project_imgs/project_natural_selection.png" alt="" />
                            <div className="mobile-title">
                                <p>Natural Selection Simulator</p>
                            </div>
                        </div>
                    </a>

                    <a href="https://github.com/OGreenwood672/OCAML_Graphics">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">OCAML Ray Tracing</p>
                            </div>
                            <img src="./project_imgs/ocaml_graphics.png" alt="" />
                            <div className="mobile-title">
                                <p>OCAML Ray Tracing</p>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div className="project">
                            <div className="project-info">
                                <p className="project-title">The Bartender</p>
                            </div>
                            <img src="./project_imgs/the_bartender.png" alt="" />
                            <div className="mobile-title">
                                <p>The Bartender</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
          );
      
    }

}