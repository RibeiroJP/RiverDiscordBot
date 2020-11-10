module.exports = {
    nome: 'sorteio',
    descricao: 'Sorteia um número inteiro no intervalo especificado: \n(padrão 0-10), (0-intMax) ou (intMin-intMax)\nObs: (inclusive-exclusive)',
    args: '[intMin] [intMax]',
    executar(msg, args){
        if( args.length > 2 || args.find(x => !Number.isInteger(x)) !== undefined ){
            msg.channel.send('Parâmetros incorretos! Tente: ```=help sorteio```');
            console.log("Comando 'sorteio' usado incorretamente");
            return;
        }

        let intMin = 0;
        let intMax = 10;
        if(args.length == 1){
            intMax = args[0];
        }else if(args.length == 2){
            if(args[0] === args[1]){
                msg.channel.send('intMin e intMax devem ser diferentes!');
                console.log("Comando 'sorteio' usado incorretamente");
            }else if(args[0] < args[1]){
                intMin = args[0];
                intMax = args[1];
            }else{
                intMin = args[1];
                intMax = args[0];
            }
        }

        const m = Math;
        const num = m.floor(intMin+m.random()*(intMax-intMin));
        msg.channel.send(`🎲 ${num} (intervalo ${intMin}-${intMax})`);
        console.log(`Número ${num} sorteado (${intMin}-${intMax})`);
    }
};
