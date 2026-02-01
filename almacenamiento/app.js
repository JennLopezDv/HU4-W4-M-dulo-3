import { estado } from "../datos/estado.js";
import { listenersProductos } from "../DOM/listeners.js";
import { renderProducto } from "../DOM/render.js";
import { obtenerTodosProductos } from "../servicios/servicios.js";
import { cargarProductos } from "../storage/storage.js";


async function main() {
    await obtenerTodosProductos();
    listenersProductos();
    estado.productos = cargarProductos();
    renderProducto()   
    
}

main()