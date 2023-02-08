import { getGovernors, setGovernor, getSpaceCart } from "./database.js"

const covertGovernorsToListElement = (governor) => {
    const spaceCart = getSpaceCart()
    let selected = ``
    if (governor.active === true) {
        if (spaceCart.selectedGovernor === governor.id) {
            selected = `selected="selected"`
        }
        return `<option value="${governor.id}" ${selected} >${governor.name}</option>`
    }
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