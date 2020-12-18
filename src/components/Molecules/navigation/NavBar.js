import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { LoggedInContext } from "../../Atoms/contexts/LoggedInContext";

export default function NavBar() {
    const loggedInData = useContext(LoggedInContext);

    return(
        <nav>
            <Link to="/">Home</Link>
            {loggedInData.loggedIn &&
            <Link to="/mypokemon">My Pokemons</Link>
            }
            {!loggedInData.loggedIn && (
            <button onClick={() => loggedInData.setLoggedIn(true)}>
                Inloggen
            </button>
            )}
        </nav>
    );
}