class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
        }

        exibirInfo(){
            console.log(`Nome: ${this.nome}`);
           console.log(`Idade: ${this.idade}`);
            console.log(`Profissao: ${this.profissao}`)

        }
    
}

var dennis = new Pessoa("Dennis", 30, "QA");
dennis.exibirInfo()