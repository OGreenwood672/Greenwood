import React, { Component } from "react";

import "./Featured.css"

export default class Featured1 extends Component {

    send_to_website(website) {
        window.location.href = website;
    }

    render() {
        return (
            <div className="featured">
                <div className="featured-left">
                    <h3 className="project-title">Algorithm Website</h3>
                    <p className="summary-text">
                        A website which visualises different types of algorithms, including: Graphing algorithms,    
                        Sorting algorithms, and some miscellaneous algorithms. 
                    </p>
                    <div className="project-technologies">
                        <p>Technologies used to develop this project include:</p>
                        <svg className="svg_techs">
                            <g>
                                <ellipse cx="44%" cy="24%" className="tech" />
                                <text className="tech-text" x="40.5%" y="28%">React</text>
                            </g>
                            <g>
                                <ellipse cx="56%" cy="24%" className="tech" />
                                <text className="tech-text" x="53%" y="28%">p5.js</text>
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
        )
    }
}