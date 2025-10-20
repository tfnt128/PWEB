function maiorNumero(a, b, c){
    return Math.max(a, b, c)
}

function ordemCrescente(a, b, c){
    return [a, b, c].sort((x, y) => x - y)
}

function ehPalindromo(palavra){
    if(palavra == palavra.split().reverse().join(''))
        return 'É palíndromo'
    else
        return 'Não é palíndromo'
}

function triangulo(a, b, c){
    if(a === b && b === c)
        return 'Triângulo Equilátero'
    else if(a === b || b === c || a === c)
        return 'Triângulo Isóscele'
    else 
        return 'Triângulo Escaleno'
}

console.log(maiorNumero(3, 5, 10));
console.log(ordemCrescente(6, 10, 2));
console.log(ehPalindromo('atividade'))
console.log(triangulo(4, 4, 4))