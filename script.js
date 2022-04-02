let numero = document.getElementById('numero');
let resultado = document.getElementById('resultado');
let tabela = document.getElementById('select');

let numeroEscrito = [];
function adicionar() {
    if(Number(numero.value) >= 1 && Number(numero.value) <= 100) {
        if(numeroEscrito.indexOf(Number(numero.value)) == -1) {
            let item = document.createElement('option');
            item.text = `Valor ${Number(numero.value)} adicionado.`;
            tabela.appendChild(item);
            resultado.innerHTML = '';
            numeroEscrito.push(Number(numero.value));
        } else {
            alert('Esse número já foi escrito, digite outro.')
        }
    } else {
        alert('[ERRO] Insira um número entre 1 e 100.');
    }
    numero.value = '';
    numero.focus();
}

function finalizar() {
    if(numeroEscrito == 0) {
        alert('[ERRO] Insira um número entre 1 a 100 para começar.');
    } else {
        resultado.innerHTML = '';
        numeroEscrito.sort();
        resultado.innerHTML += `Ao todo, temos ${numeroEscrito.length} número(s) cadastrado(s). <br><br>`
        resultado.innerHTML += `O maior valor informado foi ${numeroEscrito[numeroEscrito.length - 1]}. <br><br>`
        resultado.innerHTML += `O menor valor informado foi ${numeroEscrito[0]}. <br><br>`
        let soma = 0;
        for(let i=0; i<numeroEscrito.length; i++){
            soma += numeroEscrito[i];
        }
        resultado.innerHTML += `A média dos valores digitados é ${soma/numeroEscrito.length}.`

        numeroEscrito = [];
    }
}