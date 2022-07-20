
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
let menuGlobal= Menus
/**
 * Incluyendo DOM
 */

const generalTable = document.getElementById('generalTable')

menuGlobal.forEach(menu => {
    generalTable.innerHTML += `
    
    <div>
    <tr>
    <td><h3 class="title_product d-flex"> ${menu.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="description">${menu.description}</p></td>
    <td><h4 class="precio">${menu.precio} <i class="fa-solid fa-circle-plus ms-2"></i></h4></td>
    </tr>
    </div>

    `
})

/**
 *Agregando EVENTOS
 */

const botonCarro = document.getElementById("botonCarro")

botonCarro.addEventListener("click", () => { 
    console.log("di click en button")
})

const input1 = document.getElementById("input1")
input1.addEventListener('input', () => { 
    generalTable.innerHTML = ""

    menuGlobal = menuGlobal.filter(menuafiltrar => menuafiltrar.nombre.toLowerCase().includes(input1.value.toLowerCase()))

    menuGlobal.forEach(menufiltro => {

        generalTable.innerHTML += `
        
        <div>
        <tr>
        <td><h3 class="title_product d-flex"> ${menufiltro.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="description">${menufiltro.description}</p></td>
        <td><h4 class="precio">${menufiltro.precio} <i class="fa-solid fa-circle-plus ms-2"></i></h4></td>
        </tr>
        </div>
        
        
        `
    })

})

const selectSort = document.getElementById("selectSort")
selectSort.addEventListener('change', (event) => {
    generalTable.innerHTML = ""
    console.log(event.target.value)
    let tipoOrden = event.target.value


    menuGlobal = menuGlobal.sort((a, b) => tipoOrden == "asc" ? a.precio - b.precio : b.precio - a.precio)
    menuGlobal.forEach(menufiltro => {

        generalTable.innerHTML += `
        
        <div>
        <tr>
        <td><h3 class="title_product d-flex"> ${menufiltro.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="description">${menufiltro.description}</p></td>
        <td><h4 class="precio">${menufiltro.precio} <i class="fa-solid fa-circle-plus ms-2"></i></h4></td>
        </tr>
        </div>
        
        `
    })
    console.log("Di click en boton")
   
})

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
