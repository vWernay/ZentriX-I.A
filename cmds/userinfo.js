const { getMember } = require("../functions.js");

module.exports.run = async (client, message, args) => {
    message.delete();

    let person = getMember(message, args[0]);

    // If no person is found
    // It's going to default to the author
    // And we don't want to love ourself in this command
    // So we filter out our ID from the server members
    // And get a random person from that collection
    if (!person || message.author.id === person.id) {
        person = message.guild.members
            .filter(m => m.id !== message.author.id)
            .random();
    }

    let uEmbed = new Discord.RichEmbed()
    .setColor(color)
    .setTitle("Informações Úsuario")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
    .addField("**Username:**", `${person.displayName}`, true)
    .addField("**Tag:**", `${person.discriminator}`, true)
    .addField("**ID:**", `${person.id}`, true)
    .addField("**Status:**", `${person.presence.status}`, true)
    .addField("**Conta criada em:**", `${person.createdAt}`, true)
    .setFooter(`ZentriX | I.A`, client.user.displayAvatarURL);

    message.channel.send({embed: uEmbed});
}