const suma = ()=>{
    let numero1 = parseInt (prompt("Ingrese el primer valor: "));
    let numero2 = parseInt (prompt("Ingrese el segundo valor: "));
 
    let suma = (numero1 + numero2);
    alert( "El resultado de la suma es: " + suma);
}

suma()
let text = "Usted desea continuar?"

while(confirm(text) == true){
    suma();
    if (confirm(text) == false) {
        break;
    }
}