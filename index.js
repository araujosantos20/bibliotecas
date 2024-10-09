const fs = require("fs");

const caminho = process.argv;
const link = caminho[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  contagemPorParagrafos(texto);
});

function contagemPorParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");
  const contagem = paragrafos.map((paragrafo) => {
    return verificarPalavrasDuplicadas(paragrafo);
  });
  console.log(contagem);
}

function limparPalavras(texto) {
  const palavra = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  return palavra;
}

// Função para capturar cada palavra e a quantidade que tem nela em cada parte do texto
function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // Agora vamos iterar os objetos que vão aparecer
  listaPalavras.forEach((palavra) => {
    if (palavra.length >= 3) {
      palavraLimpa = limparPalavras(palavra);
      resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
    }
  });
  return resultado;
}
