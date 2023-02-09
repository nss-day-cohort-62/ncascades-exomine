const database = {
    governors: [
        { id: 1, name: "Ceres", colonyId: 1, active: true },
        { id: 2, name: "Pamona", colonyId: 2, active: false },
        { id: 3, name: "Minerva", colonyId: 3, active: true },
        { id: 4, name: "Sol", colonyId: 4, active: true },
        { id: 5, name: "Luna", colonyId: 5, active: true },
        { id: 6, name: "Vulcan", colonyId: 1, active: true },
        { id: 7, name: "Fortuna", colonyId: 2, active: true },
        { id: 8, name: "Apollo", colonyId: 3, active: true },
    ],
    colonies: [
        { id: 1, name: "Jupiter" },
        { id: 2, name: "Mars" },
        { id: 3, name: "Saturn" },
        { id: 4, name: "Neptune" },
        { id: 5, name: "Venus" }
    ],
    minerals: [
        { id: 1, name: "tridymite" },
        { id: 2, name: "promethium" },
        { id: 3, name: "neodymium" },
        { id: 4, name: "cerium" },
        { id: 5, name: "samarium" }
    ],
    miningFacilities: [
        { id: 1, name: "Ena", active: true },
        { id: 2, name: "Dyo", active: false },
        { id: 3, name: "Triah", active: true },
        { id: 4, name: "Tesserah", active: true },
        { id: 5, name: "Pente", active: true }
    ],
    facilityMinerals: [
        { id: 1, mineralId: 5, miningFacilityID: 1, amount: 3 },
        { id: 2, mineralId: 4, miningFacilityID: 1, amount: 5 },
        { id: 3, mineralId: 3, miningFacilityID: 1, amount: 1 },
        { id: 4, mineralId: 2, miningFacilityID: 2, amount: 5 },
        { id: 5, mineralId: 1, miningFacilityID: 2, amount: 7 },
        { id: 6, mineralId: 5, miningFacilityID: 2, amount: 1 },
        { id: 7, mineralId: 4, miningFacilityID: 2, amount: 5 },
        { id: 8, mineralId: 3, miningFacilityID: 3, amount: 7 },
        { id: 9, mineralId: 2, miningFacilityID: 3, amount: 5 },
        { id: 10, mineralId: 1, miningFacilityID: 3, amount: 4 },
        { id: 11, mineralId: 5, miningFacilityID: 4, amount: 2 },
        { id: 12, mineralId: 4, miningFacilityID: 4, amount: 2 },
        { id: 13, mineralId: 3, miningFacilityID: 4, amount: 0 },
        { id: 14, mineralId: 2, miningFacilityID: 5, amount: 8 },
        { id: 15, mineralId: 1, miningFacilityID: 5, amount: 6 },
        { id: 16, mineralId: 5, miningFacilityID: 5, amount: 4 },
    ],
    purchasedMinerals: [],
    transientState: {},
    spaceCart: {}
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setColony = (governorId) => {
    const governors = getGovernors()
    const colonies = getColonies()
    let colonyIdByGovernor = 0
    governors.map(governor => {
        if (governorId === governor.id) {
            for (const colony of colonies) {
                if (governor.colonyId === colony.id) {
                    colonyIdByGovernor = colony.id
                }
            }
        }
    })
    database.transientState.selectedColony = colonyIdByGovernor
    database.spaceCart.selectedColony = colonyIdByGovernor
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setMineral = (mineralId) => {

    database.spaceCart.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setPurchasedMineralAmount = (purchasedMineralAmountId) => {

    database.spaceCart.selectedPurchasedMineralAmount = purchasedMineralAmountId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.miningFacilities.map(facility => ({ ...facility }))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({ ...facilityMineral }))
}

export const getPurchasedMinerals = () => {
    return database.purchasedMinerals.map(resource => ({ ...resource }))
}

export const getTransientState = () => {
    return database.transientState
}

export const getSpaceCart = () => {
    return database.spaceCart
}

export const purchaseMineral = () => {
    const newOrder = { ...database.spaceCart }
    const lastIndex = database.purchasedMinerals.length - 1
    if (database.purchasedMinerals.length === 0) {
        newOrder.id = 1
    } else {
        newOrder.id = database.purchasedMinerals[lastIndex].id + 1
    }
    for (const facilityMineral of database.facilityMinerals) {
        if (database.transientState.selectedFacility === facilityMineral.miningFacilityID) {
            if (database.spaceCart.selectedMineral === facilityMineral.mineralId) {
                facilityMineral.amount--
            }
        }
    }
    let existingMineral = false
    for (const purchase of database.purchasedMinerals) {
        if (purchase.selectedColony === database.spaceCart.selectedColony && purchase.selectedMineral === database.spaceCart.selectedMineral) {
            existingMineral = true
            purchase.selectedPurchasedMineralAmount++
        }
    }
    if (existingMineral === false) {
        database.purchasedMinerals.push(newOrder)
    }
    database.spaceCart = {}
    database.spaceCart.selectedColony = database.transientState.selectedColony
    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
