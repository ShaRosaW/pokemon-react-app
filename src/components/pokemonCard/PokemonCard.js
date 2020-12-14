import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PokemonCard.css';

export const PokemonCard = ({name,url}) => {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const getPokemonData = async () => {
            try {
                const response = await axios.get(`${url}`);
                setPokemonData(response.data);
            }
            catch (e) {
                console.log(e)
            }
        }
        getPokemonData();
    }, [url]);

    return (
        <>
            {pokemonData && <div>
                <h3>{name}</h3>
            </div>}
        </>

    )
}