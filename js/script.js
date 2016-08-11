/* DEFININDO VARIÁVEIS */
var casas        = ['casa-1','casa-2','casa-3','casa-4','casa-5','casa-6','casa-7','casa-8','casa-9'];
var casasUsuario = [];
var casasPc      = [];

var corUsuario = "";
var corPC      = "";

/* INICIANDO O JOGO */
$("#iniciarJogo").click(function(){
   if($("#escolheu").val() == 'nao'){
      if($("#corUsuario").val() === $("#corPc").val()){
         alert("ESCOLHA CORES DIFERENTES!");
      }else{
         corUsuario = $("#corUsuario").val();
         corPC = $("#corPc").val();
         $("#escolheu").val("sim");
      }
   }else{
      alert("O JOGO JÁ ESTÁ ACONTECENDO!");
   }
});
/* REINICIAR JOGO */
$("#reiniciarJogo").click(function(){
   casas = [];
   casas        = ['casa-1','casa-2','casa-3','casa-4','casa-5','casa-6','casa-7','casa-8','casa-9'];
   casasUsuario = [];
   casasPc      = [];

   $(".casa").css("background","");
   $("#acabou").val("nao");

});

/* JOGANDO */
$(".casa").click(function(){
   if($("#escolheu").val() == "sim" && $("#acabou").val() == "nao"){
      if(acaoUsuario($(this))){
         if(!verifica(casasUsuario,"usuario")){
            acaoPc(); 
         }
      }
   }else{
      alert("O JOGO ACABOU OU NAO FOI INICIADO");
   }
});
/* FUNÇÃO DA AÇÃO DO USUÁRIO */
function acaoUsuario(casaClicada){
   var indiceCasaClicada   = casas.indexOf(casaClicada.attr('id'));
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
/* FUNÇÃO DA AÇÃO DO PC */
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
   verifica(casasPc,"pc");
}

/* FUNÇÃO PARA VERIFICAR SE GANHOU OU NÃO */
function verifica(arrayCasas,jogador){
   /* DEFINIDO A MENSAGEM DE ACORDO COM O JOGADOR */
   var msg = "VOCE PERDEU";
   if(jogador == 'usuario'){
      msg = "VOCÊ GANHOU!";
   }
   /* VERIFICAÇÕES DAS CASAS DO JOGADOR PARA VER SE ESTÁ EM ALGUM CASO QUE GANHA */
   if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-2') != -1 && arrayCasas.indexOf('casa-3') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-4') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-6') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-7') != -1 && arrayCasas.indexOf('casa-8') != -1 && arrayCasas.indexOf('casa-9') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-4') != -1 && arrayCasas.indexOf('casa-7') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-2') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-8') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-6') != -1 && arrayCasas.indexOf('casa-9') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-9') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-5') != -1 && arrayCasas.indexOf('casa-7') != -1){
      alert(msg);
      $("#acabou").val("sim");
      return true;
   }
   return false;
}


