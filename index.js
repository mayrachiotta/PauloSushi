let codigoPedido = prompt("¡Bienvenido a PAULO SUSHI! Ingrese aquí su código de descuento")
let contador = 1

while (codigoPedido !== '2345' && contador <= 2) {
    contador = contador + 1
    codigoPedido = prompt('Ingrese nuevamente el código')
}
if (codigoPedido === '2345') {
    alert("¡Felicidades! Tienes 20% de descuento en toda tu compra")
} else {
    alert('¡Ups! Al parecer no tienes un descuento disponible')
}

