import React, { FunctionComponent } from 'react';
import PokemonCard from '../components/pokemon-card';
import usePokemons from '../hooks/pokemon.hook';
const PokemonList: FunctionComponent = () => {
    const pokemons = usePokemons()
    return (
        <>
            <h1 className="center">Pokédex</h1>
            <div className="container">
                <div className="row">
                    {pokemons.map(pokemon => (
                        <div key={pokemon.id} className="col s4">
                            <PokemonCard pokemon={pokemon} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PokemonList;