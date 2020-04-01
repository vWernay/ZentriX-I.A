  const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

exports.run = (client, message, args) => {
    if (args.length < 1) return message.channel.send("Forneça algum texto para aplaudir")
    
    message.channel.send(args.map(randomizeCase).join(':clap:'));

    message.delete();

}