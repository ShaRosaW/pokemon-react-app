import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { PokemonCard } from "../pokemonCard/PokemonCard";
import { NavButtons } from "../../Molecules/navigation/NavButtons";
import './Homepage.css';
import { LoggedInContext } from "../../Atoms/contexts/LoggedInContext";
import image from '../../../assets/pokemon-header.png'

export const Homepage = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [offset, setOffset] = useState(0);
    const [status, setStatus] = useState("loading");
    const loggedInData = useContext(LoggedInContext);


    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
                setPokemonData(response.data.results);
                setStatus("done loading")
            } catch (e) {
                setStatus("error");
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
        if (offset !== 0)
            setOffset(offset - 20);
    }

    if (status === "loading") {
        return <h3>Loading</h3>;
    } else if (status === "error") {
        return <h3>O nooo, the pokemons have disappeared, click refresh</h3>;
    } else {

        return (
            <>
                <div className="homepage">
                    <img className="header-pokemon" src={image} alt="header"/>
                        <h2>
                        Gotta catch 'em all!!
                        </h2>
                    <div>
                        <button className="log-button" onClick={() => loggedInData.setLoggedIn(true)}>
                            Inloggen
                        </button>
                    </div>
                    <div className="nav-buttons">
                        <NavButtons disabled={offset === 1118} onNext={getNext}
                            // disabled={offset === 0 }
                                    onPrevious={getPrevious}
                        />
                    </div>
                    <main>
                        <div className="pokemon-data">
                            {pokemonData && (
                                pokemonData.map(({name, url}) => {
                                    return <PokemonCard
                                        key={name}
                                        url={url}
                                    />
                                })
                            )}
                        </div>
                    </main>
                </div>
            </>
        )
    }
}