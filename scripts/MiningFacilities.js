import { getFacilities, setFacility } from "./database.js"

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
    let html = `<select id="facility_choice"><option value="0">Choose your Facility</option>`

    // Use .map() for converting objects to <li> elements
    const listItems = facilities.map(location => {
        return `<option value="${location.id}">${location.name}</option>`
    })

    html += listItems.join("")
    html += '</select>'

    return html
}