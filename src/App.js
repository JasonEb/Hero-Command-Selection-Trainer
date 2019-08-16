import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import {SpellsMap, weightedSample} from './data/spells'

function App() {
  const [spells, setSpells] = useState([])

  useEffect(() => {
    let newSpells = weightedSample(SpellsMap, spells)
    setSpells(newSpells)
  }, [])

  const shuffleSpells = () => {
    let newSpells = weightedSample(SpellsMap, spells)
    setSpells(newSpells)
  }



  return (
    <div className="App">
      <pre>
        {JSON.stringify(spells)}
      </pre>
      <button onClick={shuffleSpells}>Shuffle</button>
    </div>
  );
}

export default App;
