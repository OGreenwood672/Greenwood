import React, { Component } from "react";

import "./Socials.css";
import "./Loading.css";

export default class Socials extends Component {


    render() {
        return (
            <div id="socials">
                <ul className="social_list social-slideup">
                    <li><a href="https://www.instagram.com/_greenwood672"><img className="social" alt="" src="./social_icons/insta.png"></img></a></li>
                    <li><a href="https://www.discord.com/users/Greenwood#6835"><img className="social" alt="" src="./social_icons/discord.png"></img></a></li>
                    <li><a href="https://www.github.com/OGreenwood672"><img className="social" alt="" src="./social_icons/github.png"></img></a></li>
                    <li><a href="https://www.linkedin.com/in/oliver-greenwood-bb2825214"><img className="social" alt="" src="./social_icons/LinkedIn.png"></img></a></li>
                </ul>
            </div>
          );
      
    }

}