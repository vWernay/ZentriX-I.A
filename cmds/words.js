  
var Jimp = require("jimp")
const Discord = require("discord.js");


exports.run = (client, message, args) => {
	if(message.content.split(' ').slice(1).join(' ').length < 1) {
		message.channel.send('<:vpRedTick:695064695488643093> | Você não escreveu nada.')
	} else {
		if(message.content.split(' ').slice(1).join(' ').length > 50) {
			message.channel.send('<:vpRedTick:695064695488643093> | Você ultrapassou o limite de 50 caracteres.')
		} else {
			if(message.guild.member(client.user).hasPermission('ATTACH_FILES')) {
				var authorMessage = message
				message.channel.send(':clock12: | Aguarde...').then(message => {
			Jimp.read(`http://i.imgur.com/xXUtLqH.png`, function (err, image) {
			if (err) message.channel.send('<:vpRedTick:695064695488643093> | Ocorreu um erro ao criar a imagem.')
			Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then(function (font) {
			image.print(font, 11, 13, authorMessage.content.split(' ').slice(1).join(' ')[0] + '... ' + authorMessage.content.split(' ').slice(1).join(' ')[0] + '...', 400)
			image.print(font, 19, 290, authorMessage.content.split(' ').slice(1).join(' '), 320)
			var aguardeMessage = message
			image.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
			message.channel.sendFile(buffer, 'imagem.png', ':frame_photo: | <@' + authorMessage.author.id + '>').then(message => {
				aguardeMessage.delete()
			})
			})
			})
			})})
			} else {
				message.channel.send('<:vpRedTick:695064695488643093> | Eu não tenho a permissão necessária para fazer isso. `ATTACH_FILES`')
			}
		}

}
}