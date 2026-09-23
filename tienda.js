const inventario = [
  { id: 101, nombre: "Laptop Gamer", precio: 1200, stock: 4, categoria: "computo" },
  { id: 102, nombre: "Mouse Inalámbrico", precio: 30, stock: 15, categoria: "accesorios" },
  { id: 103, nombre: "Teclado Mecánico", precio: 80, stock: 0, categoria: "accesorios" },
  { id: 104, nombre: "Monitor 4K", precio: 400, stock: 2, categoria: "computo" },
  { id: 105, nombre: "Cable HDMI", precio: 10, stock: 0, categoria: "cables" }
];

const buscarId = (ide) =>{
    const productoEncontrado = inventario.find((proId)=> proId.id === ide)
    if (productoEncontrado === undefined) {
        return "Error, producto no encontrado"
    } else {
        return `Producto encontrado: ${productoEncontrado.nombre} - $${productoEncontrado.precio}`
    }
}

const accesoriosDisponibles = inventario
.filter((disAc)=> disAc.categoria === "accesorios" && disAc.stock > 0)
.map((disAc)=> disAc.nombre)

const descuento = (desc) =>{
    const prodesc = inventario.map((descmap)=>{
        const desc1 = descmap.precio*(desc/100)
        return{
            nom: descmap.nombre,
            precioOriginal: descmap.precio,
            precioFinal: descmap.precio - desc1
        }
    })
    return prodesc
}

console.log(buscarId(101))
console.log(buscarId(999))
console.log(accesoriosDisponibles)
console.log(descuento(10))