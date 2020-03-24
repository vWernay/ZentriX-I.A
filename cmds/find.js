exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    if (servers[message.guild.id].guild === message.guild.id) { 
    try {
    var arg = servers[message.guild.id].ip   
    let api = `http://${arg}/players.json`
    let api2 = `http://${arg}/info.json`
    req(api2, function (err, response, main) {
    req(api, function (err, response, body) {

      if (err) {
        util.zembed("Esse servidor está off... \n**Console:**\n```js\n"+err+"```")
      }
      else {
        try {
        var start = JSON.parse(body)
        var start2 = JSON.parse(main)
        } catch (err) {
          util.zembed("Esse servidor está off... \n**Console:**\n```js\n"+err+"```")
        }
             // deprecated due to instablility
       // try {
       // fs.writeFile(`cache/${num}.png`, new Buffer(start2.icon, "base64"), function(err) { if (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}});
       // } catch (err) {util.embed("An error occured... \n**Console:**\n```js\n"+err+"```")}
                      //
            
        try {
        var person = args.join(" ")
        if (!person) {return util.embed("Por favor especifique um nick correto ex: **"+config.prefix+"find __victorBOY__** (Com espaço)")}
        let result = start.find( found => found.name === `${person}`);
      //////////////////////////////
        var embed = new Discord.RichEmbed()
        .setColor(color)
        .setAuthor(state, icon)
        .setDescription(`Achar usuario`)
        .addField("Username:", result.name, true)
        .addField("Server ID:", result.id, true)
        .setThumbnail(icon)
        .addField("Ping:", result.ping, true)
        .addBlankField(true)
        .addField("Identificadores", "```json\n"+`${JSON.stringify(result.identifiers)}`+"```")
        .setFooter(`Server IP: ${servers[message.guild.id].ip}`, icon)
        //.attachFile(`cache/${num}.png`)
        message.channel.send({embed: embed})
        log(`Used Command [Find] in ${message.guild.name}`)

        } catch (error) {
            util.embed("Essa pessoas não foi encontrada.")
        }
    }
    })

})
} catch (err) {
    util.embed("Esse server não existe \n**Console:**\n```js\n"+err+"```");
}
} else {
    return util.embed("Por favor **set** um Endereço-Direto. ex: `"+config.prefix+"set 51.81.2.123:30120`\n***__Certifique-se de incluir o endereço na porta.__***")
  } 
    };