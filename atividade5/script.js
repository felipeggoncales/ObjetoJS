const pessoa = {
    nome: 'Pedro',
    idade: 34,
    email: 'pedrolindo@htomail.com',
};

pessoa.endereco = 'Rua das Flores, 123';

pessoa.cumprimentar = function cumprimentar() {
    console.log(`Olá, meu nome é ${pessoa.nome}`);
};

function imprimirValoresObjeto(objeto) {
    let mensagem = ``;
    for (let item in objeto) {
        mensagem += `${item}: ${objeto[item]}\n`;
    }
    console.log(mensagem)
}

imprimirValoresObjeto(pessoa);
