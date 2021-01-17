import React, { useContext } from 'react';
import { LoggedInContext } from "../../../contexts/LoggedInContext";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useHistory } from "react-router-dom";


export function MyPokemons() {
    const loggedIn = useContext(LoggedInContext);
    const history = useHistory();

    if (loggedIn.loggedIn === false) {
        history.push("/");
    }
    return (
        <>
            <div>
            <PokemonCard name="rattata" />
            <PokemonCard name="pikachu" />
            </div>
        </>

    )
}