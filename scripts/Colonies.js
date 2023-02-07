/*
GOAL:
    When a governor is selected from the dropdown list,
    his/her corresponding colony should be displayed as an <h2>,
    otherwise "Colony Minerals" should be displayed
*/

import { getColonies, getSpaceCart, getGovernors, getPurchasedMinerals, getMinerals } from "./database.js"

export const Colonies = () => {
    const colonies = getColonies()
    const spaceCart = getSpaceCart()
    const governors = getGovernors()
    const purchases = getPurchasedMinerals()
    const minerals = getMinerals()
    let html = `<h2>Colony Minerals</h2>`
    let inventoryHTML = ``
    for (const colony of colonies) {
        for (const governor of governors) {
            if (spaceCart.selectedGovernor === governor.id) {
                if (governor.colonyId === colony.id) {
                    html = `<h2>${colony.name} Minerals</h2>`
                }
                for (const purchase of purchases) {
                    if (purchase.selectedGovernor === governor.id) {
                        for (const mineral of minerals) {
                            let inventoryAmount = 0
                            if (purchase.selectedMineral === mineral.id) {
                                inventoryAmount += purchase.selectedPurchasedMineralAmount
                                if (inventoryAmount === 1) {
                                    inventoryHTML = `${inventoryAmount} ton of ${mineral.name}.`
                                } else {
                                    inventoryHTML = `${inventoryAmount} tons of ${mineral.name}.`
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    html += inventoryHTML
    return html
}