import React from 'react'
import {useState, useEffect} from 'react'
import './App.css'
import {SpellsMap, weightedSample} from './data/spells'

import Menu from './components/menu'

function App() {
  const [spells, setSpells] = useState([])
  const [currentIdx, setIdx] = useState(0)

  const shuffleSpells = () => {
    let newSpells = weightedSample(SpellsMap, spells)
    setIdx(0)
    setSpells(newSpells)
  }

  useEffect(() => {
    shuffleSpells()
  }, [])

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
        setIdx( (currentIdx + 1) % 4)
    } else if (event.key === "ArrowUp") {
        let newIdx = (currentIdx - 1) % 4
        newIdx = newIdx < 0 ? newIdx + 4 : newIdx
        setIdx(newIdx)
    }
}

  return (
    <div className="App" onKeyDown={handleKeyDown} tabIndex="0">
      <Menu spells={spells} currentIdx={currentIdx} />
      <button onClick={shuffleSpells}>Shuffle</button>
    </div>
  );
}

export default App;
