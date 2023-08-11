import {Link} from "react-router-dom";
import "./NavbarStyle.css"
import {FaBars, FaTimes} from "react-icons/fa";
import React, {useState} from "react";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="header">
            <h1>Adrian</h1>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li>
                    <Link to="#about">About</Link>
                </li>
                <li>
                    <Link to="#Journey">Journey</Link>
                </li>
                <li>
                    <Link to="#Projects">Projects</Link>
                </li>
                <li>
                    <Link to="#Contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{color: "#fff"}}/>) : (<FaBars size={20} style={{color: "#fff"}}/>)}
            </div>
        </div>

    );
}

export default Navbar