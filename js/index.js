/* Desafio 1
**
let codigoPedido = prompt("¡Bienvenido a PAULO SUSHI! Ingrese aquí su código de descuento")
let contador = 1

while (codigoPedido !== '2345' && contador <= 2) {
    contador = contador + 1
    codigoPedido = prompt('Ingrese nuevamente el código')
}
if (codigoPedido === '2345') {
    alert("¡Felicidades! Tienes 20% de descuento en toda tu compra")
} else { 
    alert('¡Ups! Al parecer no tienes un descuento disponible') }

let repetir = true
while (repetir) {

    let palabra= prompt("Ingrese Nombre de Usuario").toLowerCase()
    if (palabra==="daniela") {
        repetir = false
        alert('¡Bienvenida Daniela!')
    }
}*/

function solicitarCantidad() {
    let cantidad = prompt("Ingrese la cantidad que desea")
    while (isNaN(cantidad)) {
        cantidad = prompt("Ingrese la cantidad que desea")
    }
    return parseInt(cantidad)
}

let menu = prompt("¡Bienvenido a PAULO SUSHI! Seleccione su pedido:\n 1) Combinados x 6u.\n 2) Combinados x 12u.\n 3) Combinados x 24u.")
const MENU1 = 1500
const MENU2 = 2500
const MENU3 = 5000
let total = 0

while (!isNaN(menu)) {

    let multiplicacion, cantidad

    if (menu == 1) {
        cantidad = solicitarCantidad()
        multiplicacion = cantidad * MENU1
    } else if (menu == 2) {
        cantidad = solicitarCantidad()
        multiplicacion = cantidad * MENU2
    } else if (menu == 3) {
        cantidad = solicitarCantidad()
        multiplicacion = cantidad * MENU3
    } else {
        alert('ingrese un numero correcto')
    }
    if (multiplicacion !== undefined) {
        total += multiplicacion
    }
    menu = prompt("¡Bienvenido a PAULO SUSHI! Seleccione su pedido:\n 1) Combinados x 6u.\n 2) Combinados x 12u.\n 3) Combinados x 24u. \n Presione F para Finalizar Pedido")
    
    

}

alert ('el total de su compra es $' + total)






