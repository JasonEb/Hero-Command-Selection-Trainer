 export const SpellsMap = {
    "Acceleratle": { weight: 4.00366, active: true },
    "Bang Family": { weight: 9.5348, active: true },
    "Bounce": { weight: 4.39927, active: true },
    "Flame Slash": { weight: 4.53114, active: true },
    "Hatchet Man": { weight: 4.58974, active: true },
    "Heal": { weight: 1.94505, active: true },
    "Hocus Pocus": { weight: 1, active: true },
    "Kaclang": { weight: 1.52747, active: true },
    "Kacrackle Slash": { weight: 4.85714, active: true },
    "Kamikazee": { weight: 1.55311, active: true },
    "Magic Burst": { weight: 1.53114, active: true },
    "Metal Slash": { weight: 2.07326, active: true },
    "Oomph": { weight: 4.27839, active: true },
    "Psyche Up": { weight: 4.22344, active: true },
    "Sizz Family": { weight: 9.52381, active: true },
    "Snooze": { weight: 4.24542, active: true },
    "Whack Family": { weight: 5.67399, active: true },
    "Zoom": { weight: 3.76923, active: true }
}

export const weightedSample = (spellsMap, prevSpells = []) => {
    let chosenSpells = []
    let totalWeight = 0
    let eligibleSpells = []
    // Pick a number at random between 1 and the sum of the weights
    // Iterate over the items and find rng less than current weight

    while( chosenSpells.length <= 3 ) {
        eligibleSpells = Object.entries(spellsMap).filter( (el) => el[1].active)
        totalWeight = eligibleSpells.reduce((prev, curr) => prev + curr[1].weight, 0)
        let rng = Math.floor(Math.random() * totalWeight) + 1 
        for (const spellName in spellsMap) {
            let spell = spellsMap[spellName]
            if (rng <= spell.weight && spell.active) {
                chosenSpells.push(spellName)
                spell.active = false;
                break;
            }
            rng -= spell.weight;
        }
    }
    console.log(spellsMap);
    
    //re-enable previous spells
    prevSpells.forEach( spellName => {
        spellsMap[spellName].active = true
    })
    return chosenSpells;
}

export default SpellsMap;