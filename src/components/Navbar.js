import {Link} from "react-scroll";
import "./NavbarStyle.css"
import {FaBars, FaTimes} from "react-icons/fa";
import React, {useState} from "react";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
let brand = "<...>"
    return (
        <div className="header">
            <Link activeClass="active" to="hero" spy={true} smooth={true}><h1>{brand}</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link activeClass="active" to="about" spy={true} smooth={true}  onClick={handleClick}>About</Link>
                </li>
                <li>
                    <Link activeClass="active" to="journey" spy={true} smooth={true} onClick={handleClick}>Journey</Link>
                </li>
                <li>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} onClick={handleClick}>Projects</Link>
                </li>
                <li>
                    <Link activeClass="active" to="testimonials" spy={true} smooth={true} onClick={handleClick}>Testimonials</Link>
                </li>
                <li>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} onClick={handleClick}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
            </div>
        </div>

    );
}

export default Navbar