import React, { Component } from "react";

import "./Projects.css"

export default class Projects extends Component {

    render() {
        return (
            <div className="projects">
                <h4 id="other-projects-title">Other Projects</h4>
                <table>
                    <tr>
                        <td>
                            <a href="https://github.com/OGreenwood672/LyricGame">
                                <div className="other-project">
                                    <img src="./project_imgs/project_lyric.png" alt="" />
                                </div>
                            </a>
                        </td>
                        <td>
                            <a href="https://github.com/OGreenwood672/Natural-Selection-Simulation">
                                <div className="other-project">
                                    <img src="./project_imgs/project_natural_selection.png" alt="" />
                                </div>
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
          );
      
    }

}