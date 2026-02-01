import { estado } from "../datos/estado.js";
import { listaProducto } from "./elementos.js";
import { eliminarProducto } from "../servicios/servicios.js";

export function renderProducto() {
    listaProducto.innerHTML = ""; // limpia la lista antes
    
    estado.productos.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("cadaProducto");

        const info = document.createElement("p");
        info.textContent = `
            Nombre: ${producto.nombre},
            Precio: ${producto.precio},
            Cantidad: ${producto.cantidad}`;

        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.classList.add("btn-eliminar");

        btnEliminar.addEventListener("click", () => {
            eliminarProducto(producto.id);
        });

        li.append(info, btnEliminar);
        listaProducto.appendChild(li);
        });

    
}