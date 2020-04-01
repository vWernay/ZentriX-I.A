const cheerio = require('cheerio');
const got = require('got');
const { stringify } = require('querystring');
const Discord = require("discord.js");

exports.run = async (client, msg, args) => {
    if(args.length < 1) msg.channel.send('I need to know what to search...');
    msg.delete();

    await msg.channel.send('<a:googling:694561915778629712> Googling....').then(msg => {msg.delete(1000)});

    const params = {
        q: args.join(' '),
        safe: 'on',
        lr: 'lang_en',
        hl: 'en'
    };

    let resp = await got('https://google.com/search?' + stringify(params), { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) Gecko/20100101 Firefox/53.0' }});

    if(resp.statusCode !== 200) throw 'O Google não queria responder de alguma forma';

    const $ = cheerio.load(resp.body);

    const results = [];

    let card = null;

    const cardNode = $('div#rso > div._NId').find('div.vk_c, div.g.mnr-c.g-blk, div.kp-blk');

    if(cardNode && cardNode.length !== 0) {
        card = this.parseCards($, cardNode);
    }

    $('.rc > h3 > a').each((i, e) => {
        const link = $(e).attr('href');
        const text = $(e).text();
        if(link) {
            results.push({ text, link });
        }
    });

    if(card) {
        const value = results.slice(0, 3).map(r => `[${r.text}](${r.link})`).join('\n');
        if(value) {
            card.addField(`Isto é o que eu encontrei para: "${params.q}" `, value)
                .setColor(client.utils.randomColor())
                .setURL(`https://google.com/search?q=${encodeURIComponent(params.q)}`);
        }
        return await msg.channel.send(card);
    }

    if(results.length === 0) {
        return await msg.channel.send("Desculpe, não encontrei nenhum resultado");
    }
    
    const firstentry = `${results[0].link}`;
    const resultxD = results.slice(0, 1).map(r => `${r.link}`).join('\n');

    await msg.channel.send(resultxD);

};

module.exports.help = {
    name: 'google'
};