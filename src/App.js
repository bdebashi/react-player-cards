import React, { Component } from 'react';

import PlayerSelect from './components/player-select/index';

class App extends Component {
  render() {
    return (
      <div className="playerWidget">
        <PlayerSelect />
      </div>
    );
  }
}

export default App;
