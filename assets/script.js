var jogador = null;
var vencedor = null;
var quadrados = document.getElementsByClassName(".quadrado");
var jogadorSelecionado = document.getElementById("jogador-selecionado");
var vencedorSelecionado = document.getElementById("vencedor-selecionado");

mudarJogador("X");

function escolherQuadrado(id) {
  if (vencedor !== null) {
    return;
  }

  let quadrado = document.getElementById(id);

  if (quadrado.innerHTML !== "-") {
    return;
  }

  quadrado.innerHTML = jogador;
  quadrado.style.color = "#000";

  if (jogador === "X") {
    jogador = "O";
  } else {
    jogador = "X";
  }

  mudarJogador(jogador);
  chegarVencedor();
}

function mudarJogador(valor) {
  jogador = valor;
  jogadorSelecionado.innerHTML = jogador;
}

function chegarVencedor() {
  let quadrado1 = document.getElementById("1");
  let quadrado2 = document.getElementById("2");
  let quadrado3 = document.getElementById("3");
  let quadrado4 = document.getElementById("4");
  let quadrado5 = document.getElementById("5");
  let quadrado6 = document.getElementById("6");
  let quadrado7 = document.getElementById("7");
  let quadrado8 = document.getElementById("8");
  let quadrado9 = document.getElementById("9");

  if (chegarSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
    return;
  }

  if (chegarSequencia(quadrado4, quadrado5, quadrado6)) {
    mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
    mudarVencedor(quadrado4);
    return;
  }

  if (chegarSequencia(quadrado7, quadrado8, quadrado9)) {
    mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
    mudarVencedor(quadrado7);
    return;
  }

  if (chegarSequencia(quadrado1, quadrado4, quadrado7)) {
    mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
    mudarVencedor(quadrado1);
    return;
  }

  if (chegarSequencia(quadrado2, quadrado5, quadrado8)) {
    mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
    mudarVencedor(quadrado2);
    return;
  }

  if (chegarSequencia(quadrado3, quadrado5, quadrado7)) {
    mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
    mudarVencedor(quadrado7);
    return;
  }

  if (chegarSequencia(quadrado3, quadrado6, quadrado9)) {
    mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
    mudarVencedor(quadrado3);
    return;
  }

  if (chegarSequencia(quadrado1, quadrado5, quadrado9)) {
    mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
    mudarVencedor(quadrado1);
    return;
  }

  if (chegarSequencia(quadrado1, quadrado2, quadrado3)) {
    mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
    mudarVencedor(quadrado1);
  }
}

function mudarVencedor(quadrado) {
  vencedor = quadrado.innerHTML;
  vencedorSelecionado.innerHTML = vencedor;
}

function mudarCorQuadrado(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = "#00ff00";
  quadrado2.style.background = "#00ff00";
  quadrado3.style.background = "#00ff00";
}

function chegarSequencia(quadrado1, quadrado2, quadrado3) {
  let eIgual = false;

  if (
    quadrado1.innerHTML !== "-" &&
    quadrado1.innerHTML === quadrado2.innerHTML &&
    quadrado2.innerHTML === quadrado3.innerHTML
  ) {
    if (quadrado1.innerHTML !== "-") {
      eIgual = true;
    }
  }

  return eIgual;
}

function reiniciar() {
  vencedor = null;
  vencedorSelecionado.innerHTML = "";

  for (let i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);
    quadrado.innerHTML = "-";
    quadrado.style.background = "#eee";
    quadrado.style.color = "#eee";
  }

  mudarJogador("X");
}
