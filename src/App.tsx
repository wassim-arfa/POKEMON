import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PokemonList from './pages/pokemon-list';
import PokemonsDetail from './pages/pokemon-detail';

const App: FunctionComponent = () => {
    return (
        <Router>
            <nav>
                <div>
                    <Link to="/" className="brand-logo center">Pokédex</Link>
                </div>
            </nav>
           
           <Switch>
               <Route exact path="/" component={PokemonList}/>
               <Route exact path="/pokemons" component={PokemonList}/>
               <Route exact path="/pokemons/:id" component={PokemonsDetail}/>
           </Switch>
        </Router>
    )
}

export default App;