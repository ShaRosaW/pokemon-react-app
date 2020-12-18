import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { PokemonCard } from "../components/pokemonCard/PokemonCard";
import { NavButtons } from "../components/navButtons/NavButtons";
import './Homepage.css';

export const Homepage = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [offset, setOffset] = useState(0);


    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
                //console.log(response.data)
                setPokemonData(response.data.results);

            }
            catch (e) {
                //console.log(e)

            }
        }
        getPokemons();
    }, [offset]);

    const getNext = () => {
        console.log("getNext");
        //if ( offset >= 1118 )
            setOffset(offset + 20);
    }
    const getPrevious = () => {
        //console.log("getPrevious");
        if ( offset !== 0 )
            setOffset(offset - 20);
    }

    return (
        <>
            <header className="header-pokemon">
                <h1>Pokemon, gotta catch 'em all!!</h1>
            </header>
            <div className="nav-buttons">
                <NavButtons disabled={offset === 1118} onNext={getNext}
                            // disabled={offset === 0 }
                            onPrevious={getPrevious}/>

            </div>
            <main>
                {pokemonData && (
                    pokemonData.map(({name, url}) => {
                        return <PokemonCard
                            key={name}
                            url={url}

                        />
                    })
                )}
            </main>
        </>
    )
}