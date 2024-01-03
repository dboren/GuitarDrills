//Below are the notes of an E major pentatonic scale defined according to pitch class name and their string/fret positions on the fretboard. Can I program this so that it will render the tab in the correct positions?

const E2 = {
    "coords" : [[0, 0]]
}

const Fs2 = {
    "coords" : [[0, 2]]
}

const Gs2 = {
    "coords" : [[0, 4]]
}

const B2 = {
    "coords" : [[0, 7], [1, 2]]
}

const Cs3 = {
    "coords" : [[0, 9], [1, 4]]
}

const E3 = {
    "coords" : [[0, 12], [1, 7], [1, 19], [2, 2]]
}

const EmajPent = {

    "pitches" : [E2, Fs2, Gs2, B2, Cs3, E3]
}

//Do I want to hardcode each scale's pitch classes or use a lookup table of all pitch classes and program the steps and half steps to generate each scale's pitch class array as needed?

function renderDrill(drillSelections) {

    console.log("rendering drill")

}