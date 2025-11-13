/*
const = constante, não se alteram na execução do programa
let = pode, ou não pode ser alterado duante a execuçã do programa
var = desuso, variavel global

Tipos de dados:
String = textos
Numbers = numeros, inteiro ou real
Boolean = lógico, verdadeiro ou falso, true or false
Null = nulo ou vazio
Object = objeto, pode agrupar diversas informações
Array = vetores,
*/
const nome = "Nicolle"
let idade = 17
let salario = 1500
let casado = false
let conjugue = null

const usuario = {
    nome:"Nicolle",
    idade:17,
    casado: false,
    conjuge: null
}
 
let frutas = ["Maça", "Banana", "Laranja"]
 
console.log(usuario.nome)
 
console.log(frutas[1])
 
let meuArray= [{
    nome:"Lucas",
    idade: 18
 
} 
]
console.log(meuArray[1])

let nome1 = prompt("Digite o seu nome:")
document.getElementById('variavel').innerHTML = `Seja bem-vindo ${nome1}`

/*
Operadores: +, -, *, /, %

Operadores de Comparação:

> maior que
< menor que
>= maior ou igual que
<= menor ou igual que
== igual a (só compara valor)
=== igual a (valor e tipo)
!= retorna 'true' se o valor E o tipo forem diferentes
!== retornar 'true' se valor OU o tipo forem diferentes

*/
let soma = 1+1
console.log(soma)

let sub = 1-1
console.log(sub)

let resto = 5 % 2
console.log(resto)

console.log(22>18)
console.log(2<=0)

let a ="22"
let b = 22
console.log (a != b)

console.log(a===b)
console.log(a==b)

/*
Condicionais
IF - Se
ELSE IF - Senao se
ELSE - Senao
*/

let idade3 = 59

if (idade3 >=60){
    console.log("Idoso")
} else if(idade3>=18){
    console.log ("Adulto")
} else if (idade3>=14){
    console.log("Jovem")
} else {
    console.log ("Criança")
}

