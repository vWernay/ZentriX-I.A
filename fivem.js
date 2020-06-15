//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//            Complied and Created
//            By victorBOY (Victor)
//            Purpose: "FiveM Bot and I.A"
//            Version: 0.0.1
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Load up the discord.js library (node.js)
global.Discord = require("discord.js");

global.client = new Discord.Client();

global.config = require("./cmds/config/config.json");
global.package = require("./package.json");
global.servers = require('./auth/servers.json')
global.req = require('request');
//global.snek = require("snekfetch")
global.notes = require("./auth/notes.json")
global.news = require("./auth/news.json").body;
global.modules = require("./modules")
global.log = require("./modules/log") 
// RCON UPDATE
global.Q3RCon = require('quake3-rcon');
global.rcondb = require("./auth/rcon.json");
global.crypto = require("crypto-js");
// NATIVES
global.tempNatives = require("./auth/temp.json")
global.listNatives = require("./auth/names.json")

global.fs = require("fs");
global.dns = require('dns');
global.sleep = require("system-sleep");
global.createHash = require('hash-generator'); // horrible idea btw
global.Fuse = require("fuse.js")
global.colors = require("colors")
/* dumped from premium build */
global.state = config.title;
global.icon = `https://i.imgur.com/0xgjRjz.png`;

const got = require('got');
const ytdl = require('ytdl-core');
const express = require('express');
global.set = new Set();
// User Config
global.title = config.title;

global.prefix = config.prefix;

global.color = config.color;

global.premcolor = config.premcolor;

global.author = package.author;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Error thing
zembed("An Error Occured...\n**Console:**\n```js\n"+error+"```");
 */

