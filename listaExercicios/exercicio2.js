"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
function tipodeNumero(parametro1) {
    if (parametro1 > 0) {
        return 'positivo';
    }
    else if (parametro1 < 0) {
        return 'negativo';
    }
    else {
        return 'zero';
    }
}
var verificar = Number(rs.question('informe um numero: '));
console.log('Numero Informado é ' + tipodeNumero(verificar));
