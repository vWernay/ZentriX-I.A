const​ ​Discord​ ​=​ ​require​(​"​discord.js​"​);

module.exports = {
 //var util = require("../fivem");
    // Edit the message
    name: "avatar",
    aliases: ["av"],
    category: "fun",
    description: "Pega o avatar da pessoa mencionada.",
    usage: "[menção]",
    run: async (client, message, args) => {

    ​let​ msg ​=​ ​await​ ​message​.​channel​.​send​(​"​Gerando avatar...​"​);

    ​let​ mentionedUser ​=​ ​message​.​mentions​.​users​.​first​() ​||​ ​message​.​author​;

        ​let​ embed ​=​ ​new​ ​Discord.RichEmbed​()

        .​setImage​(​mentionedUser​.​displayAvatarURL​)
        .​setColor​(​"​00ff00​"​)
        .​setTitle​(​"​Avatar​"​)
        .​setFooter​(​"​Requerido por ​"​ ​+​ ​message​.​author​.​tag​)
        .​setDescription​(​"​[Avatar URL link](​"​+​mentionedUser​.​displayAvatarURL​+​"​)​"​);

        ​message​.​channel​.​send​(embed)


    ​msg​.​delete​();
}
