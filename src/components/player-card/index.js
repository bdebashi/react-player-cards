import React, { Component } from 'react';
import './player-card.css';

class PlayerCard extends Component {

  render() {
    return (
      <div className="playerCard">
        <div className="playerCard__background">
          <div className="playerCard__playerImage">
            <img src={'/assets/images/p' + this.props.player.player.id + '.png'} alt="" id="pic" />
          </div>
        </div>
        <div className={'playerCard__clubBadge playerCard__clubBadge--' + this.props.player.player.currentTeam.id} id="club-badge" title="" />
        <div className="playerCard__details">
          <h2 className="playerCard__name">
            {this.props.player.player.name.first} {this.props.player.player.name.last}
          </h2>
          <p className="playerCard__position">
            {this._getPosition(this.props.player.player.info.position)}
          </p>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Appearances</span>
            <p className="playerCard__statValue" id="appearances">
              {this._getStat(this.props.player, 'appearances')}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Goals</span>
            <p className="playerCard__statValue" id="goals">
             {this._getStat(this.props.player, 'goals')}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Assists</span>
            <p className="playerCard__statValue" id="assists">
              {this._getStat(this.props.player, 'goal_assist')}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Goals per match</span>
            <p className="playerCard__statValue" id="goals-per-match">
              {(this._getStat(this.props.player, 'goals') / this._getStat(this.props.player, 'appearances')).toFixed(2)}
            </p>
          </div>

          <div className="playerCard__stats">
            <span className="playerCard__statTitle">Passes per minute</span>
            <p className="playerCard__statValue" id="passes-per-min">
            {((this._getStat(this.props.player, 'fwd_pass') + this._getStat(this.props.player, 'backward_pass')) / this._getStat(this.props.player, 'mins_played')).toFixed(2)}
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
