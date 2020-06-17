import React, { Component } from 'react';

import PokemonList from '../pokemon/PokemonList';

export default class PokeDashboard extends Component {
    render() {
        return (
            <div className="row">
                <div className="col">
                    <PokemonList/>
                </div>
            </div>
        )
    }
}
