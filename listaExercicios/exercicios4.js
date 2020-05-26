"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numberOne = 0;
var numberTwo = 0;
do {
    numberOne = Number(rs.question(' Informe o primeiro numero'));
} while (isNaN(numberOne));
{
}
do {
    numberTwo = Number(rs.question('Informe o segundo numero'));
} while (isNaN(numberTwo));
var soma = numberOne + numberTwo;
console.log(' A soma dos numeros é ' + soma);