client.on("message", message => {

  if (!message.content.startsWith(config.prefix)) return;
  if (set.has(message.author.id)) {
    message.delete();
    return zembed(`<@${message.author.id}>, Por favor espere 3 segundos para minha mente carregar.`)
  }
  set.add(message.author.id)

  module.exports.zembed = (args, colour) => {
       
    let embed = new Discord.RichEmbed()
    .setDescription(args)
    .setColor(colour)
    message.channel.send({ embed: embed })
    .then(msg => {
        msg.delete(5000)
    })
    return;

}

module.exports.good = (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .addField("Successful.", args)
    .setColor('#1daf4c')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.bad= (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .addField("Failed.", args)
    .setColor('#e22424')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.error = (args) => {

    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .setDescription(args)
    .setColor('#e22424')
    .setThumbnail(icon)
    message.channel.send({ embed: embed })
    return;

}
module.exports.embed = (args) => {

    let embed = new Discord.RichEmbed()
    .setDescription(args)
    .setColor(color)
    message.channel.send({ embed: embed })
    return;
    

}
module.exports.num = (min, max) => {
return Math.floor(Math.random() * (max - min)) + min;
}
  

  /////// LOG

  /* Deprecated
  function log(content) {
    fs.appendFile('log.txt', `[${today}] | ${content}\n`, (err) => {  
      if (err) throw err;
  });
  } */

 /*  module.exports.log = function (content) {
    fs.appendFile('index.html', `
  <tr>
      <th scope="row">${new Date()}</th>
          <td>${content}</td>
          <td>${message.guild}</td>
  </tr>`, (err) => {
        if (err) throw err;
      });
  } */
  //////


 
  // z-embed
  function zembed(args) {
    let embed = new Discord.RichEmbed()
      .setDescription(args)
      .setColor(color)
    message.channel.send({ embed: embed })
      .then(msg => {
        msg.delete(5000)
      })
    return;
  }
  setTimeout(() => {
    set.delete(message.author.id)
  }, 3000)

  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./cmds/${command}.js`);

    commandFile.run(client, message, args);
  } catch (err) {

    zembed("Desculpe, ainda não tenho esse comando\n\n**Console**: ```js\n" + err + "```")
  }
});

var time = new Date();
var timestamp = '[' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds() + ']';

//initial start funtion
client.on("ready", () => {
  console.log(`${timestamp} Logado como ${client.user.tag}!`);
  console.log(`--------------------------------------------`);
  console.log(`Bot foi iniciado com ${client.users.size} usuários, estou em ${client.channels.size} canais, e em ${client.guilds.size} servidores.`); 
  console.log(`O bot está em funcionamento`);
  console.log(`--------------------------------------------`);
  client.channels.get('689889114660667436').send('Olá, acordei irei ficar de olho em todas mensagens que mandarem!')
  client.user.setPresence({ game: { name: `no ZentriX RP`, type: 0, url: 'https://discord.gg/436xBCR'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});


client.on("guildCreate", guild => {
  log(`(${config.title}): Novo servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("guildDelete", guild => {
  log(`(${config.title}): Removido de: ${guild.name} (id: ${guild.id})`);
});

client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();


  // FiveM Bot API -> cdn:1234/api (HTTP)
  setInterval(function start() {
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    fs.writeFile('./modules/api.json', `
    {
    "ping": ${Math.round(client.ping)}, 
    "úsuarios": ${client.users.size}, 
    "servidores": ${client.guilds.size}, 
    "acordado": ["${hours} horas", 
    "${minutes} minutos", "${seconds} segundos"], 
    "nótcias_simples": "${news}", 
    "nóticias_html": "${news.html}"
    }`, 
    (err) => {
      if (err) { console.error(err) }
    });
    return start;
  }(), 600000);
});

//client.on('raw', async dados => {
  //if(dados.t == 'PRESENCE_UPDATE' && client.guilds.get("689889114656473090").members.get(dados.d.user.id)){
    //let membro = client.guilds.get("689889114656473090").members.get(dados.d.user.id)

    //if(dados.d.game == null) return client.users.get("626582629591810080").send("Não colocou um link no status!")
    //if(dados.d.game.state == undefined) client.users.get("626582629591810080").send("Não colocou um link no status!")

    //let valor = dados.d.game.state.toLowerCase()
    //let n = valor.search(/((?:discord\.gg|discordapp\.com|www\.|http|invite))/g)
    
    //if(n>=0) membro.sendMessage('Remova o link de seu status ou será punido!')

  //}
//});

// Respostas e anti-ping

client.on("message", msg => {
  
  if (msg.author.bot || msg.channel.id !== '612650778871595074') return;

  let wordArray = msg.content.split(" ");
  //console.log(wordArray);

  let filterWordsWipe = ["wipe?", "wipe"];
  let filterWordsRec = ["recrutamento?", "recrutamento"];
  let filterWordsTrabalho = ["trabalho dar?", "trabalho dar", "trabalho dar mais dinheiro?", "trabalho dar mais dinheiro"];
  let filterWordsLimite = ["limite?", "limite de membros?", "limite de membros por fac?", "limite", "limite de membros", "limite de membros por fac"];
  let filterWordsNamo = ["namorado", "namorada", "namorado?", "namorada?", "namorada(o)", "namorado(a)", "namorada(o)?", "namorado(a)?" ];
  let filterWordsGoogle = ["google", "siri", "google?", "siri?", "alexa", "alexa?" ];
  let filterWordsRecPm = ["recrutamento pm?", "recrutamento pm", "recrutamento polícia", "recrutamento policia", "edital", "edital pmzx", "edital pm", "edital policia", "edital polícia"]

  for(var i = 0; i < filterWordsWipe.length; i++) {
    if(wordArray.includes(filterWordsWipe[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, Geralmente o **wipe** é dado quando muitas pessoas pedem ou o servidor já está em fim de ecônomia.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsRec.length; i++) {
    if(wordArray.includes(filterWordsRec[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, Verifique com o Líder da empresa/facção em que você quer entrar.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsTrabalho.length; i++) {
    if(wordArray.includes(filterWordsTrabalho[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, Isso vai do seu gosto, eu mesmo curto um entregador hehe.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsLimite.length; i++) {
    if(wordArray.includes(filterWordsLimite[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, O limite de membros por facção atualmente é 8.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsNamo.length; i++) {
    if(wordArray.includes(filterWordsNamo[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, Não tenho, mais se você achar uma pra mim hehe, a Loritta não me quis **#BAD**.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsGoogle.length; i++) {
    if(wordArray.includes(filterWordsGoogle[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, Elas são bem mais espertas do que mim, sou apénas uma I.A em JS que ainda entende pouco ;( uso elas como minha inspiração.`);
      break;
    }
    
  }

  for(var i = 0; i < filterWordsRecPm.length; i++) {
    if(wordArray.includes(filterWordsGoogle[i])) {
      //msg.delete();
      msg.channel.send(`<@${msg.author.id}>, O recrutamento da PMZX é realizado pelo @🚓| Comandante PMZX , verifique as Informações com e ou verifique o canal <#611289342761107476> .`);
      break;
    }
    
  }

});

client.on('message', message=> {
  if((message.cleanContent.startsWith("@" + client.user.username) || message.channel.id == '667494569381986315') && client.user.id != message.author.id) {
    message.reply(`Olá <@${message.author.id}>, no momento o **victorBOY** não está, ou está configurando algo no servidor. se for algo relacionado ao Servidor ZentriX RP. Seja bug, denúncia, sugestão etc, peço por favor para que se direcione aos **canais adequados.**

    **Sugestões:** <#612650573325533200>
    **Dúvidas:** <#612650778871595074>
    **Denúncias:** <#666398791171047475>
    
    Se for algo onde não se encaixe nestes exemplos, peço que procure outro **Staff** ou espere até que ele volte.
    
    Realizou um **Donate** em nosso Servidor? as plataformas encontradas no site https://five-m.store/loja/zentrixrp são de ativação automática.
    Caso queira conhecer os benefícios **VIPS** vá no site e clique em **Ver Detalhes**, para uma pequena explicação acesse essa sala <#615963076847599636>.
    
    Caso seja algo **particular**, onde deve ser tratado diretamente com o **victorBOY**, peço que espere até ele ler está mensagem, já deixei anotado para ele.
    
    **Obrigado pela atenção e tenha um bom jogo!**
    
    ATT: **ZentriX** I.A`);
  }
});

client.on('message', msg => {
  if (msg.guild && msg.content.startsWith('$anunciogeral')) {
    let text = msg.content.slice('$anunciogeral'.length); // cuts off the /private part
    msg.guild.members.forEach(member => {
      if (member.id != client.user.id && member.id != "626582629591810080" && !member.user.bot) member.send(text);
    });
  }
});

client.on("messageDelete", async msg => {
  let logs = await msg.guild.fetchAuditLogs({type: 72});
  let entry = logs.entries.first();

  let embed = new Discord.RichEmbed()
    .setTitle("**MENSAGEM DELETADA**")
    .setColor("#fc3c3c")
    .setAuthor(msg.author.tag, msg.author.avatarURL)
    .setDescription(`**Autor:** ${msg.author.tag}\n**Canal:** ${msg.channel}\n**Mensagem:** ${msg.content}\n**Executor**: ${entry.executor}`)
    .setFooter(`ID da Mensagem: ${msg.id}\nID do Autor: ${msg.author.id}`)
    .setThumbnail(msg.author.avatarURL)
    .setTimestamp();
  let delchannel = msg.guild.channels.find(x => x.name === '📓log-discord');
  delchannel.send(embed);
});

client.on('messageUpdate', async (oldMessage, newMessage) => {
  if (oldMessage.content === newMessage.content){
    return;
  }
  
  
  let logEmbed = new Discord.RichEmbed()
  .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
  .setThumbnail(oldMessage.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("LOG de Mensagens Editadas")
  .addField("Antes", oldMessage.content, true)
  .addField("Depois", newMessage.content, true)
  .setTimestamp()
  .setFooter("Esse LOG foi feito por victorBOY#6632.")
  
  let logginChannel = newMessage.guild.channels.find(ch => ch.name === "📓log-discord")
  if(!logginChannel) return;
  
  logginChannel.send(logEmbed);
})

client.login(config.token);
