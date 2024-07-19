
const nome = "Jorge";
const idade = 9;
const peso = 43;
const altura = 1.40;

function calculoIMC(peso, altura) {
    const resultado = peso/(altura*altura);
    return resultado;
}

function classificacaoIMC(resultadoIMC) {
    if (resultadoIMC < 16.9) return -3;
    else if (resultadoIMC >= 17 && resultadoIMC <= 18.4) return -2;
    else if (resultadoIMC >= 18.5 && resultadoIMC <= 24.9) return -1;
    else if (resultadoIMC >= 25 && resultadoIMC <= 29.9) return 0;
    else if (resultadoIMC >= 30 && resultadoIMC <= 34.9) return 1;
    else if (resultadoIMC >= 35 && resultadoIMC <= 40) return 2;
    else return 3;
}

function definicaoIMC(imcNumero) {
    if (imcNumero === -3) console.log("Muito abaixo do peso");
    else if (imcNumero === -2) console.log("Abaixo do peso");
    else if (imcNumero === -1) console.log("Peso normal");
    else if (imcNumero === 0) console.log("Acima do peso");
    else if (imcNumero === 1) console.log("Pesado");
    else if (imcNumero === 2) console.log("Muito Pesado!");
    else return console.log("Extremamente pesado!");
}
function dados(nome, idade, IMC){
    console.log("O nome é:",nome,"A idade é:",idade,"O peso é:",IMC)
}



const resposta = calculoIMC(peso, altura);

console.log(resposta)

const imcNumero = classificacaoIMC(resposta);

definicaoIMC(imcNumero);

dados(nome, idade, calculoIMC(peso, altura))
