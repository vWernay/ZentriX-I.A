exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    if (!message.member.hasPermission("ADMINISTRATOR")) return util.bad(`<@${message.author.id}>, You do not have permission to do this.`);
    if (args[0] == "set") {
        if (args[1] == null || args[1] == " " || !args[1]) { return util.embed(`Por favo insira o \`rcon_password\` ex: \`${config.prefix}rcon set password123\` ou tente \`${config.prefix}rcon help\``) }
        rcondb[message.guild.id] = {
            guild: message.guild.id,
            hash: crypto.AES.encrypt(args[1], config.token).toString() /* HASES WITH BOT TOKEN */
        }

        fs.writeFile("./auth/rcon.json", JSON.stringify(rcondb), (err) => {
            if (err) { return util.embed("An Error Occured...\n**Console:**\n```js\n" + err + "```") }
            log(`RCON [Set] | ${message.guild.name}`)
            util.good(`You successfully configured **${message.guild.name}**'s RCON server`)
            return;
        })
    } else if (args[0] == "help") {
        let embed = new Discord.RichEmbed()
        .setAuthor(state, icon)
        .setDescription("FiveM Bot RCON Help")
        .addField("RCON no FiveM ", " RCON é basicamente o posto mais alto de administração em um servidor. Após o login com o RCON enquanto estiver jogando em um servidor, você pode alterar basicamente qualquer configuração do servidor")
        .addField("Setting up RCON for FXServer", "Em seu `server.cfg`, un-comment/add `rcon_password your_password` alguma coisa nessa parte.")
        .addField("Lincando FXServer para o Bot", `Faça \`${config.prefix}rcon set your_rconpassword\` em um canal onde ninguém pode ver a mensagem`)
        .addField("Executando comandos RCON com o FiveM Bot", `Em qualquer canal, faça \`${config.prefix}rcon any_command\` (argumentos também)\nProcure alguns [RCON Commands](https://docs.fivem.net/server-manual/server-commands/) aqui.`)
        .addField("RCON Password Security", "**Todos** RCON passwords são encriptados em [AES Encryption](s) e são seguros.")
        .setColor(color)
        .setThumbnail(icon)
        message.channel.send({ embed: embed })
        return;
    } else {
        try {
            //  console.log(crypto.AES.decrypt(rcondb[message.guild.id].hash, config.token).toString(crypto.enc.Utf8))
            let temp = servers[message.guild.id].ip.split(":")
            var rcon = new Q3RCon({
                address: temp[0],
                port: temp[1],
                password: crypto.AES.decrypt(rcondb[message.guild.id].hash, config.token).toString(crypto.enc.Utf8),
            });
            rcon.send(args.join(" "), function (response) {
                let embed = new Discord.RichEmbed()
                    .setAuthor(state, icon)
                    .setTitle(`RCON Enviado em ${servers[message.guild.id].ip} - `)
                    .setDescription(`\`\`\`ENVIADO COM SUCESSO\n${response.slice(6)}\`\`\``)
                    .setFooter(`RCON Procura: ${args.join(" ")}`)
                    .setColor(color)
                    .setThumbnail(icon)
                message.channel.send({ embed: embed })
                return;
            });
        } catch (e) {
            return util.bad(`Certifique-se de definir sua senha rcon. ex: \`${config.prefix}rcon set password123\` or do \`${config.prefix}rcon help\``)
        }
    }

};