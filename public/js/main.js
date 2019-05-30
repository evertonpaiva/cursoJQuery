var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");

tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");

campo.on("input", function () {
   var conteudo = campo.val();

   var qtdPalavras = conteudo.split(/\S+/).length - 1;
   $("#contador-palavras").text(qtdPalavras);

   var qtdCaracteres = conteudo.length;
   $("#contador-caracteres").text(qtdCaracteres);
});

var campoTempoDigitacao = $("#tempo-digitacao");
var tempoRestante = campoTempoDigitacao.text();

campo.one("focus", function () {
    var cronometroID = setInterval(function () {
        tempoRestante--;
        console.log(tempoRestante);
        campoTempoDigitacao.text(tempoRestante);

        if(tempoRestante < 1) {
            campo.attr("disabled", true);
            clearInterval(cronometroID);
        }

    }, 1000); //1 segundo
});