const fs = require("fs");

const caminho = process.argv;
const link = caminho[2];

fs.readFile(link, "utf-8", (erro, texto) => {
  verificarPalavrasDuplicadas(texto);
});

// Função para capturar cada palavra e a quantidade que tem nela em cada parte do texto
function verificarPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};
  // Agora vamos iterar os objetos que vão aparecer
  listaPalavras.forEach((palavra) => {
    resultado[palavra] = (resultado[palavra] || 0) + 1;
  });
  console.log(resultado);
}
