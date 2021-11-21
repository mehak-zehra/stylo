import React from "react";
import icon from '../../assets/icons8-test-account-64.png'

function Nav(props) {

    return (
        <header>
            <nav className="navbar navbar-expand-lg p-0 pr-2 pl-2">
                <a className="logo navbar-brand p-0 text-white ml-2" href="/">
                    stylo
                </a>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {props.isLoggedIn ? (
                        <>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link text-white" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Men</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Women</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="/">Subscriptions</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <img className="nav-link dropdown-toggle mr-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" src={icon} width="50px" height="50px" />
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="#">Profile</a>
                                        <a className="dropdown-item" href="#">Settings</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" onclick="logout()">Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </>) :
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li>
                                <a href="/signup">
                                    <button className="btn btn-link mr-2 text-white">Sign Up</button>
                                </a>
                            </li>
                            <li>
                                <a href="/login">
                                    <button className="btn btn-outline-light pl-4 pr-4">Login</button>
                                </a>
                            </li>
                        </ul>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Nav;