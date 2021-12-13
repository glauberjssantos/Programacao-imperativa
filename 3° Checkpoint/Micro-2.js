
const listaAluno = require ('./Micro-2-estudantes')

// const estudante1 = listaAluno[0]

let curso = {
    nome: 'Programação Imperativa',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaAlunos: [],
    adicionarAluno: function() {
       this.listaAlunos.push(listaAluno[0], listaAluno[1], listaAluno[2], listaAluno[3], listaAluno[4])
    },   

    aprovarAluno: function() {
        const media = listaAluno.calcularMedia(listaAluno[0])
        if (listaAluno.faltas < this.faltasMaximas && media >= this.notaAprovacao) {
        return true
        }else if(listaAluno.faltas == this.faltasMaximas && media >= this.notaAprovacao * 1.1){
        return true
        }else{
        return false
        }
    },  
    
    listarAprovados: function(){
        let listaDeAprovados = [];
        this.listaEstudantes.forEach(aluno => {
           listaDeAprovados.push(this.aprovarAluno(aluno))
        })
        return listaDeAprovados
    }
   
}
