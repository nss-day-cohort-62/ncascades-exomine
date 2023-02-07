const database = {
governors: [
    { id: 1, name: "Ceres", colonyId: 1, active: true},
    { id: 2, name: "Pamona", colonyId: 2, active: true},
    { id: 3, name: "Minerva", colonyId: 3, active: true},
    { id: 4, name: "Sol", colonyId: 4, active: true},
    { id: 5, name: "Luna", colonyId: 5, active: true},
    { id: 6, name: "Vulcan", colonyId: 6, active: true},
    { id: 7, name: "Fortuna", colonyId: 7, active: true},
    { id: 8, name: "Apollo", colonyId: 8, active: true},
],
colonies: [
    { id: 1, name: "Jupiter" },
    { id: 2, name: "Mars"},
    { id: 3, name: "Saturn"},
    { id: 4, name: "Neptune"},
    { id: 5, name: "Venus" }
],
minerals: [
    { id: 1, name: "tridymite" },
    { id: 2, name: "promethium"},
    { id: 3, name: "neodymium"},
    { id: 4, name: "cerium"},
    { id: 5, name: "samarium" }
],
miningFacilities: [
    { id: 1, name: "Ena", active: true},
    { id: 2, name: "Dyo", active: true},
    { id: 3, name: "Triah", active: true},
    { id: 4, name: "Tesserah", active: true},
    { id: 5, name: "Pente", active: true }
],
facilityMinerals: [
    { id: 1, mineralId: 5, miningFacilityID: 1, amount: 30},
    { id: 2, mineralId: 4, miningFacilityID: 1, amount: 25},
    { id: 3, mineralId: 3, miningFacilityID: 1, amount: 15},
    { id: 4, mineralId: 2, miningFacilityID: 2, amount: 50},
    { id: 5, mineralId: 1, miningFacilityID: 2, amount: 75},
    { id: 6, mineralId: 5, miningFacilityID: 2, amount: 15},
    { id: 7, mineralId: 4, miningFacilityID: 2, amount: 50},
    { id: 8, mineralId: 3, miningFacilityID: 3, amount: 75},
    { id: 9, mineralId: 2, miningFacilityID: 3, amount: 15},
    { id: 10, mineralId: 1, miningFacilityID: 3, amount: 24},
    { id: 11, mineralId: 5, miningFacilityID: 4, amount: 20},
    { id: 12, mineralId: 4, miningFacilityID: 4, amount: 12},
    { id: 13, mineralId: 3, miningFacilityID: 4, amount: 35},
    { id: 14, mineralId: 2, miningFacilityID: 5, amount: 20},
    { id: 15, mineralId: 1, miningFacilityID: 5, amount: 12},
    { id: 16, mineralId: 5, miningFacilityID: 5, amount: 35},
],
purchasedMinerals: [
    { id: 1, colonyId: 5, mineralId: 5, purchasedAmount: 2},
],
    transientState: {}
}

export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent( new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setColony = (colonyId) => {
    database.transientState.selectedColony = colonyId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setPurchasedMineralAmount = (purchasedMineralAmountId) => {
    database.transientState.selectedPurchasedMineralAmount = purchasedMineralAmountId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}

export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}

export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}

export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const getpurchasedMinerals = () => {
    return database.purchasedMinerals.map(resource => ({...resource}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
