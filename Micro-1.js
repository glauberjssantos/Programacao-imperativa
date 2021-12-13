const AlunosImport = require ('./alunos');
const { nome } = require('./curso');

function ListaAlunos(nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = () => {
        const somaMedia = this.notas.reduce((acumulador, nota) => acumulador + nota)
        const tNotas = this.notas.length;
        const media = somaMedia / tNotas;
 
        return media;
     }
     this.adicionarFalta = () => {
         return faltas = this.faltas++

}
}

let aluno = [];

for (let i = 0; i < AlunosImport.length; i++) {
    aluno.push(new ListaAlunos(AlunosImport[i].nome, AlunosImport[i].faltas, AlunosImport[i].notas));
}

module.exports = aluno



