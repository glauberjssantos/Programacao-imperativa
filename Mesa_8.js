function podeSubir(altura, vemAcompanhado){
    let podeSubir = false

if(altura >= 1.20 && altura <= 1.40 && vemAcompanhado == true){
    podeSubir = true
    console.log("Pode Subir")
}else{
    podeSubir = false
    console.log("Não Pode Subir")
}

}

function podeSubir(altura, vemAcompanhado){
    let podeSubir = false

if(altura <= 2.00 && altura >= 1.40) {
    podeSubir = true
    console.log("Pode Subir")
}else{
    podeSubir = false
    console.log("Não Pode Subir")
}

function podeSubir(altura, vemAcompanhado){
    let podeSubir = false

if(altura <= 2.00 && altura >= 1.40 && vemAcompanhado == true) {
    podeSubir = true
    console.log("Pode Subir")
}else{
    podeSubir = false
    console.log("Não Pode Subir")
}

}

function podeSubir(altura, vemAcompanhado){
    let podeSubir = false

if(altura <= 2.00 && altura <= 1.20) {
    podeSubir = true
    console.log("Não Pode Subir")
}else{
    podeSubir = false
    console.log("Pode Subir")
}

}

console.log(podeSubir(1.40, true))