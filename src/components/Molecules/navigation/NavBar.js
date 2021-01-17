import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LoggedInContext } from "../../../contexts/LoggedInContext";
import './NavBar.css';

export default function NavBar() {
    const { loggedIn } = useContext(LoggedInContext);

    return(
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            {loggedIn &&
            <Link to="/mypokemons">My Pokemons</Link>}
            {!loggedIn && (
            <button className="log-button" onClick={() => loggedIn.setLoggedIn(true)}>
                My Pokemon Cards
            </button>
            )}
        </nav>
    );
}