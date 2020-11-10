console.log("Iniciando");

const Discord = require('discord.js');
const client = new Discord.Client();

var dotenv = require('dotenv');
dotenv.config();
const token = process.env.BOT_TOKEN;
client.login(token);

const rodarComandos = require('./comandos');

client.on('ready', () => {  // evento 'pronto'
    console.log("Pronto!");
});

client.on('message', rodarComandos.executar);
