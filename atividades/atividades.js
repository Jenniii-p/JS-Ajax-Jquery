// Exibir uma mensagem ao carregar minha página
alert('Bem vindo a minha página de exercícios!');

function exibirMensagem() {
    alert('Você clicou no botão');
    console.log('exibirMensagem');
}
// Exercício 3 - calculadora

function realizarCalculos() {
    let numero1 = parseInt(prompt('Informe o primeiro valor'));
    let numero2 = parseInt(prompt('Informe o segundo valor'));
    somar(numero1, numero2);
    subtrair(numero1, numero2);
    dividir(numero1, numero2);
    multiplicar(numero1, numero2);
}
function somar(valor1, valor2) {
    //operação
    let resultado = valor1 + valor2
    //exibir no console
    console.log('O resultado da soma entre ' + valor1 + ' e ' + valor2 + ' é ' + resultado);
}

function subtrair(valor1, valor2) {
    //operação
    let resultado = valor1 - valor2
    //exibir no console
    console.log('O resultado da subtração entre ' + valor1 + ' e ' + valor2 + ' é ' + resultado);
}

function dividir(valor1, valor2) {
    //operação
    let resultado = valor1 / valor2
    //exibir no console
    console.log('O resultado da divisão entre ' + valor1 + ' e ' + valor2 + ' é ' + resultado);
}

function multiplicar(valor1, valor2) {
    //operação
    let resultado = valor1 * valor2
    //exibir no console
    console.log('O resultado da multiplicação entre ' + valor1 + ' e ' + valor2 + ' é ' + resultado);
}

// Calculadora funcional
var valor1 = '';
var valor2 = '';
var operacao = '';
function guardarNumero(valor) {
    if (!operacao) {
        valor1 += valor;
        console.log(valor1);
    } else if (operacao) {
        valor2 += valor;
        console.log(valor2);
        if (operacao == '=') {
            calcular()
        }
    }
}
function guardarOperacao(operacaoE) {
    operacao = operacaoE;
}

function limpar() {
    valor1 = '';
    valor2 = '';
    operacao = '';
}

function calcular() {
    valor1 = parseFloat(valor1);
    valor2 = parseFloat(valor2);
    let resultado;
    if (operacao == '+') {
        resultado = valor1 + valor2;
        console.log(resultado);
    } else if (operacao == '-') {
        resultado = valor1 - valor2;
        console.log(resultado);
    } else if (operacao == '*') {
        resultado = valor1 * valor2;
        console.log(resultado);
    } else if (operacao == '/') {
        resultado = valor1 / valor2;
        console.log(resultado);
    }
    alert('O resultado é: '+resultado);
    limpar();
}

// Exercício Verificar se o usuário está dormindo pouco

var horasDormidas = 0;
function guardarHoras(horas) {
    horasDormidas = horas;
    console.log(horasDormidas);
}