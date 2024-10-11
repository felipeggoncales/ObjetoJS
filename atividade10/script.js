const array = {
    pessoa1: {
        nome: 'Wilton',
        idade: 41
    },
    pessoa2: {
        nome: 'Marcos',
        idade: 53
    },
    pessoa3: {
        nome: 'Luzia',
        idade: 47
    }
};

function verificarMaisVelho(lista) {
    let idadeMaisVelho = 0;
    let maisVelhoNome =  '';   
    for (let indice in lista) {
        if (lista[indice].idade > idadeMaisVelho) {
            idadeMaisVelho = lista[indice].idade;
            maisVelhoNome = lista[indice].nome;
        }
    }
    console.log(maisVelhoNome)
}

verificarMaisVelho(array)