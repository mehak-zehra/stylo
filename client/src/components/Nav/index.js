import React from "react";
import { Link, useHistory } from "react-router-dom";
import icon from '../../assets/icons8-test-account-64.png'
import { useStoreContext } from "../../utils/GlobalState";
import { UPDATE_USER } from '../../utils/actions';

function Nav(props) {
    const [state, dispatch] = useStoreContext();
    let history = useHistory();

    function handleLogout() {
        dispatch({
            type: UPDATE_USER,
            user: {
                isLoggedIn: false,
            }
        })
        history.push("/")
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg p-0 pr-2 pl-2">
                <Link to="/" className="logo navbar-brand p-0 text-white ml-2">
                    stylo
                </Link>

                <button className="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    {state.user.isLoggedIn ? (
                        <>
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link to="/home" className="nav-link text-white">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/catalog-men" className="nav-link text-white">Men</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/catalog-women" className="nav-link text-white">Women</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link text-white">Subscriptions</Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <img className="nav-link dropdown-toggle mr-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false" alt="" src={icon} width="50px" height="50px" />
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <a href="/" className="dropdown-item" >Profile</a>
                                        <a href="/" className="dropdown-item" >Settings</a>
                                        <div className="dropdown-divider"></div>
                                        <a href="/" className="dropdown-item" onClick={handleLogout}>Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </>) :
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            <li>
                                <Link to="/signup">
                                    <button className="btn btn-link mr-2 text-white">Sign Up</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    <button className="btn btn-outline-light pl-4 pr-4">Login</button>
                                </Link>
                            </li>
                        </ul>
                    }

                </div>
            </nav>
        </header>
    )
}

export default Nav;