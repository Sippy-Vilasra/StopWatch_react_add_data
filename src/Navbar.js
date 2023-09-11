import React from "react";
import "./Styles.css";
import { Link } from "react-router-dom";


function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="logo">Shopio</div>
                <ul className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">DataAdd</Link>
                    <Link to="/shop">NameAdd</Link>
                    <Link to="/login">Reset</Link>
                    <Link to="/reducer">StopWatch</Link>
                </ul>
            </div>
        </>
    );
}

export default Navbar;