import { getTransientState, getMinerals, getFacilities, purchaseMineral, getSpaceCart } from "./database.js";

export const Order = () => {
    const spaceCart = getSpaceCart()
    const transientState = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()
    let allOrderHTML = ``
    for (const mineral of minerals) {
        if (spaceCart.selectedMineral === mineral.id) {
            for (const facility of facilities) {
                if (transientState.selectedFacility === facility.id)
                    allOrderHTML = `1 ton of ${mineral.name} from ${facility.name}`
            }
        }
    }
    return allOrderHTML
}

document.addEventListener("click", event => {
    if (event.target.id === "orderButton") {
        purchaseMineral(event.target)
    }
})