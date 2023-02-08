/*
GOAL:
    When a governor is selected from the dropdown list,
    his/her corresponding colony should be displayed as an <h2>,
    otherwise "Colony Minerals" should be displayed
*/

import { getColonies, getTransientState, getGovernors, getPurchasedMinerals, getMinerals } from "./database.js"

export const Colonies = () => {
    const colonies = getColonies()
    const transientState = getTransientState()
    const governors = getGovernors()
    const purchases = getPurchasedMinerals()
    const minerals = getMinerals()
    let html = `<h2>Colony Minerals</h2>`
    let inventoryHTML = ``
    for (const governor of governors) {
        if (transientState.selectedGovernor === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    html = `<h2>${colony.name} Minerals</h2>`
                }
            }
            for (const purchase of purchases) {
                for (const mineral of minerals) {
                    if (purchase.selectedMineral === mineral.id && purchase.selectedColony === governor.colonyId) {
                        if (purchase.selectedPurchasedMineralAmount === 1) {
                            inventoryHTML += `<li>${purchase.selectedPurchasedMineralAmount} ton of ${mineral.name}.</li>`
                        } else {
                            inventoryHTML += `<li>${purchase.selectedPurchasedMineralAmount} tons of ${mineral.name}.</li>`
                        }
                    }
                }
            }
        }
    }
    html += `<ul>${inventoryHTML}</ul>`
    return html
}