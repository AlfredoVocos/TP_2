/** TRABAJO PRACTICO Nº2 EJERCICION Nº 7
 * MARTIN ORTIZ
 */

let a = prompt("ingresa el primer numero");
let b = prompt("ingresa el segundo numero");
let c = prompt("ingresa el tercer numero");

if (a>b) {
    may = a;
    if (a<c) {
        may=c;
    } else {
        if (a===c) {
            alert ("el primer y el tercer numero son iguales");
        } else {
            if (c===b) {
                alert("el segundo y el tercer numero son iguales")
            }
        }
    }
    alert("el mayor es: "+may);
} else {
    if (a===b) {
        if (a===b===c) {
            alert ("los tres numeros son iguales");
        } else {
            may=b;
            if (b<c) {
                alert ("el primero y el segundo son iguales");
                may=c;
            } else {
                if (b===c) {
                    alert ("el segundo y el tercer numero son iguales");
                } else {
                    alert ("el primero y el segundo son iguales");
                }
            }
            alert ("el mayor es: "+may);
        }
    } else {
        may=b;
            if (b<c) {
                may=c;
            } else {
                if (b===c) {
                    alert ("el segundo y el tercer numero son iguales");
                } else{
                    if (c===a) {
                        alert ("el primer y el tercer numero son iguales");
                    }
                }
            }
            alert ("el mayor es: "+may);
    }
}