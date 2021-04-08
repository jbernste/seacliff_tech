import React from 'react'
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="site-main-menu">
            <ul>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/"}><span className="menu-text">Home</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/about"}><span className="menu-text">Why Us</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/service"}><span className="menu-text">What We Do</span></NavLink>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Clients</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                </li>
                <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Find Us</span></NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
