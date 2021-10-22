// Função Add
function add(firstNum, secondNum) {
    
    return firstNum + secondNum;
    
}
console.log(add(5, 6));

// Teste da função Add
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');

// ---------------------------------------------------------------------------------

// Função Multiply
function multiply(firstNum, secondNum) {
    
    let sumNumbers = 0;

    for(let index = 0; index < secondNum; index++) {
        sumNumbers = add(sumNumbers, firstNum);
    }
    return sumNumbers;

}
console.log(multiply(5, 4));

// Teste da função Multiply
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');

// ---------------------------------------------------------------------------------

// Função Power
function power(firstNum, secondNum) {

    let multNumbers = 1;

    for(let index = 0; index < secondNum; index++) {
        multNumbers = multiply(multNumbers, firstNum);
    }
    return multNumbers;

}
console.log(power(9, 2));

// Teste da função Power
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');

// ---------------------------------------------------------------------------------

// Função Fatorial
function factorial(facNumber) {

    let result = 1; 

    for(let index = facNumber; index > 0; index--) {
        result = multiply(result, index);
    }
    return result;
}
console.log(factorial(6));

// Teste da função Fatorial
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');

/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// Função Fibonacci
function fibonacci(qtdNumeros) {

    let primeiroTermo = 1;
    let segundoTermo = 1;
    let terceiroTermo = 0;

    let enesimoTermo = 0;

    if(qtdNumeros <= 2) {
        enesimoTermo = 1;
    } else {
        for(let index = 3; index <= qtdNumeros; index++) {

            terceiroTermo = add(segundoTermo, primeiroTermo);

            primeiroTermo = segundoTermo;
            segundoTermo = terceiroTermo;

            enesimoTermo = terceiroTermo;

        }
    }
    return enesimoTermo;
}
console.log(fibonacci(7));

// Teste da função Fibonacci
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
