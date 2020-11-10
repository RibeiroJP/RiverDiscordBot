module.exports = {
    nome: 'salve',
    descricao: 'Pede um salve pro River-Bot',
    args: '',
    executar(msg){
        const salves = [
            { nome: 'Cade o neném', texto: 'Cade o neném? :baby: Cade o neném? :baby: Achou!'},
            { nome: 'Desmaio', texto: ':sleeping: zzzzzzZZZZZZZZzzzzzz :zzz:\n:sleeping: zzzzZZZZzzzzz :zzz:\n:sleeping: zzzzzzzzzzzzzZZZZZZZZZZZZZzzzzzzzzzzz :zzz:'},
            { nome: 'Cachorro', texto: ':dog: Au! Au! Au! Auuuuuuuhhhh! :dog:'},
            { nome: 'Gorila', texto: ':gorilla: Uh Uh UH UH UUH!!! :gorilla:'},
            { nome: 'Robô', texto: ':robot: Vamos :robot: Dominar :robot: **O MUNDO** :robot:'},
        ];
        const indice = Math.floor(Math.random() * salves.length);
        const s = salves[indice];
        msg.channel.send(`${s.texto}\nUm salve do '${s.nome}' ae, ${msg.author}`);
        console.log(`Salve do ${s.nome} mandado!`);
    }
};
