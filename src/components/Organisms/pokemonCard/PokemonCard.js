import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

export const PokemonCard = ({url}) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`${url}`);
                //console.log(response.data);
                setPokemonData(response.data);
            }
            catch (e) {
                // alert("Oops, the pokemons got away");
            }
        }
        getPokemonData();
    }, [url]);

        return (
        <>
            <div className="pokemon-card">
                {pokemonData && (<div>
                        <h2>{pokemonData.name}</h2>
                            <img className="pokemon-img"
                                 src={pokemonData.sprites.front_default}
                                 alt={pokemonData.name}
                            />
                        <li>
                            <h4>Moves:</h4>
                            {pokemonData.moves.length}
                        </li>
                        <li>
                            <h4>Weight:</h4>
                            {pokemonData.weight}
                        </li>
                    <ul className="abilities">
                        <li>
                            <h4>Abilities:</h4>
                        </li>
                        {pokemonData.abilities.map((ability) => {
                            return <li key={ability.ability.name}>
                                {ability.ability.name}</li>
                        })}
                    </ul>
                </div>)}

            </div>

        </>
    )
}