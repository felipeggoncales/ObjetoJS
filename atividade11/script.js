const caneta = {
    marca: 'bic',
    cor: 'azul',
    proprietario: {
        nome: 'Manoel Gomes',
        idade: 54
    },
    valor: 1,
    anoFabricacao: 2022,
    kills: 0,
    refil: 100,
    escrever(texto) {
        if (this.refil > 0) {
            console.log(texto);
            this.refil -= 10;
            if (this.refil <= 20) {
                console.log('A caneta está começando a falhar...');
            }
        } else {
            console.log('Acabou a tinta da caneta!');
        }
    },
    assinar() {
        if (this.refil > 0) {
            console.log(this.proprietario.nome);
            this.refil -= 10;
            if (this.refil <= 20) {
                console.log('A caneta está começando a falhar...');
            }
        } else {
            console.log('Acabou a tinta da caneta!');
        }
    },
    emprestarCaneta(novoProprietario) {
        caneta.proprietario.nome = novoProprietario;
    },
    devolverCaneta() {
        this.proprietario.nome = 'Manoel Gomes';
    },
    matar() {
        this.kills++;
    },
    cantarMusica() {
        console.log(`
♫ Caneta Azul ♫

Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Todo dia eu viajo
Com uma azul e uma amarela
Eu perdi minha caneta
Quem achou, devolva ela
Todo dia eu viajo
Com azul e uma amarela
Eu perdi minha caneta
Quem achou devolva ela
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Todo dia eu viajo
Com uma azul e uma amarela
Perdi minha caneta
Quem achou, devolva ela
Todo dia eu viajo
Com uma azul e uma amarela
Perdi minha caneta
Quem achou, devolva ela
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra
Caneta azul, azul caneta
Caneta azul tá marcada com minha letra 
            `)
    }
}