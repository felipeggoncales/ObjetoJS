const pessoa = {
    nome: 'Pedro',
    idade: 34,
    email: 'pedrolindo@htomail.com'
};

pessoa.cumprimentar = function cumprimentar() {
    console.log(`Olá, meu nome é ${pessoa.nome}`)
};