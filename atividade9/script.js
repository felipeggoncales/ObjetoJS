const objeto = {
    prop1: 1,
    prop2: 2,
    prop3: 3
};

function verificarChave(objeto, chave) {
    if (objeto[chave]) {
        return true
    } else {
        return false
    }
}

console.log(verificarChave(objeto, 'prop4'));
console.log(verificarChave(objeto, 'prop2'));