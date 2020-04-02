exports.run = async (client, message) => {
    randomNumber = Math.floor(Math.random() * (6 - 3) + 1);
    console.log(randomNumber);
    
    if(randomNumber == 2){
        message.reply("Morreu! 💀");
    } else {
        message.reply("Sobreviveu! 😃");
    }
}