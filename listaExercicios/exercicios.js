"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
// / Exercicio numero 1 ! / 
// const numero1 = rs.question('Informe o primeiro numero: ');
// const numero2 = rs.question('Informe o segundo numero: ');
// const numero3 = rs.question('Informe o terceiro numero: ');
// const resultado: number = numero1 * numero2 * numero3;
// console.log(" O resultado da conta é " + resultado);
// Exericio 2
// const nota1 = rs.question(' Informe a primeira nota: ');
// const nota2 = rs.question(' Informe a segunda nota: ');
// const nota3 = rs.question(' Informe a terceira nota: ');
// const media: number =  nota1 + nota2 + nota3 / 3;
// console.log('a media do aluno é: ' + media);
var base = rs.question(' Infome a base do trinagulo: ');
var altura = rs.question(' Infome a altura do trinagulo: ');
var resultadoArea = (base + altura) / 2;
console.log(' A area do triangulo é = ' + resultadoArea);
