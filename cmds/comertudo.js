const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {

    try {

        message.channel.send('@everyone victorBOY É A POTENCIA!');
        message.delete(1000);

    } catch(e) {

        console.log(e.stack);

    }
}
