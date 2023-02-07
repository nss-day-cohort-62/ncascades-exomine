import { getMinerals, getFacilityMinerals, getFacilities, getSpaceCart, setMineral } from "./database.js"

/*
    Facility Minerals (of selected facility)
    Show ${facilityMineral.amount} tons of ${mineral.name}

*/

const minerals = getMinerals()

export const Minerals = () => {
    const spaceCart = getSpaceCart()
    const facilities = getFacilities()
    let selectedFacility = ``
    for (const facility of facilities) {
        if (spaceCart.selectedFacility === facility.id) {
            selectedFacility = ` of ${facility.name}`
        }
    }
    let html = `<h3>Facility Minerals${selectedFacility}</h3><ul>`
    
    const listItems = minerals.map(resource => {
        return `<li id="${resource.id}">${resource.name}</li>`
    })

    html += listItems.join("")
    html += '</ul>'

    return html
}