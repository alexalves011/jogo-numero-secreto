alert('Seja bem-vindo(a) ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto); // Apenas para testes

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = parseInt(prompt('Escolha um número entre 1 e 100'));

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);
