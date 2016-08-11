
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
         corPC      = $("#corPc").val();
         $("#escolheu").val("sim");
      }
   }else{
      alert("O JOGO JÁ ESTÁ ACONTECENDO!");
   }
});
/* REINICIAR JOGO */
$("#reiniciarJogo").click(function(){
   casas        = ['casa-1','casa-2','casa-3','casa-4','casa-5','casa-6','casa-7','casa-8','casa-9'];
   casasUsuario = [];
   casasPc      = [];

   corUsuario = "";
   corPC      = "";



});


/* JOGANDO */
$(".casa").click(function(){
   if($("#escolheu").val() == "sim"){
      if(acaoUsuario($(this))){
         acaoPc();
      }
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

   console.log(casasUsuario);

   console.log(casas);
   return true;
}

function acaoPc(){
   var qtdCasasDisponiveis = casas.length;
   var casaAleatoria       = Math.floor(Math.random() * qtdCasasDisponiveis);
   $("#"+casas[casaAleatoria]).css("background",corPC);
   casasPc.push(casas[casaAleatoria]);
   casas.splice(casaAleatoria,1);
}


