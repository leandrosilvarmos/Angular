import * as rs from 'readline-sync';

let numberOne = 0;
let numberTwo = 0;

do{ 

     numberOne = Number(rs.question(' Informe o primeiro numero'));

}while (isNaN(numberOne)){

}do{
     numberTwo = Number(rs.question('Informe o segundo numero'));

}while (isNaN(numberTwo)) 

const soma = numberOne + numberTwo;
console.log(' A soma dos numeros é ' + soma);
