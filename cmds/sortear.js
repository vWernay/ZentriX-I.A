exports.run = async (client, message, args) => {
    if(args[0] == null || args[0] == " ") {
        message.channel.send("Por favor insira um numero maximo Ex. *sortear 10");
        return;
    }
    let numeroMaximo = args[0];  //Pega o numero que a pessoa passou
    let numeroSorteado = Math.floor(Math.random() * numeroMaximo + 1); //Sorteia
    message.reply(numeroSorteado);
}