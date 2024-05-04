let precioUnitario = 1200;
function sumarProductos(precioUnitario, cantidadDeseada) {
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
    }

    //let precio = 1200;
    let cantidad = parseInt(prompt("Ingrese la cantidad deseada"));
    let totalCompra = sumarProductos(precioUnitario, cantidad)
    console.log("El total gastado en el producto es: $" + totalCompra);