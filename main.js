
class deporte {
    constructor (nombre, cuota) {
        this.nombre = nombre;
        this.cuota = cuota;
    }
}

const deporte1 = new deporte("Futbol", 2500);
const deporte2 = new deporte("Tenis", 2200);
const deporte3 = new deporte("Handball", 2000);
const deporte4 = new deporte("Hockey", 2500);
const deporte5 = new deporte("Basquet", 2200);

const arrayDeportes = [deporte1, deporte2, deporte3, deporte4, deporte5];



class socios {
    constructor (nombre, edad, actividad, monto) {
    this.nombre = nombre;
    this.edad = edad;
    this.actividad = actividad;
    this.monto = monto;
    }
}

const socio1 = new socios("Gonzalo Fernandez", 17, deporte5.nombre, deporte5.cuota);
const socio2 = new socios("Martin Guzman", 19, deporte2.nombre, deporte2.cuota);
const socio3 = new socios("Daniel Marattea", 22, deporte1.nombre, deporte1.cuota);
const socio4 = new socios("Maria Celli", 21, deporte3.nombre, deporte3.cuota);
const socio5 = new socios("Ana Molinas", 19, deporte4.nombre, deporte4.cuota);

const arraySocios = [socio1, socio2, socio3, socio4, socio5];



alert("Bienvenido a Tenemos la Tercera AC");
menu();


function menu() {
    let accion = prompt("Seleccione una opcion: \n 1) Para dar de alta tu cuenta de socio. \n 2) Para borrar una cuenta de socio. \n 3) Para consultar tus datos y vencimientos. \n 4) Salir");
    let display = accion;

    switch(display) {
        case "1" || "1)": {
            altaSocio();
            volver();
            break;
        }
        case "2" || "2)": {
            bajaSocio();
            volver();
            break;
        }
        case "3" || "3)": {
            consultarCuota();
            volver();
            break;
        }
        case "4" || "4)": {
            despedida();
            break;
        }
        default:{
            alert("Opcion no disponible, vuelva a ingresar.");
        }
    }
}


function altaSocio() {
    let actividad = prompt("Ingrese el deporte que realiza o desea realizar: \n 1) Futbol \n 2) Tenis \n 3) Handball \n 4) Hockey \n 5) Basquet");
    switch(actividad){
        case "1" || "1)": {
            let nombre = prompt("Ingrese su nombre completo:");
            let edad = parseInt(prompt("Ingrese su edad:"));
            let actividad = deporte1.nombre;
            cuota = alert(`La actvidiad: ${deporte1.nombre} tiene un precio mensual de: $${deporte1.cuota}`);
            alert("Se a creado su perfil de socio correctamente.");
            let monto = deporte1.cuota;
            let socio = new socios(nombre, edad, actividad, monto);
            arraySocios.push(socio);
            console.log(arraySocios);
            break;
        }
        
        case "2" || "2)": {
            let nombre = prompt("Ingrese su nombre completo:");
            let edad = parseInt(prompt("Ingrese su edad:"));
            let actividad = deporte2.nombre;
            cuota = alert(`La actvidiad: ${deporte2.nombre} tiene un precio mensual de: $${deporte2.cuota}`);
            alert("Se a creado su perfil de socio correctamente.");
            let monto = deporte3.cuota;
            let socio = new socios(nombre, edad, actividad, monto);
            arraySocios.push(socio);
            console.log(arraySocios);
            break;
        }
    
        case "3" || "3)": {
            let nombre = prompt("Ingrese su nombre completo:");
            let edad = parseInt(prompt("Ingrese su edad:"));
            let actividad = deporte3.nombre;
            cuota = alert(`La actvidiad: ${deporte3.nombre} tiene un precio mensual de: $${deporte3.cuota}`);
            alert("Se a creado su perfil de socio correctamente.");
            let monto = deporte3.cuota;
            let socio = new socios(nombre, edad, actividad, monto);
            arraySocios.push(socio);
            console.log(arraySocios);
            break;
        }
        case "4" || "4)": {
            let nombre = prompt("Ingrese su nombre completo:");
            let edad = parseInt(prompt("Ingrese su edad:"));
            actividad = deporte4.nombre;
            cuota = alert(`La actvidiad: ${deporte4.nombre} tiene un precio mensual de: $${deporte4.cuota}`);
            alert("Se a creado su perfil de socio correctamente.");
            let monto = deporte4.cuota;
            let socio = new socios(nombre, edad, actividad, monto);
            arraySocios.push(socio);
            console.log(arraySocios);
            break;
        }
        case "5" || "5)": {
            let nombre = prompt("Ingrese su nombre completo:");
            let edad = parseInt(prompt("Ingrese su edad:"));
            actividad = deporte5.nombre;
            cuota = alert(`La actvidiad: ${deporte5.nombre} tiene un precio mensual de: $${deporte5.cuota}`);
            alert("Se a creado su perfil de socio correctamente.");
            let monto = deporte5.cuota;
            let socio = new socios(nombre, edad, actividad, monto);
            arraySocios.push(socio);
            console.log(arraySocios);
            break;
        }
    } 
}


function bajaSocio() {
    let nombre = prompt("Ingrese su nombre completo:");
    let socios = arraySocios.find(socios => socios.nombre == nombre);
    console.log(socios);

  if(arraySocios.find(socios => socios.nombre === nombre)){
    let indice = arraySocios.indexOf (socios);
    arraySocios.splice (indice, 1);
    alert("El perfil de socio fue eliminado correctamente.");
    console.log(arraySocios);
    }

    else {
    alert("El nombre ingresado no se encuentra en el sistema.");   
    }
} 


function consultarCuota() {
    let nombre = prompt("Ingrese su nombre completo:");
    let socios = arraySocios.find( socios => socios.nombre == nombre);
    

    if (arraySocios.find(socios => socios.nombre === nombre)){
        let indice = arraySocios.indexOf (socios);
        alert(`El socio: ${socios.nombre}, realiza la actividad: "${socios.actividad}" y debe abonar la cantidad de: $${socios.monto} cada mes.`);
    }

    else {
        alert("El nombre ingresado no se encuentra en el sistema.");
    }
}


function volver() {
    let volverAtras = prompt("Desea volver al menu principal? (responda si o no)");
    switch (volverAtras){
        case "si":{
            menu();
            break;
        }

        case "no":{
            despedida();
            break;
        }
    }
}


 function despedida() {
    alert("Hasta pronto!");
} 