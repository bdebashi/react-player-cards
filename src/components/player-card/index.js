import React, { Component } from 'react';
import './player-card.css';

class PlayerCard extends Component {

  constructor(props) {
    super();

    this.state = {
      info: props.player,
      appearances: this._getStat(props.player, 'appearances'),
      goals: this._getStat(props.player, 'goals'),
      assists: this._getStat(props.player, 'goal_assist'),
      minsPlayed: this._getStat(props.player, 'mins_played'),
      fwdPass: this._getStat(props.player, 'fwd_pass'),
      bwdPass: this._getStat(props.player, 'backward_pass'),
      position: this._getPosition(props.player.player.info.position)
    };
  }

  render() {
    return (
      <div className="playerCard">
        <div className="playerCard__background">
          <div className="playerCard__playerImage">
            <img src={'/assets/images/p' + this.state.info.player.id + '.png'} alt="" id="pic" />
          </div>
        </div>
        <div className={'playerCard__clubBadge playerCard__clubBadge--' + this.state.info.player.currentTeam.id} id="club-badge" title="" />
        <div className="playerCard__details">
          <h2 className="playerCard__name">
            {this.state.info.player.name.first} {this.state.info.player.name.last}
          </h2>
          <p className="playerCard__position">
            {this.state.position}
          </p>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Appearances</span>
            <p className="playerCard__statValue" id="appearances">
              {this.state.appearances}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Goals</span>
            <p className="playerCard__statValue" id="goals">
             {this.state.goals}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Assists</span>
            <p className="playerCard__statValue" id="assists">
              {this.state.assists}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Goals per match</span>
            <p className="playerCard__statValue" id="goals-per-match">
              {(this.state.goals / this.state.appearances).toFixed(2)}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Passes per minute</span>
            <p className="playerCard__statValue" id="passes-per-min">
            {((this.state.fwdPass + this.state.bwdPass) / this.state.minsPlayed).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    );
  }

  _getStat(player, type) {
    return player.stats.filter(stat => stat.name.includes(type))[0].value;
  }

  _getPosition(position) {
    const pos = {
      F: 'Forward ',
      M: 'Midfielder',
      D: 'Defence',
      G: 'Goalkeeper'
    }

    return pos[position];
  }
}

export default PlayerCard;
