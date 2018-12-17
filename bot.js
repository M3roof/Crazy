const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","✵- Member"));
    });






client.on('message', message => {
    var prefix = ".";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**يرجأء كتابة الرسالة المراد ارسالها للجميع**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                .addField('${member}', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });










client.login(process.env.BOT_TOKEN);
