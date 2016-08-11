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

function acaoUsuario(casaClicada){
   var indiceCasaClicada   = casas.indexOf(casaClicada.attr('id'));
   if(indiceCasaClicada    == -1){
      alert("Casa já foi marcada");
      return false;
   }

   /* PINTA DE VERMELHO */
   casaClicada.css('background',corUsuario);
   /* INSERINDO NO ARRAY DE CASAS CLICADAS DO USUÁRIO */
   casasUsuario.push(casas[indiceCasaClicada]);
   casas.splice(indiceCasaClicada,1);
   return true;
}

function acaoPc(){
   var qtdCasasDisponiveis = casas.length;
   var casaAleatoria       = Math.floor(Math.random() * qtdCasasDisponiveis);
   $("#"+casas[casaAleatoria]).css("background",corPC);
   casasPc.push(casas[casaAleatoria]);
   casas.splice(casaAleatoria,1);
   verifica(casasPc,"pc")
}

function verifica(arrayCasas,jogador){
   var msg = "VOCE PERDEU";
   if(jogador == 'usuario'){
      msg = "VOCÊ GANHOU!";
   }
   if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-2') != -1 && 
      arrayCasas.indexOf('casa-3') != -1){
      alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-4') != -1 && arrayCasas.indexOf('casa-5') != -1 && 
   arrayCasas.indexOf('casa-6') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-7') != -1 && arrayCasas.indexOf('casa-8') != -1 && 
   arrayCasas.indexOf('casa-9') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-4') != -1 && 
   arrayCasas.indexOf('casa-7') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-2') != -1 && arrayCasas.indexOf('casa-5') != -1 && 
   arrayCasas.indexOf('casa-8') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-6') != -1 && 
   arrayCasas.indexOf('casa-9') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-1') != -1 && arrayCasas.indexOf('casa-5') != -1 && 
   arrayCasas.indexOf('casa-9') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}else if(arrayCasas.indexOf('casa-3') != -1 && arrayCasas.indexOf('casa-5') != -1 && 
   arrayCasas.indexOf('casa-7') != -1){
   alert(msg);
   $("#acabou").val("sim");
   return true;
}
return false;
}


