//Usuario ejemplo 
//Fijo un usuario unico a modo de ejemplo 
let nombreUsuario = "tutorCoderhouse";
let contraseñaUsuario = "1234";
let ingreso = false;

//Ingreso
let usuario = prompt("Ingresa tu nombre de usuario");
if (usuario == nombreUsuario){
    for(let i=2; i>=0; i--){
        let contraseña = prompt("Ingresa tu contraseña. Tenes "+ (i+1)+" intentos.");
        if (contraseña == contraseñaUsuario){
            alert("Ingreso Exitoso")
            ingreso = true;
            break
        }else{
            alert("Error. Te quedan "+i+" intentos.")
        }
    }
}else{
    alert("Error, usuario no registrado.")
}
//menú de la página
if (ingreso){
    let opcion = prompt("Seleccione una opcion: \n1-Viaje Internacional. \n2-Viaje Nacional. \n3-Viaje Regional. \n4- Presione F para finalizar.");
    while(opcion != "F" && opcion != "f"){
        switch(opcion){
            case "1":  let cantidad = parseInt(prompt ("Cuantos pasajes deseas comprar? \nEl costo del viaje Internacional es de ARS 300.000"))
            alert("El total de "+cantidad+" pasajes es de: ARS " +costoViaje(cantidad, opcion));
            break
            case "2": let cantidad2 = parseInt(prompt ("Cuantos pasajes deseas comprar? \nEl costo del viaje Nacional es de ARS 100.000"))
            alert("El total de "+cantidad2+" pasajes es de: ARS " +costoViaje(cantidad2, opcion));
            break
            case "3": let cantidad3 = parseInt(prompt ("Cuantos pasajes deseas comprar? \nEl costo del viaje Regional es de ARS 50.000"))
            alert("El total de "+cantidad3+" pasajes es de: ARS " +costoViaje(cantidad3, opcion));
            break
        }
        opcion = prompt("Seleccione una opcion: \n1-Viaje Internacional \n2-Viaje Nacional \n3-Viaje Regional \n4- Presione F para finalizar.");
    }
    alert("Muchas gracias por confiar en nosotros.")
}

//Declaracion de Funcion
function costoViaje(cant, viaje){
    if (viaje == 1){
     return cant*300000;  
    }else{
        if(viaje == 2){
            return cant*100000;
        }else{
            return cant*50000;
        }
    }

}