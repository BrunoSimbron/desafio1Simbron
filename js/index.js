console.log("Inicio de tablas")
console.log("Tabla uno")
// Tabla del 7
let tablaA = 7
for (let index = 1; index < 11; index++) {
    let resultado = tablaA * index
    console.log("Resultado: " + index + " - " + resultado)
}

console.log("Tabla dos")
// Tabla del 8
let tablaB = 8
for (let index = 1; index < 11; index++) {
    let resultado = tablaB * index
    console.log("Resultado: " + index + " - " + resultado)
}

console.log("Tabla tres")
// Tabla del 9
let tablaC = 9
for (let index = 1; index < 11; index++) {
    let resultado = tablaC * index
    console.log("Resultado: " + index + " - " + resultado)
}
console.log("Fin de las tablas")

// Inicio con While
console.log("Inicio ejemplo While")

let entrada = prompt("Ingresar nombre de superhero")
while (entrada !== "ESC") {
    switch (entrada) {
        case "spiderman":
            alert("CORRECTO spiderman")
            break;
        case "batman":
            alert("CORRECTO batman")
            break;
        case "ironman":
            alert("CORRECTO ironman")
            break;
            case "superman":
                alert("CORRECTO superman")
                break;
            case "hulk":
                alert("CORRECTO hulk")
                break;
            case "catwoman":
                alert("CORRECTO catwoman")
                break;
        default:
            alert("¿Es eso un superhero?")
            break;
    }
    entrada = prompt("INGRESAR SUPERHERO NUEVAMENTE")
}
console.log("Fin ejemplo While")
// Fin del While

console.log("Inicio clave")

let palabra = prompt("Ingresar palabra 'CrazyMan'")

while (palabra !== "CrazyMan") {
    palabra = prompt("Ingresar pablabra nuevamente")
}

console.log("Fin clave")