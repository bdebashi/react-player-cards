import React, { Component } from 'react';
import PlayerCard from '../player-card/index';
import './player-select.css';
import axios from 'axios';

class PlayerSelect extends Component {

  constructor() {
    super();

    this.state = {
      players: [],
      value: '',
      selectedPlayer: {}
    };

    this.handleChange = this.updateSelectedPlayer.bind(this);
  }

  componentDidMount() {
    this._fetchPlayers();
    this.handleChange = this.handleChange.bind(this);
  }

  updateSelectedPlayer(event) {
    const selectedId = parseInt(event.target.value, 10);
    this.setState({ value: selectedId });
    const selected = this.state.players.filter(player => player.player.id === selectedId);
    this.setState({ selectedPlayer: selected[0] });
  }

  render() {
    return (
      <div className="playerSelect">
        <select
          value={this.state.value} onChange={this.handleChange}
          className="playerSelect__select"
        >
          {this.state.players.map((player) =>
            <option key={player.player.id} value={player.player.id}>
              {player.player.name.first} {player.player.name.last}
            </option>
          )}
        </select>
        <div className="playerSelect__card">
        { this.state.selectedPlayer.player &&
          <PlayerCard player={this.state.selectedPlayer} />
        }
        </div>
      </div>
    );
  }

  _fetchPlayers() {
    axios.get('./data/player-stats.json')
      .then(response => {
        const players = response.data.data
        this.setState({ players });
        this.setState({ selectedPlayer: this.state.players[0] });
      })
  }
}

export default PlayerSelect;
