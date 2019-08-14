import React from 'react';
import './App.css';
import {SpellsMap, weightedSample} from './data/spells'

function App() {

  let spells = weightedSample(SpellsMap)

  return (
    <div className="App">
      <pre>
        {JSON.stringify(SpellsMap)}
      </pre>
    </div>
  );
}

export default App;
