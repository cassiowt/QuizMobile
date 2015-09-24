/*!
 * script.js: Script para o Jogo das Sequencias.
 * Funções para incluir as sequencias na página e validar as respostas
 * @autor Cássio Trindade
 * @date Setembro/2015
 * @version 0.1.0
 * 
 * Copyright 2015 AGES
 **/

/*!
 *  Função perguntas() é responsável por imprimir as perguntas na pagina gravar a resposta na memória.
 *  
 *  Temos uma conjunto de series finitas que são escolidas atraves de um numero randomico,
 *  passado esse para o Switch Case é escolida a sequencia a ser impressa na tela.
 *  
 */

function perguntas() {
	document.getElementById('resposta').value = "";
	document.getElementById('resultado').innerHTML = "";
	var p = getRandomInt(5, 0);

	var serie;
	var resposta;

	var seriePi = new Array();
	var serieFibonacci = new Array();
	var serieSquares = new Array();
	var seriePrimes = new Array();

	var seriePi = [ 3, 1, 4, 1, 5, " " ]; // pi
	var serieFibonacci = [ 1, 1, 2, 3, 5, " " ]; // Fibonacci
	var serieSquares = [ 1, 2, 4, 8, 16, " " ]; // Squares
	var seriePrimes = [ 2, 3, " ", 7, 11 ]; // Prime

	switch (p) {
	case 1:
		serie = seriePi;
		localStorage.setItem("resposta", 'PI');
		break;
	case 2:
		serie = serieFibonacci;
		localStorage.setItem("resposta", 'Fibonacci');
		break;
	case 3:
		serie = serieSquares;
		localStorage.setItem("resposta", 'Squares');
		break;
	case 4:
		serie = seriePrimes;
		localStorage.setItem("resposta", 'Primes');
		break;
	}

	document.getElementById('pergunta').innerHTML = serie.toString().replace(
			" ", "...");

}

/*
 * ! Função quiz() é responsável por validar as pespostas.
 * 
 * Busca na variavel "resposta" qual é a que foi inputada na pagina html e
 * utiliza um Switch Case para validar a resposta orreta.
 * 
 * A cada resposta certa é adicionado 10 pontos no Score do jogo, Pontuação
 * fixa. que é armazenada na variável "scoreAtualizado".
 * 
 * Quando o usuario acerta é impresso na pagina uma mensagem de sucesso com o
 * nome da sequencia: "Voce acertou. Sequencia SEUENCIA", com a cora AZUL.
 * Quando o usuario erra é impresso na pagina uma mensagem de erro com uma dica
 * da sequencia: "Voce ERROU.<br> Dica: SEUENCIA", com a cor VERMELHA.
 * 
 */
function quiz() {

	var resposta = localStorage.getItem("resposta")

	var valorPonto = 10;
	var score = localStorage.getItem("scoreAtualizado", score);

	if (score == null)
		score = 0
	else
		score = score;

	var respostaCerta = document.getElementById('resposta').value;

	switch (resposta) {
	case 'PI':
		valorResposta = 9;
		break;
	case 'Fibonacci':
		valorResposta = 8;
		break;
	case 'Squares':
		valorResposta = 32;
		break;
	case 'Primes':
		valorResposta = 5
		break;
	}
	if (valorResposta == respostaCerta) {
		// DIGITEM AS LINHAS ABAIXO
		score = parseInt(score) + parseInt(valorPonto);
		document.getElementById('valorPontos').innerHTML = score;
		// *******

		document.getElementById('resultado').innerHTML = "Voce acertou.<br> Sequencia "
				+ resposta;
		document.getElementById('resultado').style.color = "blue";

		// DIGITEM A LINHA ABAIXO
		localStorage.setItem("scoreAtualizado", score);

	} else {
		document.getElementById('resultado').innerHTML = "Voce ERROU.<br>  Dica: "
				+ resposta;
		document.getElementById('resultado').style.color = "red";
	}
}


/*
 * ! Função zerarPontuacao() apaga todos os campos da tela e limpa da memoria o
 * score de pontuação.
 */
function zerarPontuacao() {
localStorage.setItem("scoreAtualizado", 0);
document.getElementById('valorPontos').innerHTML = "0";
document.getElementById('resposta').value = "";
document.getElementById('resultado').innerHTML = "";

}

/*
 * ! Função getRandomInt() gera um numero randomico no intervalo dos parametros
 * inteiros min: minimo e max: maximo.
 */
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
