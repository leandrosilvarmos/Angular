import * as rs from 'readline-sync';


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

const base = rs.question(' Infome a base do trinagulo: ');
const altura = rs.question(' Infome a altura do trinagulo: ');
const resultadoArea: number = (base + altura) / 2;
console.log(' A area do triangulo é = ' + resultadoArea);