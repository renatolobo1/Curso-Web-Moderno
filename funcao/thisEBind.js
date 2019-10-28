const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  // Conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) //Metodo para amarrar determinado objeto
falarDePessoa()
const falar2= pessoa.falar.bind(pessoa)
falar2()