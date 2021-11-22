const alicia = [23, 69, 32, 50, 50, 52];
const bob = [12, 67, 43, 50, 55, 51];

let pontosBob = 0;
let pontosAlicia = 0;
let soma = 0;

function encontrarGanhador(a, b) {
    let qtd = a.length; 
    for (let i = 0; i < qtd; i++ ){
        if (a[i] < b[i]){
             (pontosBob[i] = 1);
            (console.log("Rodada: "+ i +" - Pontos Bob: "+ (pontosBob = pontosBob+1)));
        }else if (b[i] < a[i]) {
             (pontosAlicia[i] = 1);
             (console.log("Rodada: "+ i +" - Pontos Alícia: "+(pontosAlicia = pontosAlicia+1)));
        }else{
            (pontosAlicia[i] = 0);
            (pontosBob[i] = 0);
            (console.log("Rodada: "+ i +" - Empate: Ninguém pontuou "));
        }
    }

        if (pontosBob > pontosAlicia) {
            console.log("Com " + pontosBob +" Pontos Bob é o campeão")
        }else if (pontosAlicia > pontosBob) {
            console.log("Com " + pontosAlicia +" Pontos Alícia é a campeã")
        }else {
            console.log("Competição Empatada !!!")
        }
}

console.log(encontrarGanhador(alicia, bob));