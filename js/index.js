class Menu {
    constructor(id, nombre, descripcion, precio) {
        this.id = id
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
    }
}
let Menus = []
/* Se obtienen los menus a traves de archivo json mediante Fetch*/

async function mostrarProductos() {
    const response = await fetch ('./json/menus.json')
    const menusParseados = await response.json()

     menusParseados.forEach(menu => {
     Menus.push(new Menu(menu.id, menu.nombre, menu.descripcion, menu.precio))
     
        generalTable.innerHTML += `
        <div>
        <tr>
        <td><h3 class="title_product d-flex"> ${menu.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="descripcion">${menu.descripcion}</p></td>
        <td style="cursor:pointer;"><h4 class="precio">${menu.precio} <i style:"cursor:pointer;" class="fa-solid fa-circle-plus ms-2" onclick="agregarCarritoItem(${menu.id}, 1, ${menu.precio},'${menu.nombre}')"></i></h4></td>
        </tr>
        </div>
        `
     })
}

// mostrarProductos()


/**
 * Definicion de clase de CarritoItem
 */
class CarritoItem {
    constructor(idMenu, cantidad, costo, nombre) {
        this.idMenu = idMenu
        this.cantidad = cantidad
        this.costo = costo
        this.nombre = nombre
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
        const item = this.buscarItemPorId(itemCarrito.idMenu)
       !item ? this.selecciondemenu.push(itemCarrito) : item.cantidad += 1 //Operador ternario
    }

    buscarItemPorId(idMenu) {
        return this.selecciondemenu.find(element => element.idMenu == idMenu)
    }

    eliminarDelCarro(Id) {
        const indice = this.selecciondemenu.findIndex((menuaeliminar) => menuaeliminar.idMenu === Id)
        this.selecciondemenu.splice(indice, 1)
    }
    SumarTotal() {
        this.total = this.selecciondemenu.reduce((acumulador, menuElemento) => acumulador + (menuElemento.cantidad * menuElemento.costo), 0)
    }

}

const ObjetoCarrito = new Carrito([], 0)

/**
 * Incluyendo DOM
 */

const generalTable = document.getElementById('generalTable')

const carritoCompra = document.getElementById('carritoCompra')
function agregarCarritoItem(idMenu, cantidad, precio, nombre) {
    ObjetoCarrito.agregarAlcarrito(new CarritoItem(idMenu, cantidad, precio, nombre))
    mostrarItemsHtml()
    setStorage()

    Toastify({
        text: `añadiste "${nombre.toLowerCase()}" a tu carrito`,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "bottom", 
        position: "right", 
        stopOnFocus: true, 
        style: {
          background: "linear-gradient(to bottom left,#0389A4, #053540)",
        },
        onClick: function(){} 
      }).showToast();


}

function setTotalHtml() {
    const total = document.getElementById('totalCarrito')
    ObjetoCarrito.SumarTotal()
    total.innerHTML = 
    `<h4>Total: $${ObjetoCarrito.total}</h4>
    <button type="button" id="buttonfinalizar" class="btn btn-secondary mt-1">Finalizar compra</button>
    `
    const buttonfinalizar = document.getElementById("buttonfinalizar")
    buttonfinalizar.addEventListener("click", () => {

        if(ObjetoCarrito.total==0){
        
            Swal.fire({
                icon: 'warning',
                text: 'Tu carrito está vacío',
              })

        } else {

        Swal.fire({
            title: 'Confirmar pedido ',
            showCancelButton: true,
            confirmButtonText: 'Si ',
            cancelButtonText: 'No',
            denyButtonText: `Don't save`,
            
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Tu pedido ha sido confirmado', '', 'success')

            } 
            

          })
        }
    })
    

}   

const setStorage = () => localStorage.setItem('carrito', JSON.stringify(ObjetoCarrito.selecciondemenu))

function mostrarItemsHtml() {
    carritoCompra.innerHTML = ''

    ObjetoCarrito.selecciondemenu.forEach(item => { 
        const {idMenu, nombre, costo, cantidad}  =item //desestructuracion de objeto
        const idDiv = 'seleccionado' + idMenu
        carritoCompra.innerHTML += `
        <tr id="${idDiv}">
            <th scope="row">${nombre}</th>
            <td>$${costo}</td>
            <td>${cantidad}</td>
            <td><button class="btn btn-danger" onclick="quitarElemento(${idMenu}, '${idDiv}')"> Eliminar</button></td>
        </tr>
        `
    })
    setTotalHtml()
}

document.getElementById('carritoGeneral').addEventListener('click', () => {
    if (document.getElementById('carritoCard')?.style?.display === 'block') {
        document.getElementById('carritoCard').style = 'display:none';
    } else {
        document.getElementById('carritoCard').style = 'display:block';
    }
})

/**
 * Funcion para eliminar un item ya agregado al carrito
 */
const quitarElemento = (idMenu, idDiv) => {
    ObjetoCarrito.eliminarDelCarro(idMenu)
    const itemAEliminar = document.getElementById(idDiv)
    if (itemAEliminar) itemAEliminar.remove()
    setTotalHtml()
    setStorage()
}

/**
 *Agregando EVENTOS
 */
const input1 = document.getElementById("input1")
input1.addEventListener('input', () => { 
    generalTable.innerHTML = ""

    let menufiltrado = Menus.filter(menuafiltrar => menuafiltrar.nombre.toLowerCase().includes(input1.value.toLowerCase()))
    console.log(menufiltrado)

    menufiltrado.forEach(menufiltro => {

        generalTable.innerHTML += `
        
        <div>
        <tr>
        <td><h3 class="title_product d-flex"> ${menufiltro.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="descripcion ">${menufiltro.descripcion}</p></td>
        <td><h4 class="precio">${menufiltro.precio} <i style:"cursor:pointer;" class="fa-solid fa-circle-plus ms-2" onclick="agregarCarritoItem(${menufiltro.id}, 1, ${menufiltro.precio},'${menufiltro.nombre}')"></i></h4></td>
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


    let ascendente = Menus.sort((a, b) => tipoOrden == "asc" ? a.precio - b.precio : b.precio - a.precio)
    console.log(ascendente)
    ascendente.forEach(menufiltro => {

        generalTable.innerHTML += `
        
        <div>
        <tr>
        <td><h3 class="title_product d-flex"> ${menufiltro.nombre} <p class="porciones ps-3 pt-2">8 PIEZAS</p></h3><p class="descripcion">${menufiltro.descripcion}</p></td>
        <td><h4 class="precio">${menufiltro.precio} <i style:"cursor:pointer;" class="fa-solid fa-circle-plus ms-2" onclick="agregarCarritoItem(${menufiltro.id}, 1, ${menufiltro.precio},'${menufiltro.nombre}')"></i></h4></td>
        </tr>
        </div>
        
        
        `
    })
    console.log("Di click en boton")
})


async function ejecucionInicial() {
    await mostrarProductos()
    if (localStorage.getItem('carrito')) {
        ObjetoCarrito.selecciondemenu = JSON.parse(localStorage.getItem('carrito'))
        ObjetoCarrito.SumarTotal()
        mostrarItemsHtml()
    }
}

ejecucionInicial()

