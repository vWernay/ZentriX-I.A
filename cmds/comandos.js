exports.run = async (client, message, args) => {
    var util = require("../fivem");
    message.delete();
    let embed = new Discord.RichEmbed()
    .setAuthor(state, icon)
    .setColor(color)
    .setDescription(`**ZentriX Bot - Comandos:**`)
    //.addField(`Melhor servidor`, "ZentriX RP - discord.gg/436xBCR")
    .addBlankField(true)
    //.addField(`${config.prefix}set <serverIP:port>`, "Define o servidor FiveM da discord atual")
    //.addField(`${config.prefix}players`, "Obtém a lista de jogadores atual de um servidor")
    //.addField(`${config.prefix}server`, "Obtém a lista de jogadores atual de um servidor")
    //.addField(`${config.prefix}find <username>`, "Localiza um usuário que está no servidor via Nome de usuário")
    //.addField(`${config.prefix}id <id>`, "Localiza um usuário que está no servidor via Server ID")
    //.addField(`${config.prefix}status`, "Checks if the server is online")
    //.addField(`${config.prefix}stats`, "Checa as est do bot")
    //.addField(`${config.prefix}save-log <person's server id>`, "Salva as informações de um jogador")
    //.addField(`${config.prefix}get-log`, "Obtém as informações de um jogador (por discord)")
    //.addField(`${config.prefix}forum <topic>`, "Searches the latest topics in the categories on https://forum.fivem.net")
    //.addField(`${config.prefix}forum `, "Checks the current categories on https://forum.fivem.net")
    //.addField(`${config.prefix}forum search <search terms>`, "Searches terms on https://forum.fivem.net")
    //.addField(`${config.prefix}forum user <username>`, "Searches user's info on https://forum.fivem.net")
    //.addField(`${config.prefix}native <search terms>`, "returns a specific GTAV native that you searched for")
    //.addField(`${config.prefix}rcon help`, "Comandos da VPS/RCON")
    //.addField(`${config.prefix}rcon set <rcon_password>`, "Define o servidor rcon da guilda ")
    //.addField(`${config.prefix}rcon <rcon_command>`, "Executa um [comando RCON](https://docs.fivem.net/server-manual/server-commands/)")
    .addField(`${config.prefix}ping`, "Pong?")
    .addField(`${config.prefix}love`, "Calcula seu amor seu com outra pessoa. Exemplo: $love @Abraão")
    .addField(`${config.prefix}meme`, "Procuro um meme bem daora e mando aqui")
    .addField(`${config.prefix}insta`, "Pego informações do instagram desejado. Exemplo: $insta nome-da-conta")
    .addField(`${config.prefix}clima`, "Pego informações do clima da cidade desejada. Exemplo: $clima brasilia")
    .addField(`${config.prefix}flip`, "Pego o texto desejado e dou flip nele. Exemplo: $flip ZentriX O Melhor")
    .addField(`${config.prefix}aplaudir`, "Pego o texto desejado e coloco palmas nele. Exemplo: $aplaudir Mensagem-Desejada")
    .addField(`${config.prefix}morse`, "Pego o texto desejado e transformo em código morse. Exemplo: $morse Mensagem-Desejada")
    .addField(`${config.prefix}unicode`, "Pego o caractere desajado e transformo em unicode. Exemplo: $unicode K")
    .addField(`${config.prefix}userinfo`, "Pego as informações da conta do user desajado. Exemplo: $userinfo @victorBOY")
    .addField(`${config.prefix}words`, "Faço um meme com as palavras desejadas. Exemplo: $words Gosto de Marea")
    .addField(`${config.prefix}laranjo`, "Faço um meme com a foto do laramjo c/ as palavras desejadas. Exemplo: $laranjo Ovo chorar")
    .addField(`${config.prefix}1vs1`, "Faço uma batalha com a pessoas menconadas. Exemplo: $1vs1 @victorBOY @Aprendiz")
    .addField(`${config.prefix}contar`, "Conto até 3. Exemplo: $contar")
    .addField(`${config.prefix}cachorro`, "Pego a foto de um cachorro bem fofo e mando aqui. Exemplo: $cachorro")
    .addField(`${config.prefix}dolar`, "Pego o valor do dolar. Exemplo: $dolar")
    .addField(`${config.prefix}roleta`, "Vamos de roleta russa? Exemplo: $roleta")
    .addField(`${config.prefix}fumar`, "Bah! Já estou estressado me de um cigarro. Exemplo: $fumar")
    .addField(`${config.prefix}sortear`, "Sorteio um número. Exemplo: $sortear 20")
    .addField(`${config.prefix}casal`, "Junta ordenadamente a imagem de dois usuários. Exemplo: $casal @membro1 @membro2")
    .addField(`${config.prefix}ascii`, "Você informa um texto para converter para ASCII. Exemplo: $ascii Exemplo")
    .addField(`${config.prefix}bigtext`, "Escreve em texto de emojis o que foi enviado pelo usuário. Exemplo: $bigtext Exemplo")
    .addField(`${config.prefix}biscoito`, "Dar um biscoito para o user mencionado. Exemplo: $biscoito @membro")
    .addField(`${config.prefix}emoji`, "Cria um emoji em tamanho maior. Exemplo: $emoji :emoji:")
    .addField(`${config.prefix}faketweet`, "Cria um tweet fake com a conta mencionada.")
    .addField(`${config.prefix}invites`, "Mostrar o Rank de Convites.")
    .addField(`${config.prefix}lenny`, "Lenny face.")
    //.addBlankField(true)
    .setThumbnail(icon)
    //.setTitle("Support Discord")
    //.setURL("https://discord.gg/436xBCR")
    //.addBlankField(true)
    //.addField("No", news)
    //.setFooter("Copyright © Zua - https://github.com/thatziv/", icon)
    log(`Comando de ajuda solicitado.. em: ${message.guild.name}`)
  
    message.channel.send({embed: embed})
};
