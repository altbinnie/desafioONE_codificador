let textoOg = document.getElementById("textoOriginal").value.toLowerCase();
function criptografar(){
  let mensagem = document.getElementById("textoOriginal").value.toLowerCase();
  let codigoR = codificar(mensagem);
  exibirRetorno(codigoR);
}
function descriptografar(){
    let codigo = document.getElementById("textoOriginal").value.toLowerCase();
    let mensagemR = traduzir(codigo);
    exibirRetorno(mensagemR);
}
function codificar(entradaNormal){
  const criptoMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  if (temdiferente(entradaNormal)) {
    alert("ERRO nao use acentos ou caracteres especiais");
    return "TEXTO INVALIDO";
  }

  let codigo = entradaNormal.split('').map(letra => criptoMap[letra] || letra).join('');
  return codigo;

}
function traduzir(entradaCodigo) {
  const descriptoMap = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };

  if (temdiferente(entradaCodigo)) {
    alert("ERRO essa mensagem nao pode ser traduzida. nao reconhece acentos e pontuaçao");
    return "TEXTO INVALIDO";
  }

  let mensagem = entradaCodigo;

  for (let palavraCripto in descriptoMap) {
    mensagem = mensagem.split(palavraCripto).join(descriptoMap[palavraCripto]);
  }

  return mensagem;
}
function temdiferente(input) {
  // tem chars especiais
  const accentuatedRegex = /[áéíóúãõâêîôûàèìòùäëïöüç!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/;
  return accentuatedRegex.test(input);
}

function exibirRetorno(retorno) {
    let campo = document.getElementById("textoCripto");
    campo.value = retorno;
}
//exibirRetorno('oiiie teste');
function copiarTexto() {
    let texto = document.getElementById("textoCripto");
    let textoCriptografado = texto.value;
  
    navigator.clipboard.writeText(textoCriptografado)
      .then(() => {
        console.log("Texto copiado para a área de transferência!");
      })
      .catch(error => {
        console.error("Erro ao copiar texto: " + error);
      });
  }
  