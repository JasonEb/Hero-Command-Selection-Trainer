 export const SpellsMap = {
    "Acceleratle": 4.00366,
    "Bang Family": 9.5348,
    "Bounce": 4.39927,
    "Flame Slash": 4.53114,
    "Hatchet Man": 4.58974,
    "Heal": 1.94505,
    "Hocus Pocus": 1,
    "Kaclang": 1.52747,
    "Kacrackle Slash": 4.85714,
    "Kamikazee": 1.55311,
    "Magic Burst": 1.53114,
    "Metal Slash": 2.07326,
    "Oomph": 4.27839,
    "Psyche Up": 4.22344,
    "Sizz Family": 9.52381,
    "Snooze": 4.24542,
    "Whack Family": 5.67399,
    "Zoom": 3.76923
}

export const weightedSample = (map) => {
    // Add up all the weights for all the items in the list
    let totalWeight = Object.values(map).reduce((prev, curr) => prev + curr)

    // Pick a number at random between 1 and the sum of the weights
    let rng = Math.floor(Math.random() * totalWeight) + 1 

    // Iterate over the items
    for (const spell in map) {
        // For the current item, subtract the item’s weight from the random number that was originally picked

        // Compare the result to zero. If less than or equal to zero then break otherwise keep iterating.
        if (rng <= map[spell]){
            return spell
        }
        rng -= map[spell];
    }

    debugger
    return "No spell how did this happen"
}

export default SpellsMap;