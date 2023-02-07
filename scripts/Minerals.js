import { getMinerals, setMinerals } from "./database.js"

const minerals = getMinerals()

export const Minerals = () => {
    let html = `<ul>`

    // Use .map() for converting objects to <li> elements
    const listItems = minerals.map(resource => {
        return `<li id="${resource.id}">${resource.name}</li>`
    })

    html += listItems.join("")
    html += '</ul>'

    return html
}