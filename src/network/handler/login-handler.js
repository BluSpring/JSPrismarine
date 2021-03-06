const Identifiers = require('../identifiers');
const ResourcePacksInfoPacket = require('../packet/resource-packs-info');
const PlayStatus = require('../type/play-status');
const LoginPacket = require('../packet/login');
const Player = require('../../player');
const Prismarine = require('../../prismarine');


class LoginHandler {
    static NetID = Identifiers.LoginPacket

    /**
     * @param {LoginPacket} packet 
     * @param {Prismarine} _server
     * @param {Player} player 
     */
    static handle(packet, _server, player) {
        player.name = packet.displayName;
        player.locale = packet.languageCode;
        player.randomId = packet.clientRandomId;
        player.uuid = packet.identity;
        player.xuid = packet.XUID;

        player.skin = packet.skin;
        player.device = packet.device;

        player.sendPlayStatus(PlayStatus.LoginSuccess);

        let pk = new ResourcePacksInfoPacket();
        player.sendDataPacket(pk);
    }
}
module.exports = LoginHandler;
