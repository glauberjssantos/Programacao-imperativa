 //let filmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"]

 //let filmes2 = ["Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"]

// //Exercício 1

//  function filmesMaisculo (array){
//     for (let i = 0; i < array.length; i++) {
//       array[i] = array[i].toUpperCase();
//     }
//     return array
// }

//  console.log(filmesMaisculo(filmes))


// //Exercício 2


// function passagemDeElementos(array1, array2) {
//   let invalido = array2.pop();
//   let qtd = array2.length;

//   for (let i = 0; i < qtd; i++) {
//       array1.push(array2.pop().toUpperCase())
//   }

//   console.log("esse filme é invalido ", invalido);
//   return array1
// }

// console.log(passagemDeElementos(filmes, filmes2))


// Exercício 3

// const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
// const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

// function compararClassificacoes(asia, europa) {
//     let comparacoesAsiaEuropa = [];
//     for (let i = 0; i < asia.length; i++) {
//         comparacoesAsiaEuropa[i] = asia[i] === europa[i];
//     }
//     return comparacoesAsiaEuropa;
// }

// console.log( compararClassificacoes(asiaScores, euroScores) );