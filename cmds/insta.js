const { RichEmbed } = require("discord.js");
const { stripIndents } = require("common-tags");

const fetch = require("node-fetch");

module.exports = {
    name: "instagram",
    aliases: ["insta"],
    category: "info",
    description: "Descubra algumas estatísticas legais do instagram",
    usage: "<name>",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) {
            return message.reply("Talvez seja útil realmente procurar alguém...!")
                .then(m => m.delete(5000));
        }

        const url = `https://instagram.com/${name}/?__a=1`;
        
        let res; 

        try {
            res = await fetch(url).then(url => url.json());
        } catch (e) {
            return message.reply("Não consegui encontrar essa conta... :(")
                .then(m => m.delete(5000));
        }

        const account = res.graphql.user;

        const embed = new RichEmbed()
            .setColor("RANDOM")
            .setTitle(account.full_name)
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Informações do Perfil", stripIndents`**- Perfil:** ${account.username}
            **- Nome completo:** ${account.full_name}
            **- Biografia:** ${account.biography.length == 0 ? "nenhuma" : account.biography}
            **- Posts:** ${account.edge_owner_to_timeline_media.count}
            **- Seguidores:** ${account.edge_followed_by.count}
            **- Seguindo:** ${account.edge_follow.count}
            **- Conta privada:** ${account.is_private ? "Sim 🔐" : "Não 🔓"}`);

        message.channel.send(embed);
    }
}