const aluno = require ('./Micro-1')

let listaAluno = []

for (let i = 0; i < aluno.length; i++) {
    listaAluno.push([aluno[i].nome, aluno[i].faltas, aluno[i].notas]); 
}

// console.log(listaAluno)

module.exports = listaAluno;
