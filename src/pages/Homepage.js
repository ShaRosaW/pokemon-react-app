import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonCard } from "../components/pokemonCard/PokemonCard";
import { NavButtons } from "../components/navButtons/NavButtons";

export const Homepage = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`);
                console.log(response.data.results)
                setPokemonData(response.data.results);
            }
            catch (e) {
                console.log(e)
            }
        }
        getPokemons();
    }, [offset]);

    const getNext = () => {
        console.log("getNext");
        setOffset(offset + 10);
    }
    const getPrevious = () => {
        console.log("getPrevious");
        if ( offset !== 0 ) setOffset(offset - 10);
    }

    return (
        <>
            <h1> Homepage Pokemon </h1>
            <div>
                <NavButtons onNext={getNext} onPrevious={getPrevious}/>
            </div>
            <div>
                {pokemonData && (
                    pokemonData.map(({name, url}) => {
                        return <PokemonCard key={name} name={name} url={url}/>
                    })
                )}
            </div>
        </>
    )
}