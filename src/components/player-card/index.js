import React from 'react';
import './player-card.css';

const PlayerCard = (props) => {

  const getStat = (player, type) => {
    return player.stats.filter(stat => stat.name.includes(type))[0].value;
  };

  const getPosition = (position) => {
    const pos = {
      F: 'Forward ',
      M: 'Midfielder',
      D: 'Defence',
      G: 'Goalkeeper'
    }

    return pos[position];
  };

  return (
    <div className="playerCard">
      <div className="playerCard__background">
        <div className="playerCard__playerImage">
          <img src={'/assets/images/p' + props.player.player.id + '.png'} alt="" id="pic" />
        </div>
      </div>
      <div className={'playerCard__clubBadge playerCard__clubBadge--' + props.player.player.currentTeam.id} id="club-badge" title="" />
      <div className="playerCard__details">
        <h2 className="playerCard__name">
          {props.player.player.name.first} {props.player.player.name.last}
        </h2>
        <p className="playerCard__position">
          {getPosition(props.player.player.info.position)}
        </p>

        <div className="playerCard__stats">
          <span className="playerCard__statTitle">Appearances</span>
          <p className="playerCard__statValue" id="appearances">
            {getStat(props.player, 'appearances')}
          </p>
        </div>

        <div className="playerCard__stats">
          <span className="playerCard__statTitle">Goals</span>
          <p className="playerCard__statValue" id="goals">
            {getStat(props.player, 'goals')}
          </p>
        </div>

        <div className="playerCard__stats">
          <span className="playerCard__statTitle">Assists</span>
          <p className="playerCard__statValue" id="assists">
            {getStat(props.player, 'goal_assist')}
          </p>
        </div>

        <div className="playerCard__stats">
          <span className="playerCard__statTitle">Goals per match</span>
          <p className="playerCard__statValue" id="goals-per-match">
            {(getStat(props.player, 'goals') / getStat(props.player, 'appearances')).toFixed(2)}
          </p>
        </div>

        <div className="playerCard__stats">
          <span className="playerCard__statTitle">Passes per minute</span>
          <p className="playerCard__statValue" id="passes-per-min">
          {((getStat(props.player, 'fwd_pass') + getStat(props.player, 'backward_pass')) / getStat(props.player, 'mins_played')).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PlayerCard;
