"use strict";
exports.__esModule = true;
var rs = require("readline-sync");
var numeropares = new Array();
var valoresNumericos;
do {
    valoresNumericos = Number(rs.question('Informe um numero'));
    if (valoresNumericos % 2 === 0) {
        numeropares.push(valoresNumericos);
    }
} while (valoresNumericos > 0);
console.log(numeropares);
