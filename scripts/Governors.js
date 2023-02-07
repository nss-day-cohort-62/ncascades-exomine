import { getGovernors, setGovernor } from "./database.js"

const covertGovernorsToListElement = (governor) => {
    return `<option value="${governor.id}">${governor.name}</option>`
}

export const Governors = () => {
    const governors = getGovernors()
    return `<select id="select__governor" name="selectedGovernor">
    <option value="">Chose a governor...</option>${governors.map(covertGovernorsToListElement).join("")}
    </select>`
}

document.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "select__governor") {
        setGovernor(parseInt(changeEvent.target.value))
    }
})