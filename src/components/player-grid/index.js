import React, { Component } from 'react';
import PlayerCard from '../player-card/index';
import './player-grid.css';
import axios from 'axios';

class PlayerGrid extends Component {

  constructor() {
    super();

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    this._fetchStats();
  }

  render() {
    const players = this._getPlayerCards();
    return (
      <div className="playerGrid">
        <h1 className="playerGrid__heading">Player Cards</h1>
        <div className="playerGrid__list">
          {players}
        </div>
      </div>
    );
  }

  _getPlayerCards() {
    return this.state.players.map((player) => {
      return <PlayerCard
               player={player}
               key={player.player.id} />
    });
  }

  _fetchStats() {
    axios.get('./data/player-stats.json')
      .then(response => {
        const players = response.data.data
        this.setState({ players });
      })
  }
}

export default PlayerGrid;
