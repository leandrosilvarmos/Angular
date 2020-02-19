import * as rs from 'readline-sync';


const numeropares = new Array<number>();
let valoresNumericos : number;

do{
     valoresNumericos =  Number(rs.question('Informe um numero'));
     if( valoresNumericos % 2 === 0){
         numeropares.push(valoresNumericos);
     }

} while (valoresNumericos > 0);

console.log(numeropares);
