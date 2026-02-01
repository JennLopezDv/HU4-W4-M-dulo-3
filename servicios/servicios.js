import { estado } from "../datos/estado.js";
import { guardarProductos } from "../storage/storage.js";

const url = "http://localhost:3000"


//GET: Obtener la lista de los productos.
export async function obtenerTodosProductos() {
    try{
        const respuesta = await fetch(`${url}/productos`)

        if(!respuesta.ok) throw new Error("Error al obtener todos los productos.\n Intente de nuevo.")
        
        const datos = await respuesta.json()
        estado.productos = datos

        console.log(estado.productos)
    }catch (error) {
        console.error(error)
    }
}

//POST: Agregar nuevos productos.
export async function agregarProducto(producto) {
    try {
        const respuesta = await fetch(`${url}/productos`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        });

        if (!respuesta.ok) throw new Error("No se pudo crear el producto.\n Intente de nuevo.")
        
        const newProducto = await respuesta.json();

        estado.productos.push(newProducto);
        guardarProductos(estado.productos); //localstorage

        console.log("Producto creado con éxito:", newProducto);
        return newProducto;
    
    } catch (error) {
        console.log("Error al intentar agregar un porducto", error)
    }
}

//PUT: Actualizar un producto existente.
export async function actualizarProducto(id, productoActualizado) {
    try {
        const respuesta = await fetch(`${url}/productos/${id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productoActualizado)
        })

        if (!respuesta.ok) throw new Error("No se pudo actualizar el producto.\n Intente de nuevo.")

        const producto = await respuesta.json();

        // Reemplazar el producto en el estado
        const index = estado.productos.findIndex(p => p.id === id);
        if (index !== -1) {
            estado.productos[index] = producto;
            guardarProductos(estado.productos); //LocalStorage.
        }

        console.log("Producto actualizado con éxito:", producto);
        return producto;

    } catch (error) {
        console.log("Error", error)
    }
}

//DELETE: Eliminar un producto.
export async function eliminarProducto(id) {
    try {
        const respuesta = await fetch(`${url}/productos/${id}`, {
            method: 'DELETE'
        });

        if (!respuesta.ok) throw new Error("No se pudo eliminar el producto.\n Intente de nuevo.")

        estado.productos = estado.productos.filter(p => p.id !== id);
        guardarProductos(estado.productos); //localStorage

        console.log("Producto eliminado con éxito")       

    } catch (error) {
        console.log("Error", error)
    }
}