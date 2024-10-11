const objeto = {
    propriedade: 1
}

function definirChaveValor(obj, chave, valor) {
    obj[chave] = valor;
}

definirChaveValor(objeto, 'propriedade2', 2)

console.log(objeto)