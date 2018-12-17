const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","✵- Member"));
    });
















client.login(process.env.BOT_TOKEN);
