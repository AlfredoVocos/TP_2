/** TRABAJO PRACTICO Nº2 EJERCICION Nº 7
 * MARTIN ORTIZ
 */

let a = prompt("ingresa el primer numero");
let b = prompt("ingresa el segundo numero");
let c = prompt("ingresa el tercer numero");

if (a>b) {
    may = a;
    if (a>c) {
        may = a;
    } else {
        may = c;
    }
} else{
  if (a<b) {
    may = b;
    if (b<c) {
        may = c;
    } else {
        may = b;
    }
  } 

}
alert ("el mayor es :" + may);


    
