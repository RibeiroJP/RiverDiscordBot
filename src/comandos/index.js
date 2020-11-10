const help = require('./help');
const salve = require('./salve');
const sorteio = require('./sorteio');

const comandos = [
    help,
    salve,
    sorteio
]

module.exports = {
    comandos,
    executar(msg){
        // msg.channel.id !== "775388218441859072" || 
        if(msg.content[0] !== "=") return;
        const args = msg.content.split(' ');
        const comando = args.shift().substr(1);
        const cmd = comandos.find(c => c.nome === comando);
        if (cmd !== undefined) {
            cmd.executar(msg, args);
        }
    }
};
