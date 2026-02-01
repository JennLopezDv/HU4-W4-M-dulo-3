const KEY = "productos";

export function guardarProductos(productos) {
    localStorage.setItem(KEY, JSON.stringify(productos));
}

export function cargarProductos() {
    const datos = localStorage.getItem(KEY);
    return datos ? JSON.parse(datos) : [];
}
