/* ------ DEFININDO VARIÁVEIS ------ */
var casas        = ['casa-1','casa-2','casa-3','casa-4','casa-5','casa-6','casa-7','casa-8','casa-9'];
var casasUsuario = [];
var casasPc      = [];

var corUsuario = "";
var corPC      = "";

var pontosUsuario = 0;
var pontosPc      = 0;

/* ------ INICIANDO O JOGO ------ */
$("#iniciarJogo").click(function(){
   if($("#escolheu").val() == 'nao'){
      if($("#corUsuario").val() === $("#corPc").val()){
         alert("ESCOLHA CORES DIFERENTES!");
      }else{
         corUsuario = $("#corUsuario").val();
         corPC = $("#corPc").val();
         $("#escolheu").val("sim");
        $("#inicio-jogo").css("visibility","hidden");
      }
   }else{
      alert("O JOGO JÁ ESTÁ ACONTECENDO!");
   }
});
/*  ------ REINICIAR JOGO ------ */
$("#reiniciarJogo").click(function(){
   /* RESETANDO VARIÁVEIS */
   casas = [];
   casas        = ['casa-1','casa-2','casa-3','casa-4','casa-5','casa-6','casa-7','casa-8','casa-9'];
   casasUsuario = [];
   casasPc      = [];
   /* LIMPANDO AS CASAS MARCADAS */
   $(".casa").css("background","");
   /* DEFININDO QUE O JOGO NÃO ACABOU */
   $("#acabou").val("nao");
   $("#alguem-ganhou").val("nao");
   $("#mensagem-jogo").css("visibility","hidden");

});

/* ------ JOGANDO ------ */
$(".casa").click(function(){
   /* AÇÕES SÓ ACONTECEM SE O USUARIO ESCOLHEU AS CORES E O JOGO NAO ACABOU */
   if($("#escolheu").val() == "sim"){
      if($("#acabou").val() == "sim"){
         alert("O JOGO ACABOU");
      }else{
         if(acaoUsuario($(this))){
            /* SE CONSEGUIU REALIZAR A ACAO DO USUARIO FAZ A VERIFICAÇÃO PARA VER SE GANHOU*/
            if(!verifica(casasUsuario,"usuario")){
               /* SE RETORNAR FALSE (NÃO GANHOU), FAZ A AÇÃO DO PC */
               acaoPc();
            }else{
               pontosUsuario++;
               $("#ponto-usuario").html(pontosUsuario);
            }
         }
         if($("#alguem-ganhou").val()=='nao' && casasUsuario.length == 5){
            $("#mensagem-jogo").css("visibility","visible");
            $("#msg-status").html("O JOGO ACABOU SEM MAIS MOVIMENTOS");
            $("#acabou").val("sim");
         }
      }
   }else{
      alert("O JOGO NAO FOI INICIADO");
   }
});

/* ------ FUNÇÃO DA AÇÃO DO USUÁRIO ------ */
function acaoUsuario(casaClicada){
   var indiceCasaClicada   = casas.indexOf(casaClicada.attr('id'));
   /* VERIFICANDO SE A CASA CLICADA NÃO EXISTE NAS CASAS DISPONIVEIS (SE NÃO EXISTE É PQ JA FOI MARCADA) */
   if(indiceCasaClicada    == -1){
      alert("Casa já foi marcada");
      return false;
   }

   /* PINTA DE CASA DO USUARIO */
   casaClicada.css('background',corUsuario);
   /* INSERINDO NO ARRAY DE CASAS CLICADAS DO USUÁRIO */
   casasUsuario.push(casas[indiceCasaClicada]);
   /* RETIRANDO A CASA PINTADA DO ARRAY DE CASAS DISPONIVEIS */
   casas.splice(indiceCasaClicada,1);
   return true;
}
/*  ------ FUNÇÃO DA AÇÃO DO PC ------ */
function acaoPc(){
   /* VERIFICANDO QUAIS CASAS ESTAO LIVRES */
   var qtdCasasDisponiveis = casas.length;
   /* GERANDO CASA ALEATORIA A PARTIR DA QTD DE DISPONOIVEIS */
   var casaAleatoria       = Math.floor(Math.random() * qtdCasasDisponiveis);
   /* PINTANDO A CASA ALEATORIA ESCOLHIDA*/
   $("#"+casas[casaAleatoria]).css("background",corPC);
   /* INSERINDO NO ARRAY DE CASAS MARCADAS PELO PC */
   casasPc.push(casas[casaAleatoria]);
   /* RETIRANDO A CASA PINTADA DO ARRAY DE CASAS DISPONIVEIS */
   casas.splice(casaAleatoria,1);
   /* VERIFICAÇÃO SE GANHOU */
   if(verifica(casasPc,"pc")){
      pontosPc++;
      $("#ponto-pc").html(pontosPc);
   }
}

/* ------ FUNÇÃO PARA VERIFICAR SE GANHOU OU NÃO ------ */
function verifica(arrayCasas,jogador){
   /* DEFINIDO A MENSAGEM DE ACORDO COM O JOGADOR */
   var msg = "";
   if(jogador == 'usuario'){
      msg = "VOCÊ GANHOU!";
   }else{
      msg = "VOCE PERDEU";
   }
   /* VERIFICAÇÕES DAS CASAS DO JOGADOR PARA VER SE ESTÁ EM ALGUM CASO QUE GANHA */
   if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-2') != -1 && arrayCasas.indexOf('casa-3') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-4') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-6') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-7') != -1 && arrayCasas.indexOf('casa-8') != -1 && arrayCasas.indexOf('casa-9') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-4') != -1 && arrayCasas.indexOf('casa-7') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-2') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-8') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-6') != -1 && arrayCasas.indexOf('casa-9') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-9') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-7') != -1){
      $("#mensagem-jogo").css("visibility","visible");
      $("#msg-status").html(msg);
      $("#acabou").val("sim");
      $("#alguem-ganhou").val("sim");
      return true;
   }
   return false;
}


