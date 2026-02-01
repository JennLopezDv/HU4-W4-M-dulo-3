import { Producto } from "../modelos/producto.js";
import { agregarProducto } from "../servicios/servicios.js";
import { formulario } from "./elementos.js";
import { renderProducto } from "./render.js";

export function listenersProductos(){
    formulario.addEventListener("submit", event => {
        event.preventDefault()
        const inputNombre = document.querySelector("#nombre-producto").value;
        const inputPrecio = document.querySelector("#precio-producto").value;
        const inputCantidad = document.querySelector("#cantidad-producto").value;

        const newProducto = new Producto(inputNombre, inputPrecio, inputCantidad)
        agregarProducto(newProducto)
        renderProducto(newProducto)
    })

}

