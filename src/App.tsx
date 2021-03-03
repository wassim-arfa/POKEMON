import React, {FunctionComponent, useEffect, useState} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';
  
const mapPockemonTypeToColor = (pockemonType: string): string => {
    switch (pockemonType) {
        case 'Feu':
            return 'red';
        case 'Eau':
            return 'blue';
        case 'Plante':
            return 'green';
        case 'Poison':
            return 'purple';        
        case 'Normal':
            return '#bdbdbd grey lighten-1';
        case 'Vol':
            return '#c5cae9 indigo lighten-4';        
        case 'Fée':
            return '#f48fb1 pink lighten-3';
        case 'Electrik':
            return '#ffd600 yellow accent-4';
        case 'Insecte':
            return '#8bc34a light-green';
        default:
            return 'defaultColor';
    }
}

const App: FunctionComponent = () => {
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);
 useEffect(()=>{setPokemons(POKEMONS)}, [])   
 return (
     <>
     <div className="center">
     <h1>Pokédex</h1>
     <p>There are {pokemons.length} Pokemon(s)</p>
     </div>
     <div className="row">
     {pokemons.map((p)=>(
<div key={p.id} className="col s3">
  <div className="card horizontal">
    <div className="card-image">
      <img className="responsive-img" src={p.picture} alt={p.name} />
    </div>
    <div className="card-stacked">
      <div className="card-content">
        <h4 className="header">{p.name}</h4>
        <div className="row">
            {p.types.map((t:any)=>(
                <span className={`col s3 new badge ${mapPockemonTypeToColor(t)}`} data-badge-caption="">{t}</span>                
            ))}
    </div>
        <p>HP : {p.hp}</p>
        <p>CP : {p.cp}</p>
      </div>
    </div>
  </div>
</div>
     ))}
     </div>

     </>
 )
}
  
export default App;