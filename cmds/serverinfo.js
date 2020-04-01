exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
 
        const m = await message.channel.send("Pegando informações...");
        var stats = new Discord.RichEmbed()
        .setColor(color)
        .setTitle("Informações do servidor")
        .setThumbnail(message.guild.inconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.inconURL)
        .addField("**Nome do Server:**", `${message.guild.name}`, true)
        .addField("**Dono do Server:**", `${message.guild.owner}`, true)
        .addField("**Quantidade de membros:**", `${message.guild.memberCount}`, true)
        .addField("**Quantidade de cargos:**", `${message.guild.roles.size}`, true)
        .setFooter(`ZentriX | I.A`, client.user.displayAvatarURL);
        message.channel.send({embed: stats});
        m.delete();
        log(`Usado o comando: [serverinfo] em ${message.guild.name}`)
};