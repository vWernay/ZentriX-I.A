const Discord = require("discord.js");
var moment = require('moment');
moment.locale('pt-BR');
const fs = require("fs")
exports.run = (client, message, args) => {
    message.delete();
	let argsJunto = message.content.split(" ").slice(1).join(' ')
	if(message.author.id === '626582629591810080') {
    if(argsJunto.length < 1) {
    	message.channel.send(`<:vpRedTick:695064695488643093> | Diga um comando para ser resetado.`); 
    } else {
    	delete require.cache[require.resolve(`./${args[0]}.js`)];
    	message.channel.send('<:vpGreenTick:695064695500963910> | O comando `' + argsJunto + '` foi resetado.'); 
    }
  // the path is relative to the *current folder*, so just ./filename.js
} else {
  	message.channel.send('<:vpRedTick:695064695488643093> | Você não tem permissão para executar este comando.')
  }
}