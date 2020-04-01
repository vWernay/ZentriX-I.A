const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if(args[0] == "helplimpar"){
    let helpembxd = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("Limpar", "Uso: $limpar <quantidade>")

    message.channel.send(helpembxd);
    return;
  } 

  message.delete()

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem permissão para fazer isso!");
  if(!args[0]) return message.channel.send("Digite um número de mensagens para limpar! `Uso: $limpar <quantidade>`");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Limpado ${args[0]} messagens.__**`).then(msg => msg.delete(2000));
  message.delete();
});


}

module.exports.help = {
  name: "limpar"
}