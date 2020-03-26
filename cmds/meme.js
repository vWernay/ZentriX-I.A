const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    category: "fun",
    description: "Envia um meme épico",
    run: async (client, message, args) => {
        // Deleta o comando, pra não poluir o chat
        message.delete();
        // In this array, 
        // you can put the subreddits you want to grab memes from
        const subReddits = ["brasil", "brasilivre", "SouthAmericaMemes", "BrasilSimulator", "MEMEBRASIL"];
        // Grab a random property from the array
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        // Get a random image from the subreddit page
        const img = await randomPuppy(random);
        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`De: /r/${random}`)
            .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}
