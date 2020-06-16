var texto = document.querySelector(".texto");
var btn = document.querySelector(".btn");
var btn1 = document.querySelector(".btn-1");
var btn2 = document.querySelector(".btn-2");
var a = document.querySelector("a");

function layout(txtP, txtBtn1, txtBtn2){
	texto.textContent = `${txtP}`;
	btn1.textContent = `${txtBtn1}`;
	btn2.textContent = `${txtBtn2}`;
}

function mostrarBotao(){
	btn1.style.display = "inline";
	btn2.style.display = "inline";
}

function tirarBotao(){
	btn.style.display = "none";
}

function mudarFase(botao1, botao2){
	btn1.onclick = botao1;
	btn2.onclick = botao2;
}

function fimDeJogo(){
	btn1.style.display = "none";
	btn2.style.display = "none";
	a.textContent = "Fim de jogo. Clique para jogar mais!"
}

function primeiraMalOpcao(){
	texto.textContent = "Já que é essa a sua decisão, não podemos fazer nada. ";
	fimDeJogo();
}

function segundaMalOpcao(){
	texto.textContent = "Você chegou até aqui para disseminar notícias falsas? Que decepção! ";
	fimDeJogo();
}

function terceiraMalOpcao(){
	texto.textContent = "Você pensou mais em si do que no próximo.";
	fimDeJogo();
}

function quartaMalOpcao(){
	texto.textContent = "É uma lástima seus pensamentos te controlarem. Pratique mindfulness para conhecer a ti mesmo.";
	fimDeJogo();
}

function quintaMalOpcao(){
	texto.textContent = "Lembre-se: os hackers toparam estar aqui porque querem disseminar a verdade a população. Você foi um péssimo líder.";
	fimDeJogo();
}

function sextaMalOpcao(){
	texto.textContent = "O que adiantou executar o plano e depois simplesmente desistir por medo?";
	fimDeJogo();
}

function repensar(){
	layout("É isso mesmo que você quer fazer?", "Sim", "Não");
	mudarFase(primeiraMalOpcao,primeiraFase);
}

function perder(){
	texto.textContent = "É sério que você escolheu essa opção?";
	fimDeJogo();
}

function ganhar(){
	texto.textContent = "Parabéns! Você conseguiu mostrar a verdade para as pessoas. Isso é um jogo fictício, porém busque sempre pela verdade.";
	fimDeJogo();
}

function primeiraFase(){

	layout("Há um evento de grande porte transmitido para todo o país que está disseminando informações falsas sobre a organização Doom. O que você quer fazer?","Hackear o computador", "Nada")
	mostrarBotao();
	tirarBotao();
	mudarFase(segundaFase,repensar)	
}

function segundaFase(){
	layout("Bela atitude! Você conseguiu acesso ao computador e as câmeras de segurança. Agora você consegue ver tudo o que está acontecendo. O que você pretende fazer?", "Gravar e postar nas redes sociais", "Modificar o script do palestrante")
	mostrarBotao();
	tirarBotao();
	mudarFase(segundaMalOpcao,terceiraFase)
}

function terceiraFase(){
	layout("Com os seus conhecimentos técnicos, você conseguiu alterar o script do teleprompter para disseminar notícias verdadeiras e impactou os participantes do evento. Entretanto, um dos crackers conseguiu a sua localização e contactou a polícia. Neste exato momento estão indo atrás de você. O que você quer fazer?","Se entregar para a polícia","Fugir")
	mostrarBotao();
	tirarBotao();
	mudarFase(terceiraMalOpcao,quartaFase);
}

function quartaFase(){
	layout("Na televisão foi acionado o plantão jornalístico dizendo que está acontecendo manifestações contra a organização Doom e agradecimentos por um suposto hacker ter vazado as informações verdadeiras. Isso desencadeou em você uma sensação de dever cumprido. Agora, o que pretende fazer? ", "Recrutar hackers para fazer uma revolução","Seus pensamentos dizem que você não é páreo para isso e desiste");
	mostrarBotao();
	tirarBotao();
	mudarFase(quintaFase,quartaMalOpcao);
}

function quintaFase(){
	layout("Em um fórum anônimo, você conseguiu transmitir a sua ideologia e outros hackers resolveram te seguir. Vocês estão planejando fazer um grande ataque a organização para ajudar as pessoas que já estão sendo controladas pelas fake news. Você, como líder, o que pretende fazer?", "Começar a execução do plano","Abortar o plano");
	mostrarBotao();
	tirarBotao();
	mudarFase(sextaFase,quintaMalOpcao);
}

function sextaFase(){
	layout("Algo deu errado! Alguns de seus parceiros caíram em uma armadilha feita pelos crackers e foram presos. Qual é o seu plano agora?", "Continuar com o mesmo plano","Desistir por medo de ser preso");
	mostrarBotao();
	tirarBotao();
	mudarFase(setimaFase,sextaMalOpcao);
}

function setimaFase() {
	layout("Sua atitude em continuar com o plano estabelecido foi de grande sucesso! O que pretende fazer agora?","Criar um vírus", "Combater as fake news");
	mostrarBotao();
	tirarBotao();
	mudarFase(perder,ganhar)
}










