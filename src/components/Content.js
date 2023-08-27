import "./ContentStyle.css";
import NET from 'vanta/dist/vanta.net.min';
import {useEffect, useRef, useState} from "react";
import About from "./About";
import {Element} from "react-scroll";
import Journey from "./Journey";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
const Content = () => {

    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(NET({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                color: 0x3c2ca7,
                backgroundColor: 0x0,
                points: 15.00,
                spacing: 20.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);

    return (
        <>
            <div className="hero">
                <div className="canvas" ref={myRef}>
                </div>
                <Element className="hero" id="hero">
                    <div className="hero-container">
                        <p> Hello, I'm Adri</p>
                        <h1>Software Developer</h1>
                    </div>
                </Element>
                <Element className="about" id="about">
                    <About/>
                </Element>
                <Element className="journey" id="journey">
                    <Journey/>
                </Element>
                <Element className="projects" id="projects">
                    <Projects/>
                </Element>
                <Element className="testimonials" id="testimonials">
                    <Testimonials/>
                </Element>
                <Element className="contact" id="contact">
                    <Contact/>
                </Element>
            </div>

        </>
    );
}

export default Content;