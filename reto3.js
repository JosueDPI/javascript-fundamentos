const productos = [
  { nombre: "Laptop", precio: 800, stock: 5 },
  { nombre: "Mouse", precio: 25, stock: 0 },
  { nombre: "Teclado", precio: 45, stock: 12 },
  { nombre: "Monitor", precio: 200, stock: 0 },
  { nombre: "Auriculares", precio: 60, stock: 8 }
];

const agotados = productos
.filter((pro)=> pro.stock < 1)
.map((pro)=> pro.nombre)


console.log(agotados)
