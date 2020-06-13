const Discord = require("discord.js");
exports.run = (client, message, args) => {
        message.delete();
    
        let role = message.mentions.roles.first();
        let msg = message.content;
        const adminPermissions = new Permissions('ADMINISTRATOR');

        let botusr = dmGuild.members.find(o => o.id == this.client.user.id)
        if (!botusr.hasPermission(adminPermissions)) {
            console.log(`AVISO: O BOT não está com o cargo de administrador setado.`);
        }

        if(!role) {
            message.author.send("Cargo mencionado inválido!");
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
                .addField(":x: Falha ao enviar", "Mensagem não específicada.")
                .addField(":eyes: Só vai!", "Todas letras que ficarão após a menção do cargo, será enviada.");
            message.channel.send({ embed: embed });
            return;
        }


        let memberarray = role.members.array();
        let membercount = memberarray.length;
        let botcount = 0;
        let successcount = 0;
        console.log(`Respondendo ${message.author.username} :  Mandando o anúncio para ${membercount} membros com o cargo ${role.name}.`)
        for (var i = 0; i < membercount; i++) {
            let member = memberarray[i];
            if (member.user.bot) {
                console.log(`Pulando bot com o nick de ${member.user.username}`)
                botcount++;
                continue
            }
            let timeout = Math.floor((Math.random() * (config.wait - 0.01)) * 1000) + 10;
            
            await sleep(timeout);
            if(i == (membercount-1)) {
                console.log(`Esperando ${timeout}ms.\t\\/\tAnunciando para ${member.user.username}`);
            } else {
                console.log(`Esperando ${timeout}ms.\t|${i + 1}|\tAnunciando para ${member.user.username}`);
            }
            try {
                member.send(`${msg} \n #${timeout}`);
                successcount++;
            } catch (error) {
                console.log(`--Falha ao enviar anúncio! ` + error)
            }
        }
        console.log(`Anunciei ${successcount} ${(successcount != 1 ? `messages` : `message`)} corretamente, ` + `${botcount} ${(botcount != 1 ? `bots são` : `bot com`)} foram pulados.`);    
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
