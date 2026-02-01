import { actualizarProducto } from "../servicios/servicios.js";
import { estado } from "../datos/estado.js";

export function validarProducto(objProducto){
    const producto = estado.productos.find(producto => producto.nombre === objProducto.nombreProducto)
        if(!producto) {
            actualizarProducto(objProducto)
        } else {
            alert("Este producto ya existe.")
        }
}