import React, { Component } from "react";

import "./About.css"

export default class About extends Component {

    render() {
        return (
            <div id="about">
                <h2>About me:</h2>
                <div id="about-content">
                    <p id="about-text">
                        Hi there, my name is Oliver Greenwood. I am a self-taught programmer,
                        with strong experience in Python...
                    </p>
                    <img src="me.png" alt="Oliver Greenwood"/>
                </div>
            </div>
          );
      
    }

}