import React, { Component } from "react";


import "./TitleText.css";
import "./Loading.css";

export default class TitleText extends Component {

    render() {
        return (
            <div className="Main-Text">
                <p className="typed-text">Hi, my name is</p>
                <div className="titletext-fade">
                    <h1 id="name">
                        Oliver Greenwood
                    </h1>
                    <p>Hey there</p>
                </div>
                
            </div>
          );
      
    }

}