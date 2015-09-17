/*!
 * cawt.js
 *
 * Copyright 2015 AGES
 **/

function quiz() {

	var resposta = localStorage.getItem("resposta")
	var valorPonto = 10;
	var score = localStorage.getItem("scoreAtualizado", score);
	
	if (score == null)
		score = 0
	else
		score = score;
	
	console.log(resposta + " " + score)
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
		valorResposta = 13
		break;
	}

	if (valorResposta == respostaCerta) {
		score = parseInt(score) + parseInt(valorPonto);
		document.getElementById('pontos').innerHTML = "Voce acertou, é uma sequencia de " + resposta;
		document.getElementById('valorPontos').innerHTML = score;
		document.getElementById('pontos').style.color = "blue";
		localStorage.setItem("scoreAtualizado", score);
	} else {
		document.getElementById('pontos').innerHTML = "Voce ERROU.<br>  Dica essa sequencia é " + resposta;
				
	}

}


function perguntas() {
	var p = getRandomInt(4,1);
	
	var serie;
	var resposta;
	var seriePi = new Array();
	var serieFibonacci = new Array();
	var serieSquares = new Array();
	var seriePrimes = new Array();
	
	
	var seriePi = [ 3, 1, 4, 1, 5 ]; // pi
	var serieFibonacci = [ 1, 1, 2, 3, 5 ]; // Fibonacci
	var serieSquares = [ 1, 2, 4, 8, 16 ]; // Squares
	var seriePrimes = [ 2, 3, 5, 7, 11  ]; // Squares

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

	document.getElementById('pergunta').innerHTML = serie.toString() + "...";

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
