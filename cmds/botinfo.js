/**
 * O Comando "botinfo"mostrará informações do bot
 */

const Discord = require('discord.js')
const moment = require('moment')
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

moment.locale('pt-br')

module.exports = {

  run: function (client, message, args) {
    const inline = true
    let botAvatar = client.user.displayAvatarURL
    let date = client.user.createdAt
    let userName = client.user.username
    let servsize = client.guilds.size
    let usersize = client.users.size
    let cpuLol;
    let status = {
      online: '`🟢` Online',
      offline: '`⚫` Offline'
    }
   cpuStat.usagePercent(function(err, percent, seconds) {
    if (err) {
      return console.log(err);
    }
    const duration = moment.duration(client.uptime).format(" D [dias], H [horas], m [minutos], s [segundos]");

    let embed = new Discord.RichEmbed()
      .setColor(client.displayHexColor === '#000000' ? '#ffffff' : client.displayHexColor)
      .setThumbnail(botAvatar)
      .setAuthor(`🤖 Minhas informações`)
      .addField('**Meu nick**', userName)
      .addField('**Meu ID**', client.user.id)
      .addField('**Servidores**', `🛡 ${servsize}`, true)
      .addField('**Usuários**', `${usersize}`, inline)
      .addField('**Estou online a**', moment().to(client.startTime, true))
      .addField("Uso de Memoria", `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB\``, true)           
      .addField("Uso da CPU", `\`${percent.toFixed(2)} %\``, true)
      .addField('**Criado em**', formatDate('DD/MM/YYYY, às HH:mm:ss', date))
      .setFooter(`2020 © ${client.user.username}.`)
      .setTimestamp()

    if (client.user.presence.status) {
      embed.addField(
        '**Status**',
        `${status[client.user.presence.status]}`,
        inline,
        true
      )
    }

    message.delete();

    message.channel.send(embed)
   });
  },
}
/**
 * Formata a data passada para o padrão do Brasil.
 * @param {string} template
 * @param {Date=} [date]
 * @return {string}
 */
function formatDate (template, date) {
  var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
  date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
  return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
    return template.split(specs[i]).join(item)
  }, template)
}
