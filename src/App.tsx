import React, {FunctionComponent, useEffect, useState} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
  
const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 useEffect(()=>{setPokemons(POKEMONS)}, [])   
 return (
     <>
     <h1>Pokédex</h1>
     <p>There are {pokemons.length} Pokemon(s)</p>
     </>
 )
}
  
export default App;