const productos = [
  { nombre: "Laptop", precio: 800, stock: 5 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Teclado", precio: 45, stock: 12 },
  { nombre: "Monitor", precio: 200, stock: 0 },
  { nombre: "Auriculares", precio: 60, stock: 8 }
];

const disonodis = productos.forEach((pro) =>{
    if (pro.stock >= 1) {
        console.log(`Disponible: ${pro.nombre} cuesta ${pro.precio} (Quedan ${pro.stock} unidades)`)
    } else {
        console.log(`Agotado ${pro.nombre} cuesta ${pro.precio}`)
    }
})

