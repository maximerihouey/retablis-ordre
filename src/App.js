import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import GameWrapper from './components/GameWrapper';

function App() {
  return (
    <div className="container">
        <h1>Rétablis l'ordre</h1>
        <GameWrapper value="wesh" />
    </div>
  );
}

export default App;
