let notas = [5,10,8];
let soma = 0;

notas.forEach(nota =>{
    console.log(`A ${notas.indexOf(nota)+1}ª do aluno eh: ${nota}`)
    soma += nota;
})

let media = soma/notas.length;
console.log (`A media do aluno eh ${media}`)

if(media > 6.9){
    console.log("APROVADO")
} else {
    console.log("REPROVADO")
}
