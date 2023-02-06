import { Governors } from "Governers.js"
import { Colonies } from "./Colonies.js"
import { MiningFacilities } from "./MiningFacilities.js"
import { Order } from "./Order.js"
import { FacilityMinerals } from "./FacilityMinerals.js"

export const Exomine = () => {
    return `
    <h1>Solar System Mining Marketplace</h1>
    <section class="colony__buyer">
    <article class="selections">
    <section class="choice__governor">
    <label>Choose a governor</label>
    ${Governors}
    </section>
    <section class="choice__facility">
    <label>Choose a facility</label>
    ${MiningFacilities}
    </section>
    </article>
    ${Colonies}
    </section>
    <section class="inventory__order">
    <article class="selected__facility">
    ${FacilityMinerals}
    </article>
    <article class="SpaceCart">
    <h3>Space Cart</h3>
    ${Order}
    <button class="button" id="orderButton">Purchase Mineral</button>
    </article>
    </section>
`
}