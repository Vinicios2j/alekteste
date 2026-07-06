// Seleção seletiva para evitar bugs ao clicar no botão do mapa
const botoesAcao = document.querySelectorAll(".btn-acao");
const telaConvite = document.getElementById("tela-convite");
const resultado = document.getElementById("resultado");

botoesAcao.forEach(botao => {
    botao.addEventListener("click", () => {
        telaConvite.style.display = "none";
        resultado.style.display = "block";
    });
});

// Gerador Otimizado de Corações Flutuantes
function criarChuvaDeCoracoes() {
    const totalCoracoes = 50; // Diminuído levemente para melhor performance mobile
    for (let i = 0; i < totalCoracoes; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (12 + Math.random() * 20) + "px";
        heart.style.animationDuration = (5 + Math.random() * 6) + "s";
        heart.style.animationDelay = Math.random() * 6 + "s";
        
        document.body.appendChild(heart);
    }
}

// Countdown Engine
const dataEncontro = new Date("2026-07-18T19:30:00");
const contador = document.getElementById("contador");

function atualizarContador() {
    const agora = new Date();
    const diferenca = dataEncontro - agora;

    if (diferenca < 0) {
        contador.innerHTML = "❤️ Chegou o grande dia!";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
    const segundos = Math.floor((diferenca / 1000) % 60);

    contador.innerHTML = `⏳ ${dias}d ${horas}h ${minutos}m ${segundos}s`;
}

// Inicializadores
criarChuvaDeCoracoes();
setInterval(atualizarContador, 1000);
atualizarContador();