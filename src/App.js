import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import GameWrapper from './components/GameWrapper';

function App() {
  return (
    <div className="fullBody">
      <header>
        <h1>Rétablis l'ordre</h1>
      </header>
      <main>
        <GameWrapper value="wesh" />
      </main>
    </div>
  );
}

export default App;
