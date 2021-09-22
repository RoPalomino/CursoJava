const nombre1 = 'rosalia'
const nombre2 = 'gonzalo'
const nombre3 = 'dante'

let nombreDinamico = prompt('¿Cuál es tu nombre?')
let hora = 0

nombreDinamico = nombreDinamico.toLowerCase()

if (nombreDinamico === nombre1 || nombreDinamico === nombre2 || nombreDinamico === nombre3){
    console.log (`Ya te atiende el Doctor, ${nombreDinamico} `)

    hora = Number(prompt('¿A que hora tenes turno?'))

    if (hora >= 1){
        if (hora <= 9){
            console.log ('No tenemos turnos programados en ese horario')
        } else if (hora <= 14) {
            console.log ('Pasa por el consultorio de la derecha')
        } else if (hora >= 15) {
            console.log ('Pasa por el consultorio de la izquierda')
        }
        else {
            console.log ('Aun no llego el doctor, te pido que aguardes en la sala de espera')
        }
    }

} else {
    console.log (`No tenes ningun turno programado, ${nombreDinamico} `)
}
