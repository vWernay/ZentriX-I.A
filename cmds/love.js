const { RichEmbed } = require("discord.js");
const { getMember } = require("../functions.js");

module.exports = {
 //var util = require("../fivem");
    // Edit the message
    name: "love",
    aliases: ["affinity"],
    category: "fun",
    description: "Calcula a afinidade amorosa que você tem por outra pessoa.",
    usage: "[menção | id | username]",
    run: async (client, message, args) => {
        // Deleta o comando, pra não poluir o chat
        message.delete();
        // Get a member from mention, id, or username
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

        // love is the percentage
        // loveIndex is a number from 0 to 10, based on that love variable
        const love = Math.random() * 100;
        const loveIndex = Math.floor(love / 10);
        const loveLevel = "💖".repeat(loveIndex) + "💔".repeat(10 - loveIndex);

        const embed = new RichEmbed()
            .setColor("#ffb6c1")
            .addField(`☁ **${person.displayName}** gosta do(a) **${message.member.displayName}** tantos:`,
            `💟 ${Math.floor(love)}%\n\n${loveLevel}`);

        message.channel.send(embed);
    }
} 