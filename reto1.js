// let valores = [12, 5, 8, 20, 3, 15]
// for (let i = 0; i < valores.length; i++) {
//     if (valores[i]>= 10 ) {
//         console.log("El numero ", valores[i], " es un numero grande")
//     }else {
//        console.log("El numero ", valores[i], " es un numero pequeno") 
//     }
    
// }

// const ventas = [150, 80, 220, 50, 310, 95];
// let total = 0;
// let mayor100 = 0;

// for (let i = 0; i < ventas.length; i++) {
//     total = total + ventas[i]
//     if (ventas[i] > 100) {
//         mayor100++
//     }
// }

// const promedio = total/ventas.length

// console.log(`El total es de ${total}, el promedio es de ${promedio} y ${mayor100} ventas fueron mayores a 100`)

// function calcularPromedio(lista){
//     let total = 0;
//     for (let i = 0; i < lista.length; i++) {
//         total = total + lista[i]
//     }
//     return total/lista.length
// }
// const notasMatematicas = [90, 80, 100, 70];
// const notasHistoria = [60, 75, 85];
// console.log(`El promedio de Matematicas es ${calcularPromedio(notasMatematicas)}, y el promedio de historia es ${calcularPromedio(notasHistoria)}`)

const alumnos = [
  { nombre: "Carlos", nota: 85 },
  { nombre: "Daniela", nota: 62 },
  { nombre: "Andrés", nota: 90 },
  { nombre: "Beatriz", nota: 55 },
  { nombre: "Elena", nota: 78 }
];

function generarReporte(listaAlumnos){
    let totalAprobados = 0;
    for (let i = 0; i < listaAlumnos.length; i++) {
        if (listaAlumnos[i].nota >= 70) {
            console.log(`${listaAlumnos[i].nombre} ha APROBADO con una nota de: ${listaAlumnos[i].nota}`)
            totalAprobados++
        }else{
            console.log(`${listaAlumnos[i].nombre} ha REPROBADO con una nota de: ${listaAlumnos[i].nota}`)
        }
        
    }
    return totalAprobados
}

console.log(generarReporte(alumnos))