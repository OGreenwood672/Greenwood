import React, { useState } from "react";

import "./Education.css"

export default function Education() {

    const [tab, setTab] = useState("tab1");
    var change_tab = new_tab => {
        setTab(new_tab);
    }

    return (
        <div id="education">
            <h2>
                Education
            </h2>
            <div id="edu-table">
                <div className="tab-col">
                    <ul className="tabs">
                        <li onClick={() => change_tab("tab1")}><p className={`button ${tab === "tab1" ? "edu-tab-active" : ""}`}>University</p></li>
                        <li onClick={() => change_tab("tab2")}><p className={`button ${tab === "tab2" ? "edu-tab-active" : ""}`}>A Levels</p></li>
                        <li onClick={() => change_tab("tab3")}><p className={`button ${tab === "tab3" ? "edu-tab-active" : ""}`}>GCSEs</p></li>
                    </ul>
                </div>
                <div className="content-col">
                    <div className={`edu-info ${tab === "tab1" ? "" : "edu-hidden"}`}>
                        <h2>University of Cambridge (2023 - )</h2>
                        <p>Good Morning VIETNAM</p>
                    </div>
                    <div className={`edu-info ${tab === "tab2" ? "" : "edu-hidden"}`}>
                        <h2>A Levels (2021 - 2023)</h2>
                        <table className="ALevel-table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mathematics</td>
                                    <td>A*</td>
                                </tr>
                                <tr>
                                    <td>Further Mathematics</td>
                                    <td>A*</td>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td>A*</td>
                                </tr>
                                <tr>
                                    <td>Physics</td>
                                    <td>A</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className={`edu-info ${tab === "tab3" ? "" : "edu-hidden"}`}>
                        <h2>GCSEs (2018 - 2021)</h2>
                        <table className="GCSE-table">
                            <thead>
                                <tr>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                    <th>Subject</th>
                                    <th>Grade</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mathematics</td>
                                    <td>9</td>
                                    <td>Physics</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Biology</td>
                                    <td>9</td>
                                    <td>Chemistry</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>Computer Science</td>
                                    <td>9</td>
                                    <td>Electronics</td>
                                    <td>9</td>
                                </tr>
                                <tr>
                                    <td>History</td>
                                    <td>8</td>
                                    <td>French</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>English Language</td>
                                    <td>7</td>
                                    <td>English Literature</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>Further Mathematics</td>
                                    <td>9</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        );
    
    }