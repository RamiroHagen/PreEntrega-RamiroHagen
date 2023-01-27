
alert("Bienvenido a El Arbolito Digital");

const valorUsd = 192.26;
const valorEur = 202.03;
let nombre = prompt("Ingrese su nombre:");
let edad = parseInt(prompt("Ingrese su edad: (debe ser mayor de 18 años)"));
let resultado = 0;


if(edad < 18){
    alert("No puede realizar operaciones siendo menor de edad. Hasta pronto " + nombre);
}
else if (edad >= 18){
    
    proceso();
}




function proceso(){
    let divisa = prompt("Que divisa quisiera comprar? (eur o usd)");

        switch (divisa){
            case "usd":{
                let cantidadUsd = prompt("Que cantidad en USD quisiera comprar?");
                resultado = operacionUsd (cantidadUsd, valorUsd);
                
                concretarOperacion ()
                let confirmacion = prompt("El total a pagar con impuesto PAIS y persepciones incluidas es de: $ " + monto + " ARS, es correcto " + nombre + " ? (Responda si o no)");

                if(confirmacion == "si"){
                    alert("Compra realizada, datos de su tarjeta de crédito copiados, muchas gracias por confiar " + nombre); break;
                }

                
                else if (confirmacion == "no"){
                    let volverOperaciones = prompt("Operacion Cancelada. Desea realizar una nueva operación? (Responda si o no)");
                    switch (volverOperaciones){
                        case "si":{
                            proceso();
                        }break;

                        case "no":{
                            mensajeDespedida ();
                        }
                    }

                }break;
            }
        
    

            case "eur":{
                let cantidadEur = prompt("Que cantidad en EUR quisiera comprar?");
                resultado = operacionEur (cantidadEur, valorEur);
                
                concretarOperacion ()
                let confirmacion = prompt("El total a pagar con impuesto PAIS y persepciones incluidas es de: $ " + monto + " ARS, es correcto " + nombre + " ? (Responda si o no)");

                if(confirmacion == "si"){
                    alert("Compra realizada, datos de su tarjeta de crédito copiados, muchas gracias por confiar " + nombre); break;
                }


                else if (confirmacion == "no"){
                    let volverOperaciones = prompt("Operacion Cancelada. Desea realizar una nueva operación? (Responda si o no)");

                    switch (volverOperaciones){
                        case "si":{
                            proceso();
                        }break;

                        case "no":{
                            mensajeDespedida ();
                        }
                    }

                }break;
            }

            default:{
                mensajeInvalido ();
            }
        }   
}




function operacionUsd (valor1, valor2){
    return (valor1 * valor2) + (((valor1 * 65) / 100) * 192.26);
}

function operacionEur (valor1, valor2){
    return (valor1 * valor2) + (((valor1 * 65) / 100) * 202.03);
}

function concretarOperacion (){
    monto = resultado;
}

function mensajeDespedida (){
    alert("Hasta pronto " + nombre);
}

function mensajeInvalido (){
    alert("el dato introducido no es valido. Hasta pronto " + nombre);
}