/*
GOAL:
    When a governor is selected from the dropdown list,
    his/her corresponding colony should be displayed as an <h2>,
    otherwise "Colony Minerals" should be displayed
*/

import { getColonies, getSpaceCart, getGovernors } from "./database.js"

const colonies = getColonies()
const spaceCart = getSpaceCart()
const governors = getGovernors()

export const Colonies = () => {
    let html = `<h3>Colony Minerals</h3>`
    for (const colony of colonies) {
        for (const governor of governors) {
            if (spaceCart.selectedGovernor === governor.id) {
                if (governor.colonyId === colony.id) {
                    html = `<h3>${colony.name} Minerals</h3>`
                } 
            }
        }
    }
    return html
}