let notas = [5,10,8];
let soma = 0;

notas.forEach(nota =>{
    console.log(`A ${notas.indexOf(nota)+1}ª do aluno eh: ${nota}`)
    soma += nota;
})


console.log (`A media do aluno eh ${soma/notas.length}`)



