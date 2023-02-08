import { getMinerals, getFacilityMinerals, getFacilities, getTransientState, setMineral, setPurchasedMineralAmount, getSpaceCart } from "./database.js"

export const Minerals = () => {
    /*
        Facility Minerals (of selected facility) DONE
        Show ${facilityMineral.amount} tons of ${mineral.name} 
            iterate through list of facilities to get facility.name by matching facility.id to spaceCart.selectedfacility
            iterate through list of mineralFacilities to get facilityMineral.amount by matching mineralFacility.miningFacilityId to spaceCart.selectedFacility
            iterate through list of minerals to get mineral.name by matching mineralFacility.mineralId to mineral.id.
            return results as HTML string with radio buttons.
    */
    const minerals = getMinerals()
    const transientState = getTransientState()
    const facilities = getFacilities()
    const facilityMinerals = getFacilityMinerals()
    const spaceCart = getSpaceCart()
    let selectedFacility = ``
    let mineralListHTML = ``
    for (const facility of facilities) {
        if (transientState.selectedFacility === facility.id) {
            selectedFacility = ` of ${facility.name}`
        }
    }
    mineralListHTML = `<h3>Facility Minerals${selectedFacility}</h3><ul>`
    for (const facilityMineral of facilityMinerals) {
        if (transientState.selectedFacility === facilityMineral.miningFacilityID) {
            for (const mineral of minerals) {
                let checked = ``
                if (mineral.id === facilityMineral.mineralId) {
                    if (spaceCart.selectedMineral === mineral.id) {
                        checked = `checked="checked"`
                    }
                    if (facilityMineral.amount > 0) {
                        mineralListHTML += `<li><input type="radio" name="selectedMineral" value="${mineral.id}" ${checked} >${facilityMineral.amount} tons of ${mineral.name}</li>`
                    }
                }
            }
        }
    }
    mineralListHTML += `</ul>`
    return mineralListHTML
}

document.addEventListener("click", event => {
    if (event.target.name === "selectedMineral") {
        setMineral(parseInt(event.target.value))
        setPurchasedMineralAmount(1)
    }
})