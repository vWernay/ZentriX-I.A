const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
        let role = message.mentions.roles.first();
        let msg = message.content;
        const adminPermissions = new Permissions('ADMINISTRATOR');

        let botusr = dmGuild.members.find(o => o.id == this.client.user.id)
        if (!botusr.hasPermission(adminPermissions)) {
            console.log(`WARNING: Bot is not properly configured with administrative permissions.`);
        }

        if(!role) {
            message.author.send("No valid role mentioned!");
            return;
        }

        try {
            msg = msg.substring(msg.indexOf(">") + 1);
        } catch(error) {
            console.log(error);
            return;
        }

        if(!msg || msg.length <= 1) {
            const embed = new Discord.RichEmbed()
                .addField(":x: Failed to send", "Message not specified")
                .addField(":eyes: Listen up!", "Every character past the role mention will be sent,\nand apparently there was nothing to send.");
            message.channel.send({ embed: embed });
            return;
        }


        let memberarray = role.members.array();
        let membercount = memberarray.length;
        let botcount = 0;
        let successcount = 0;
        console.log(`Responding to ${message.author.username} :  Sending message to all ${membercount} members of role ${role.name}.`)
        for (var i = 0; i < membercount; i++) {
            let member = memberarray[i];
            if (member.user.bot) {
                console.log(`Skipping bot with name ${member.user.username}`)
                botcount++;
                continue
            }
            let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
            
            await sleep(timeout);
            if(i == (membercount-1)) {
                console.log(`Waited ${timeout}ms.\t\\/\tDMing ${member.user.username}`);
            } else {
                console.log(`Waited ${timeout}ms.\t|${i + 1}|\tDMing ${member.user.username}`);
            }
            try {
                member.send(`${msg} \n #${timeout}`);
                successcount++;
            } catch (error) {
                console.log(`--Failed to send DM! ` + error)
            }
        }
        console.log(`Sent ${successcount} ${(successcount != 1 ? `messages` : `message`)} successfully, ` +
            `${botcount} ${(botcount != 1 ? `bots were` : `bot was`)} skipped.`);
    }
module.exports.help = {
    name: "anunciocargo"
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
