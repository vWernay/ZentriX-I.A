const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    message.delete();  
  
  if (args[0] === undefined) {
      
    return message.channel.send('Eu preciso de um caracter para obter seu unicode!');

  } else {

    let transArg = args[0].toLowerCase();

    if (transArg === undefined) {

      return message.channel.send('Digite  **1** caractere para obter o unicode!!');

    } else {

      if (transArg.length >= 2) {

        return message.channel.send(`Muito longo ${message.author}; você só pode enviar **1** caractere.`);

      }

      const embed = new Discord.RichEmbed()
      .setDescription(transArg.charCodeAt(0));

      return message.channel.send(embed);

    }

  }
  
}