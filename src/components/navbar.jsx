import React, { Component } from "react";

// Stateless Functional Component
// !!! React will pass the props as a function argument at runtime !!!
// You CAN NOT use lifecycle hooks with stateless functional components
const NavBar = (props) => {
    // !!! DO NOT USE this.props inside a Stateless Functional Component; use the received function argument !!!

    console.log("NavBar - rendered")

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Navbar
                <span className="badge badge-pill badge-secondary">{props.totalCounters}</span>
            </a>
        </nav>
    );
};

export default NavBar;
