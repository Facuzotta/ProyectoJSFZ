class articulo {
    constructor (marcaModeloYDescripcion, precio, tipoIva, plazoDeEntrega, cantidad) {
        this.marcaModeloYDescripcion = marcaModeloYDescripcion;
        this.precio = precio;
        this.tipoIva = tipoIva;
        this.plazoDeEntrega = plazoDeEntrega;
        this.cantidad = cantidad;
    }
}

let plazos = [
    { tipoIva: "10,5%", plazoDeEntrega: "15 Dias"},
    { tipoIva: "21%", plazoDeEntrega: "15 Dias"},
    { tipoIva: "10,5%", plazoDeEntrega: "30 Dias"},
    { tipoIva: "21%", plazoDeEntrega: "30 Dias"},
    { tipoIva: "10,5%", plazoDeEntrega: "0 Dias"},
    { tipoIva: "21%", plazoDeEntrega: "0 Dias"},
]

function agregarProducto (){
    let marcaModeloYDescripcion = prompt("Ingrese Marca, Modelo y Descripcion del producto ofertado");
    let precio = prompt("Ingrese el precio unitario sin IVA");
    let tipoIva = prompt("Ingrese el tipo de IVA del producto ingresado (21% o 10,5%)");
    let plazoDeEntrega = prompt ("Ingrese el plazo de entrega. Si es entrega inmediata coloque 0 Dias");
    let cantidad = prompt("Ingrese la cantidad presupuestada");
    const nuevoArticulo = new articulo (marcaModeloYDescripcion, precio, tipoIva, plazoDeEntrega, cantidad)
    arrayOrden.push(nuevoArticulo);
    alert("Producto agregado a la propuesta")
}

function verPresupuesto(){
    arrayOrden.array.forEach((producto)=> {
        console.log(
            `Usted presupuesto el siguiente artículo ${producto.marcaModeloYDescripcion}`
            `Precio unitario de ${producto.precio}`
            `La cantidad ofertada es ${producto.cantidad}`
            `El plazo de entrega es de ${producto.plazoDeEntrega}`     
        )
        
    });
}
function productoMasCaro(){
    const mayorPrecio = precios.filter((prod) => prod.precio >precio)
    for (const precio of mayorPrecio)
    alert(`El producto mas caro de los seleccionados es ${precio.marcaModeloYDescripcion} por un valor de ${precio.precio}`)
}

function finalizarPresupuesto(){
    const total = arrayOrden.reduce((acc, el) => acc + el.precio, 0);
    alert(`El total del presupuesto es de ${total}`)
}

let arrayOrden = []

let opcion = prompt(
    "Ingrese una opcion: \n 1: Agregar producto \n 2: Mostrar producto mas caro \n 3: Ver presupuesto \n 4: Finalizar presupuesto \n 5: Salir "
)

while (opcion !=="5"){
    if (opcion === "1"){
        agregarProducto(arrayOrden);
    }
    if (opcion === "2"){
        productoMasCaro();
    }
    if (opcion === "3"){
        verPresupuesto();
    }
    if (opcion === "4"){
        finalizarPresupuesto(arrayOrden);
    }
    opcion = prompt(
        "Vuelva a ingresar una opcion \n 1: Agregar producto \n 2: Mostrar producto mas caro \n 3: Ver presupuesto \n 4: Finalizar presupuesto \n 5: Salir "
    )
}
alert("Gracias por su presupuesto")













/* PRIMERA PRE_ENTREGA



let articulo1 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo1= Number(prompt("Ingrese precio unitario sin IVA del artículo propuesto"))
let ivaArticulo1= prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%")
let iva105 = 1.105
let iva21 = 1.21
let plazoDeEntrega = prompt ("Ingrese el plazo de entrega en días, siendo entrega inmediata '0'")
let qtyArticulo = 1 */
/* let articulo2 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo2= Number(prompt("Ingrese precio sin IVA del artículo propuesto"))
let ivaArticulo2= Number(prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%"))

let articulo3 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo3= Number(prompt("Ingrese precio sin IVA del artículo propuesto"))
let ivaArticulo3= Number(prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%")) */

/* function articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21){
    switch (ivaArticulo1) {
        case "1":
            return precioArticulo1 * iva105
        break;
        case "2":
            return precioArticulo1 * iva21
        break;
        default:
            return "Error"
        break;
    }
}
console.log (articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21))


if (articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21) < 50000){
    console.log ("Aplica credito bancario")
}
else if (articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21) < 100000){
    console.log ("Aplica a leasing bancario")
}
else {
    console.log("No aplica a leasing ni credito bancario")
}

for (let cantidad = 0; cantidad <= 10; cantidad++) {
    if(cantidad === 10)
    break
    console.log (`La cantidad ofertada es ${cantidad}`)
    
}
 */
