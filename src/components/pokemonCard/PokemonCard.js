import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

export const PokemonCard = ({url}) => {
    const [pokemonData, setPokemonData] = useState(null);
    const [status, setStatus] = useState("loading");

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`${url}`);
                console.log(response.data);
                setPokemonData(response.data);
                setStatus("done loading")
            }
            catch (e) {
                // alert("Oops, the pokemons got away");
                setStatus("error");
                //console.log(e)
            }
        }
        getPokemonData();
    }, [url]);

    if (status === "loading") {
        return <h3>Loading</h3>;
    }   else if (status === "error") {
        return <h3>O nooo, the pokemons have disappeared, click refresh</h3>;
    }   else {


        return (
        <>
            {pokemonData ? (<div>
                <ul>
                    <li><h2>{pokemonData.name}</h2></li>
                    <li className="image">
                    <h3><img src={pokemonData.sprites.front_default}
                             alt={pokemonData.name}
                    />
                    </h3>
                    </li>
                    <li>
                        <h4>Moves:</h4>
                        {pokemonData.moves.length}
                    </li>
                    <li>
                        <h4>Weight:</h4>
                        {pokemonData.weight}
                    </li>
                </ul>
                <ul className="abilities">
                    <li>
                        <h4>Abilities:</h4>
                    </li>
                        {pokemonData.abilities.map((ability) => {
                            return <li key={ability.ability.name}>
                                    {ability.ability.name}</li>
                })}

                </ul>
            </div>
            ) : (
                <span className="loading">Loading...</span>
                )
            }
        </>

    )
}}