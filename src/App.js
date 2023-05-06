import React, { Component } from "react";

import Navbar from "./Components/Navbar";
import TitleText from "./Components/TitleText";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";
import Socials from "./Components/Socials";

import FadeIn from "./Effects/FadeIn";

import './App.css';


class App extends Component {


  render() {
    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>

            <div orientation="left">
                <Socials />
            </div>

            <div orientation="right">

            </div>

            <div className="content">

                <TitleText />

                <FadeIn>
                    <About />
                </FadeIn>

                <FadeIn>
                    <Projects />
                </FadeIn>

                <FadeIn>
                    <Education />
                </FadeIn>

                <FadeIn>
                    <ContactMe />
                </FadeIn>

            </div>
            

      </div>
    );
    }
}

export default App;
