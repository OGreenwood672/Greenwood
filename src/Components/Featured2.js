import React, { Component } from "react";

import "./Featured.css"

export default class Featured2 extends Component {

    send_to_website(website) {
        window.location.href = website;
    }

    render() {
        return (
            <div className="featured">
                    <div className="featured-left">
                        <img className="featured-img" src="./project_imgs/project_twitter.png" alt="" />
                        <div className="project-link-button">
                            <div onClick={() => this.send_to_website("https://github.com/OGreenwood672/Twitter-Map")} className="project-link">
                                <img className="project-link-icon" src="./social_icons/github.png" alt="" />
                                <b>View on GitHub</b>
                            </div>
                        </div>
                    </div>
                    <div className="featured-right">
                        <a href="https://github.com/OGreenwood672/Twitter-Map" className="project-title">Twitter Map</a>
                        <p className="summary-text">
                            A software which is able to scrape data from Twitter's API
                            and create a force directed map of their community both 2D
                            and 3D. 
                        </p>
                        <div className="project-technologies">
                            <p>Technologies used to develop this project include:</p>
                            <svg className="svg_techs">
                                <g>
                                    <ellipse cx="44%" cy="24%" className="tech" />
                                    <text className="tech-text" x="42%" y="28%">API</text>
                                </g>
                                <g>
                                    <ellipse cx="56%" cy="24%" className="tech" />
                                    <text className="tech-text" x="52%" y="28%">three.js</text>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
        )
    }
}