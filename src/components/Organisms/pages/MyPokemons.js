import React, { useContext } from 'react';
import { LoggedInContext } from "../../Atoms/contexts/LoggedInContext";
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { useHistory } from "react-router-dom";


export function MyPokemons() {
    const loggedInData = useContext(LoggedInContext);
    const history = useHistory();

    if (loggedInData.loggedIn === false) {
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