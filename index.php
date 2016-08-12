<!DOCTYPE html>
<html>
<head>
	<title>Jogo da Velha</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
	<div class="container">
		<div class="info" id="inicio-jogo">
			 <h1>Jogo da Velha</h1>
			<div class="cores">
				Escolha a cor do seu marcador:<br>
				<input type="color" name="" id="corUsuario"><br><br>
				Escolha a cor do marcador do adversário:<br>
				<input type="color" name="" id="corPc">
			</div>
			<div class="botoes-acao">
				<input type="button" value="INICIAR JOGO" id="iniciarJogo">
				<input id="escolheu" value="nao" type="hidden"/>
				<input id="acabou" value="nao" type="hidden"/>
				<input id="alguem-ganhou" value="nao" type="hidden"/>
			</div>
		</div>
		<div class="info" id="mensagem-jogo">
			<span id="msg-status"></span>
			<input type="button" value="REINICIAR JOGO" id="reiniciarJogo">
		</div>
		<div class="pontuacao">
			<div>VOCÊ <br><span id="ponto-usuario">0</span></div>
			<div>PC <br><span id="ponto-pc">0</span></div>
		</div>
		<div class="area-jogo">
			<div class="linha">
				<div class="casa" id="casa-1"></div>
				<div class="casa" id="casa-2"></div>
				<div class="casa" id="casa-3"></div>
			</div>
			<div class="linha">
				<div class="casa" id="casa-4"></div>
				<div class="casa" id="casa-5"></div>
				<div class="casa" id="casa-6"></div>
			</div>
			<div class="linha">
				<div class="casa" id="casa-7"></div>
				<div class="casa" id="casa-8"></div>
				<div class="casa" id="casa-9"></div>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>
	<script type="text/javascript" src="js/script.js"></script>
</body>
</html>