const DataPacket = require('./packet');
const Identifiers = require('../identifiers');
const Item = require('../../inventory/item/item');


class InventoryContentPacket extends DataPacket {
    static NetID = Identifiers.InventoryContentPacket

    /** @type {number} */
    windowId
    /** @type {Item[]} */
    items

    encodePayload() {
        this.writeUnsignedVarInt(this.windowId);

        // Write item stacks
        this.writeUnsignedVarInt(this.items.length);
        for (let i = 0; i < this.items.length; i++) {
            this.writeItemStack(this.items[i]);
        }
    }
}
module.exports = InventoryContentPacket;
