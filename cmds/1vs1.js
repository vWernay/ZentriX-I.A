const Discord = require('discord.js');

exports.run = (client, message, args) => {
    if (!message.guild) {
      return message.channel.send(new Discord.RichEmbed().setColor('RED').setTitle('Não disponivel!').setDescription(message.author.username + ', Comando disponivel apenas em servidores!').setFooter('', client.user.avatarURL).setTimestamp());
    }
    
    if (message.mentions.users.size < 2) return message.channel.send(new Discord.RichEmbed().setColor('RED').setTitle('Batalha 1vs1').setDescription('Uso incorreto \nUso correto: 1v1 @nick1 @nick2').setFooter(message.author.username,message.author.avatarURL).setFooter("Batalha 1vs1").setTimestamp());


    message.channel.send(new Discord.RichEmbed().setColor("RANDOM").setTitle(":crossed_swords: Batalha 1vs1!! :crossed_swords:").setDescription(`Batalha 1vs1 entre ${args[0]} e ${args[1]} quem será que vai ganhar?`).setFooter('Batalha 1vs1', client.user.avatarURL).setThumbnail("http://www.xonotic.org/m/uploads/2011/11/duel.png").setTimestamp());


    setTimeout(() => {
      let winner = message.mentions.members.random();
      var sans = ["10'a","1'e","20'ye","30'a","2 ye"]
      var sonuc = sans[Math.floor((Math.random() * sans.length))];
        message.channel.send(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: Batalha 1vs1 :crossed_swords:').setDescription(':gun: A guerra começou!').setFooter('Guerra dos perturbados.', client.user.avatarURL).setTimestamp())
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':dagger: Facada').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':punch: Soco').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':athletic_shoe: Chute').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':punch: Soco na cara').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':syringe: Os dois estão morrendo').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':scream_cat: Voadora').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':grimacing: A guerra está chegando ao final.').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription(':muscle: Vejo que alguém está sangrando muito!').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':shield: 1vs1 :shield:').setDescription(':rage: Chute no peito').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: 1vs1 :crossed_swords:').setDescription('A guerra acabou!').setFooter('A Batalha está acontecendo', client.user.avatarURL).setTimestamp()))
        .then(nmsg => nmsg.edit(new Discord.RichEmbed().setColor('RANDOM').setTitle(':crossed_swords: Batalha 1vs1:crossed_swords:').setDescription(':tada: Vencedor da Batalha: **' + winner + '** Como diabos você conseguiu?').setImage("https://media.giphy.com/media/3oEhmVCSmpW56nR6rm/giphy.gif").setFooter('A Batalha de 1vs1 acabou.', client.user.avatarURL).setTimestamp()))
    }, 900)
};