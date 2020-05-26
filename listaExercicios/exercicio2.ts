import * as rs from 'readline-sync';

function tipodeNumero(parametro1: number): String {

    if (parametro1 > 0) {
        return 'positivo'
    } else if (parametro1 < 0) {
        return 'negativo'

    } 
    
    else {
        return 'zero';
    }
}


let verificar = Number(rs.question('informe um numero: '));
console.log('Numero Informado é ' + tipodeNumero(verificar));
