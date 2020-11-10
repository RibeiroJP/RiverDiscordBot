module.exports = {
    nome: 'help',
    descricao: 'Informa sobre os comandos disponíveis ou um comando específico',
    args: '[comando]',
    executar(msg, args){
        const comandos = require('./index').comandos;
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed()
        .setColor('#3cff14')
        if(args.length == 0){
            embed.setTitle('River')
            embed.setURL('https://github.com/RibeiroJP/RiverDiscordBot')
            embed.setAuthor('Ribe3iro', 'https://imgur.com/OkNXyck.png', 'https://twitter.com/ribe3iro')
            embed.setDescription('Um bot para Discord desenvolvido para estudos\n')
            embed.setThumbnail('https://imgur.com/7FkfGXT.png')
            embed.addFields( { name: 'Comandos', value: 'Breve descrição dos comandos' } )

            for(let cmd of comandos){
                embed.addField(`=${cmd.nome} ${cmd.args}`, cmd.descricao);
            }
            msg.channel.send(embed);
            console.log("'Help' geral enviado!");
        }else if(args.length == 1){
            const comando = args[0];
            const cmd = comandos.filter(c => c.nome === comando);
            if (cmd.length > 0) {
                const c = cmd[0];
                embed.addField(`=${c.nome} ${c.args}`, c.descricao);
                msg.channel.send(embed);
                console.log(`'Help' do '${c.nome}' enviado!`);
            }else{
                msg.channel.send(`Comando '${comando}' não existe`);
                console.log(`Tentativa de 'help' para o comando '${comando}' (inexistente)`);
            }
        }
    }
};
