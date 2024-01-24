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

let drillSelections

//Test state variables defined below

let currModality = "none"
let currKey = "E"
let currDirection = "Ascending"
let currTimeSig = "3/4"
let scaleType = "pentatonic"
let position = 1

let startPitch = {}

function changeStringToVariable(variable, value) {

    console.log("converted pitch: " + variable)

    console.log(window[variable]);

    window[variable]=value

    console.log("input pointer: " + value)
    }

function renderDrill(drillSelections) {

    console.log("rendering drill")

    console.log("currKey: " + currKey);
    console.log("position: " + position);

    const startPointer = currKey + (position + 1);

    console.log("pointer: " + startPointer);

    //need to convert start pointer into its equivalent pitch class object instead of a string?
    //will this require a lookup table instead?

    // console.info(startPointer);

    // console.log(startPointer.coords);

    // changeStringToVariable(startPitch, startPointer)


    startPitch = eval(startPointer); //eval is a shortcut compared to making a lookup table but I need to look into whether it brings other risks/drawbacks

    console.log(startPitch);

    console.info(startPitch);

}

renderDrill();