import { getGovernors, setGovernor, getTransientState, setColony } from "./database.js"

const covertGovernorsToListElement = (governor) => {
    const transientState = getTransientState()
    let selected = ``
    if (governor.active === true) {
        if (transientState.selectedGovernor === governor.id) {
            selected = `selected="selected"`
        }
        return `<option value="${governor.id}" ${selected} >${governor.name}</option>`
    }
}

export const Governors = () => {
    const governors = getGovernors()
    return `<select id="select__governor" name="selectedGovernor">
    <option value="">Choose a governor...</option>${governors.map(covertGovernorsToListElement).join("")}
    </select>`
}

document.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "select__governor") {
        setGovernor(parseInt(changeEvent.target.value))
        setColony(parseInt(changeEvent.target.value))
    }
})