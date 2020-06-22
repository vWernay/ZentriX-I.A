const Discord = require("discord.js");
exports.run = (client, message, args) => {
        message.delete();
    
        if (msg.content.startsWith(prefix + "pmspam")) {
        try {
        var usertospam = msg.mentions.users.first();
        var timesRun = 0;
        var numberspam = suffix[1];
        console.log(numberspam)
        var tospam = msg.content.split(' ').slice(3).join(' ');
        console.log(tospam)
        let messagecount = parseInt(numberspam) ? parseInt(numberspam) : 1;
       var interval = setInterval(function() {
           usertospam.send(tospam)
           timesRun += 1
           if (timesRun === messagecount) {
               clearInterval(interval)
           }
       }, 1)
       usertospam.send(interval.length);
        } catch (err) {
msg.channel.send("Error, usuário não encontrado.")
        }
    } 
   
}
