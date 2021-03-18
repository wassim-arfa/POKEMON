import React, { FunctionComponent } from 'react';
import Pokemon from '../models/pokemon';

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

type Props = {
    pokemon: Pokemon,
};

const PokemonCard: FunctionComponent<Props> = ({ pokemon }) => {

    return (

        <div className="card horizontal">
            <div className="card-image">
                <img className="responsive-img" src={pokemon.picture} alt={pokemon.name} />
            </div>
            <div className="card-stacked">
                <div className="card-content">
                    <h4 className="header">{pokemon.name}</h4>
                    <div className="row valign-wrapper">
                        {pokemon.types.map((t: any) => (
                            <span className={` new badge ${mapPockemonTypeToColor(t)}`} data-badge-caption="">{t}</span>
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