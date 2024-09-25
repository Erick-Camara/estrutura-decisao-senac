//crie um algoritmo que solicite um número e
//informe se o número é PAR ou IMPAR

const prompt = require(`prompt-sync`)();

const numero = parseInt(prompt(`Digite um número: `));

if (numero % 2 == 0) {
    console.log(`O número digitado foi ${numero} e esse número é PAR`);
} else {
    console.log(`O número digitado foi ${numero} e esse número é IMPAR`);
}
