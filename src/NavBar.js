import React, { Component } from "react";
import {Link} from "react-router-dom";

export class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <i><b>NewsWave</b></i>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"  // Use '#' for ID selector
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/home">
                                        <i>Home</i>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">
                                        <i>About</i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;
