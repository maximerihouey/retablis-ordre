import React from 'react';

import GameData from './data.js';
import GameBoard from '../GameBoard';
import './index.css';

export default class GameWrapper extends React.Component {

  render() {
    var items = new GameData().someRandomEvents();
    return (
        <div className="gameboard">
            <GameBoard items={items} />
        </div>
    )
  }
}
