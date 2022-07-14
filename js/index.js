//DESAFIO 4
/*
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

const Opcion1 = new Menu(1, "CLÁSICO", "Salmón crudo, palta y queso Philadelphia (Arroz-Alga)", 1200)
const Opcion2 = new Menu(2, "PALTOSO", "Salmón crudo, palta y queso Philadelphia (Arroz-Alga-Palta)", 1300)
const Opcion3 = new Menu(3, "PASTA DE SALMÓN", "Pasta de Salmón cocido con verdeo y queso Philadelphia (Arroz-Alga)", 1200)
const Opcion4 = new Menu(4, "ATÚN COCIDO", "Pasta de Atún cocido con verdeo, queso Philadelphia y palta (Arroz-Alga) ", 1000)
const Opcion5 = new Menu(5, "LANGOSTINO", "Langostino frito, queso Philadelphia y pepino (Arroz-Alga)", 1200)
const Opcion6 = new Menu(6, "FRITO PANKO", "Salmón Crudo, palta y queso cremoso (Arroz-Alga-Panko)", 1500)
const Opcion7 = new Menu(7, "FRITO LANGOSTINO", "Langostino, Palta y queso cremoso (Arroz-Alga-Panko-Coco)", 1350)
const Opcion8 = new Menu(8, "CANICAMA", "Canicama, palta y queso Philadelphia (Arroz-Alga-Semillas de sésamo)", 1100)
const Opcion9 = new Menu(9, "ATÚN CRUDO", "Atún crudo, palta y queso Brie (Arroz-Alga) ", 1300)
const Opcion10 = new Menu(10, "ACEVICHADO", "Salmón y langostino acevichado con verdeo, cilandro y lima (Arroz-Alga-Boniato Frito)", 1300)


const Menus = [Opcion1, Opcion2, Opcion3, Opcion4, Opcion5, Opcion6, Opcion7, Opcion8, Opcion9, Opcion10]

/**
 * Definicion de clase de CarritoItem
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

/* Función que permite obtener el texto de los menus para visualizar en pantalla.
*/

function getMenu (menues) {
    let acumulador= '¡Bienvenido a PAULO SUSHI! Seleccione el número de su pedido:\n'
    
    menues.forEach(menuaelegir => { 
        acumulador+= menuaelegir.id + ') ' + menuaelegir.nombre + " " + " $" + menuaelegir.precio + "\n" 
        
    });
    return acumulador + 'PRESIONE UNA LETRA PARA FINALIZAR SU PEDIDO'
}

function solicitarCantidad() {
    let cantidad = prompt("Ingrese la cantidad que desea del menú seleccionado")
    while (isNaN(cantidad)) {
        cantidad = prompt("Ingrese la cantidad que desea del menú seleccionado")
    }
    return parseInt(cantidad)
}

let carrito = new Carrito([], 0)
let menu = prompt(getMenu(Menus))

while(!isNaN(menu)) {
    let menuencontrado = (Menus.find(menuaelegir => menuaelegir.id == menu))
    if (menuencontrado != undefined) {
        let cantidad = solicitarCantidad()
        let itemcarro = new CarritoItem(menuencontrado.id, cantidad, menuencontrado.precio)
        carrito.agregarAlcarrito(itemcarro)
    } else {
        alert('El menu solicitado no es valido, intente nuevamente')
    }
    menu=prompt(getMenu(Menus))   
}

carrito.SumarTotal()
alert(`El total de tu compra es $${carrito.total}`)


