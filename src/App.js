import React, { Component } from "react";

import Navbar from "./Components/Navbar";
import MobileMenu from "./Components/MobileMenu";
import TitleText from "./Components/TitleText";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Education from "./Components/Education";
import ContactMe from "./Components/ContactMe";
import Socials from "./Components/Socials";

import FadeIn from "./Effects/FadeIn";

import './App.css';
import './ColourScheme.css';

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

            <div className="thin-content">

                <TitleText />

                <FadeIn>
                    <About />
                </FadeIn>
            </div>
                

            {/* <div className="thick-content">

                <FadeIn>
                    <Featured1 />
                </FadeIn>

                <FadeIn>
                    <Featured2 />
                </FadeIn>
            
            </div> */}
            <div className="thick-content">
                <FadeIn>
                    <Projects />
                </FadeIn>
            </div>
            <div className="thin-content">

                <FadeIn>
                    <Education />
                </FadeIn>

                <FadeIn>
                    <ContactMe />
                </FadeIn>
            </div>

            <footer className="App-footer">
                <MobileMenu />
            </footer>


      </div>
    );
    }
}

export default App;
