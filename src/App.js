import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './components/layouts/NavBar';
import NextPrev from './components/layouts/NextPrev';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PokeDashboard from './components/layouts/PokeDashboard';
import PokeInfo from './components/pokemon/PokeInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <NextPrev/>
        <div className="container">
          <Switch>
              <Route exact path="/" component={PokeDashboard}/>
              <Route exact path="/pokemon/:pokeNumber" component={PokeInfo}/>
              <PokeDashboard/>
          </Switch>
        </div>
      </div>
  </Router>
    
  );
}

export default App;
