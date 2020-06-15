const Discord = require("discord.js");
exports.run = (client, message, args) => {
        message.delete();
    
        const args = message.content.split(" ");
        const roleArgs = args.slice(0, 1);
        const messageArgs = args.slice(1)

        const role = message.guild.roles.find(role => role.name.toLowerCase() === roleArgs.join(" ").toLowerCase())
        if (!role) return message.reply('Voce não mencionou um cargo!');

          for (let i = 0; i < message.guild.members.size; i++) {
            if (message.guild.members[i].roles.has(role.id)) 
              {message.guild.members[i].user.send(messageArgs.join(" "))
            }
        }
   
}
