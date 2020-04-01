 const Discord = require("discord.js")
 
 module.exports.run = async (client, message, args) => {

    //!8ball question
    if(!args[1]) return message.reply("Digite uma pergunta completa com 2 ou mais palavras!");
    let replies = ["Sim", "Não", "Não sei", "Pergunte novamente mais tarde!", "Carrapatos", "Não tenho certeza!", "Pfv Não", "Diz-me", "Sem dúvida", "Não é possível prever agora", "Sem dúvida", ];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    let ballembed = new Discord.RichEmbed()

    .setAuthor(message.author.username)
    .setColor("#00ff00")
    .addField("Questão", question)
    .addField("Resposta", replies[result]);

    message.channel.send(ballembed)

    message.delete();


 }