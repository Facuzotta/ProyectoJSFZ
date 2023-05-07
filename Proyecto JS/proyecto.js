let articulo1 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo1= Number(prompt("Ingrese precio unitario sin IVA del artículo propuesto"))
let ivaArticulo1= prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%")
let iva105 = 1.105
let iva21 = 1.21
let plazoDeEntrega = prompt ("Ingrese el plazo de entrega en días, siendo entrega inmediata '0'")
let qtyArticulo = 1
/* let articulo2 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo2= Number(prompt("Ingrese precio sin IVA del artículo propuesto"))
let ivaArticulo2= Number(prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%"))

let articulo3 = prompt("Ingrese marca, modelo y descripcion del articulo propuesto")
let precioArticulo3= Number(prompt("Ingrese precio sin IVA del artículo propuesto"))
let ivaArticulo3= Number(prompt("Ingrese 1 si el IVA de su producto es 10.5% o 2 si es de 21%")) */

function articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21){
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



/* for(articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21);articuloConIva(precioArticulo1, ivaArticulo1, iva105, iva21) < 50000;  )

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */