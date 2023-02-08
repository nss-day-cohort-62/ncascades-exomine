// ERD: https://dbdiagram.io/d/63e11f87296d97641d7ecbc8
// Wireframe: https://www.figma.com/file/90fmP5tW5hW0vLTHqFX2hY/Exomine?node-id=0%3A1&t=r1fdKp17ZD4z1lZv-1

/*
    1. Build database in accordance with ERD. DataAccess?
        a. Governors { "id", "name", "colonyId", "active" } DONE
        b. Colonies { "id". "name" } DONE
        c. Minerals { "id", "name" } DONE
        d. MiningFacilities { "id", "name", "active" } DONE
        e. FacilityMinerals { "id", "mineralId", "miningFacilityId", "amount" } DONE
        f. PurchasedResources { "id", "colonyId", "mineralId", "puchasedAmount" } DONE
    2. Export database. Create get/set functions.
        a. getFacilities DONE
        b. getGovernors DONE
        c. getMinerals DONE
        d. getColonies DONE
        e. getFacilityMinerals DONE
        f. getpurchasedMinerals DONE
        g. setFacility DONE
        h. setColony DONE
        i. setMineral DONE
        j. setPurchasedMineralAmount DONE
        l. Define CustomEvent called "stateChanged" to re-render the HTML. Will be triggered in the purchaseMineral 
        function. DONE
    3. Create modules for each database array.
        a. import getModule function for each module.
        b. itterate through database to create lists.
            - Governor module with dropdown
                With governor selected the related colony and its purchases appear to the right.
            - Facility module with dropdown
                With facility selected the related inventory appears below in a selectable list (radio).
            - Space Cart shows the active order
                When an item is selected from the facility's inventory via radio button, 1 ton of the related 
                    mineral/resource is added to the Space cart.
                When the Purchase Mineral button is clicked, the cart items are moved to the colony's inventory.
                Any existing colony inventory is updated (reflected in the Colony Name section of wireframe).
                The purchased mineral is removed from the facility inventory (reflected in the Facility Minerals 
                    section of the wireframe).
    4. Export processed lists from step 3 to Exomine.js to be processed as a string with HTML tags.
    5. Export Exomine.js from step 4 to main.js to be wrapped as to HTML container.
    6. Format HTML via CSS.

    Determine naming convention?
*/
import { Exomine } from "./Exomine.js"

const mainContainer = document.querySelector(".container")

const renderAllHTML = () => {
    //console.log(`Rendered!!!`)
    mainContainer.innerHTML = Exomine()
}

renderAllHTML()

document.addEventListener("stateChanged", CustomEvent => {renderAllHTML()})