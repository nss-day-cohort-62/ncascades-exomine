import { getFacilities, setFacility, getSpaceCart } from "./database.js"

const facilities = getFacilities()

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "facility_choice") {
            setFacility(parseInt(changeEvent.target.value))
        }
    }
)

export const MiningFacilities = () => {
    const spaceCart = getSpaceCart()
    let html = `<select id="facility_choice"><option value="0">Choose your Facility</option>`
    if (spaceCart.selectedGovernor) {
        // Use .map() for converting objects to <li> elements
        const listItems = facilities.map(location => {
            let selected = ``
            if (spaceCart.selectedFacility === location.id) {
                selected = `selected="selected"`
            }
            return `<option value="${location.id}" ${selected}>${location.name}</option>`
        })
        html += listItems.join("")
    }
    html += '</select>'
    return html
}