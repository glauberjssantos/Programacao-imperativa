function prato(op, tempo){

if (op != 1 && op != 2 && op != 3 && op != 4 && op != 5){
    console.log("Prato inexistente")
}else if(op == 1 && tempo >= 30) {
    console.log("Pipoca - Kabummm")
}else if(op == 1 && tempo >= 20){
    console.log("Pipoca - A comida queimou")
}else if(op == 1 && tempo < 10){
    console.log("Pipoca - Tempo insuficiente") 
}else if (op == 1 && tempo == 10){
    console.log("Pipoca - Prato pronto, bom apetite!!!")
}else if(op == 2 && tempo >= 24) {
    console.log("Macarrão - Kabummm")
}else if(op == 2 && tempo >= 16){
    console.log("Macarrão - A comida queimou")
}else if(op == 2 && tempo < 8){
    console.log("Macarrão - Tempo insuficiente") 
}else if(op == 1 && tempo == 8){
    console.log("Macarrão - Prato pronto, bom apetite!!!")
}else if(op == 3 && tempo >= 45) {
    console.log("carne - Kabummm")
}else if(op == 3 && tempo >= 30){
    console.log("carne - A comida queimou")
}else if(op == 3 && tempo < 15){
    console.log("carne - Tempo insuficiente") 
}else if(op == 3 && tempo == 15){
    console.log("carne - Prato pronto, bom apetite!!!")
}else if(op == 4 && tempo >= 36) {
    console.log("Feijão - Kabummm")
}else if(op == 4 && tempo >= 24){
    console.log("Feijão - A comida queimou")
}else if(op == 4 && tempo < 12){
    console.log("Feijão - Tempo insuficiente") 
}else if(op == 4 && tempo == 12){
    console.log("Feijão - Prato pronto, bom apetite!!!")
}else if(op == 5 && tempo >= 24) {
    console.log("Brigadeiro - Kabummm")
}else if(op == 5 && tempo >= 16){
    console.log("Brigadeiro - A comida queimou")
}else if(op == 5 && tempo < 8){
    console.log("Brigadeiro - Tempo insuficiente") 
}else if (op == 5 && tempo == 8){
    console.log("Brigadeiro - Prato pronto, bom apetite!!!")
}


}


console.log(prato(2, 60))