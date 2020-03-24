exports.run = async (client, message, args) => {
 var util = require("../fivem");
    // Edit the message
    message.channel.send({embed: {
        color: 15158332,
        author: {
            name: message.author.tag,
            icon_url: message.author.avatarURL
        },
        description: `Pong: ${Math.round(client.ping)}ms`
    }});
};    