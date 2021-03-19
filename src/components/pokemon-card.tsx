import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router';

type Props = {
    pokemon: Pokemon,
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {
const history = useHistory();
const goTopokemon= (id:number)=>{
history.push(`/pokemons/${id}`)   
}
    return (

        <div className="card horizontal hoverable" onClick={()=>goTopokemon(pokemon.id)}>
            <div className="card-image">
                <img className="responsive-img" src={pokemon.picture} alt={pokemon.name} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <h4 className="header">{pokemon.name}</h4>
                    <div className="row valign-wrapper">
                        {pokemon.types.map((t: any) => (
                            <span className={` new badge ${formatType(t)}`} data-badge-caption="">{t}</span>
                        ))}
                    </div>
                    <p>HP : {pokemon.hp}</p>
                    <p>CP : {pokemon.cp}</p>
                </div>
            </div>
        </div>
    );
}

export default PokemonCard;