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
/* DESAFIO2 

function solicitarCantidad() {
    let cantidad = prompt("Ingrese la cantidad que desea")
    while (isNaN(cantidad)) {
        cantidad = prompt("Ingrese la cantidad que desea")
    }
    return parseInt(cantidad)
}

multiplicar = (numero1, numero2) => numero1 * numero2

let menu = prompt("¡Bienvenido a PAULO SUSHI! Seleccione su pedido:\n 1) Combinados x 6u.\n 2) Combinados x 12u.\n 3) Combinados x 24u.")
const MENU1 = 1500
const MENU2 = 2500
const MENU3 = 5000
let total = 0

while (!isNaN(menu)) {

    let multiplicacion, cantidad

    if (menu == 1) {
        cantidad = solicitarCantidad()
        multiplicacion = multiplicar(MENU1, cantidad)
    } else if (menu == 2) {
        cantidad = solicitarCantidad()
        multiplicacion = multiplicar(MENU2, cantidad)
    } else if (menu == 3) {
        cantidad = solicitarCantidad()
        multiplicacion = multiplicar(MENU3, cantidad)
    } else {
        alert('ingrese un numero correcto')
    }
    if (multiplicacion !== undefined) {
        total += multiplicacion
    }
    menu = prompt("¡Bienvenido a PAULO SUSHI! Seleccione su pedido:\n 1) Combinados x 6u.\n 2) Combinados x 12u.\n 3) Combinados x 24u. \n Presione F para Finalizar Pedido")



}

alert('el total de su compra es $' + total)


*/

// class Menu {
//     constructor(1,2,3,4,5,6,7,8,9,10) {
//         this.id = id
//         this.nombre = nombre
//         this.color = color
//         this.raza = raza
//         this.cachorros = cachorros
//     }

// }

// const perro1 = new Perro(1, "Cual", "Negro", "Ovejero", ["Cualcito", "Pirata", "Firulais", "Hector", "Tarzan"])
// const perro2 = new Perro(2, "Copito de nieve", "Blanco", "Chihuahua", ["Negrito", "Azulcito"])
// const perro3 = new Perro(3, "Fatiga", "Marron", "Indefinida", [])
// const perro4 = new Perro(4, "Hercules", "Dorada", "Golden", ["Marroncito", "Zafiro", "Pepito"])

// const perros = [perro1, perro2, perro3, perro4]

// console.log(perros)



//DESAFIO 4

/**
 * Definiendo clases y opciones de Menu
 */
class Menu {
    constructor(id, nombre, description, precio) {
        this.id = id
        this.nombre = nombre
        this.description = description
        this.precio = precio
    }
}

const Opcion1 = new Menu(1, "clasico", "palta y queso", 1200)
const Opcion2 = new Menu(2, "avecicahdo", "langostino acevichado,  queso", 1300)
const Opcion3 = new Menu(3, "paltoso", "Salmón crudo, palta y queso Philadelphia", 1400)
const Opcion4 = new Menu(4, "pasta de salmon", "Pasta de Salmón Cocido con verdeo y queso Philadelphia ", 1700)
const Opcion5 = new Menu(5, "atun", "Pasta de Atún cocido con verdeo, queso Philadelphia y palta", 1400)
const Opcion6 = new Menu(6, "frito", " Langostino frito, queso Philadelphia y pepino ", 1500)
const Opcion7 = new Menu(7, "panko", "Salmón crudo, palta y queso cremoso", 1600)
const Opcion8 = new Menu(8, "frito langostino", "Langostino, palta y queso cremoso ", 1400)

const Menus = [Opcion1, Opcion2, Opcion3, Opcion4, Opcion5, Opcion6, Opcion7, Opcion8]

/**
 * Definicion de clase de Carrito y sus items
 */
class CarritoItem {
    constructor(idMenu, cantidad, costo) {
        this.idMenu = idMenu
        this.cantidad = cantidad
        this.costo = costo
    }

}

class Carrito {
    constructor(selecciondemenu, total) {

        this.selecciondemenu = selecciondemenu
        this.total = total
    }

    /**
     * Funciones basicas para carrito
     */
    agregarAlcarrito(itemCarrito) {
        this.selecciondemenu.push(itemCarrito)
    }

    eliminarDelCarro(Id) {

        const indice = this.selecciondemenu.findIndex((menuaeliminar) => menuaeliminar.idMenu === Id)
        this.selecciondemenu.splice(indice, 1)

    }

    SumarTotal() {
        this.total = this.selecciondemenu.reduce((acumulador, menuElemento) => acumulador + (menuElemento.cantidad * menuElemento.costo), 0)
    }
}

/**
 * Ejemplo de demostracion
 */
const ObjetoCarrito = new Carrito([], 0)
ObjetoCarrito.agregarAlcarrito(new CarritoItem(8, 2, 1400))
ObjetoCarrito.agregarAlcarrito(new CarritoItem(6, 3, 1500))
console.log(ObjetoCarrito.selecciondemenu)
ObjetoCarrito.SumarTotal()
console.log(ObjetoCarrito.total)

