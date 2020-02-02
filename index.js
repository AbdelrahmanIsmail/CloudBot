const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjczNDAzNzMxODE5MTAyMjI4.XjZjRw.Tfzp1JeCOiufdH3M08-9PKtRrYU';

bot.on('ready', () =>{
    console.log('This bot is online!')
})

bot.on('message', msg=>{
    if(msg.content ===  "!hello"){
        msg.reply('Hello there!')

    }
})

bot.login(token);