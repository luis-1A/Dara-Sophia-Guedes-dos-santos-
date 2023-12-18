// Adicione essa função para criar corações aleatórios
function createRandomHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;

    heart.style.left = `${xPos}px`;
    heart.style.top = `${yPos}px`;

    document.body.appendChild(heart);

    // Adicione um temporizador para remover o coração após um período de tempo
    setTimeout(() => {
        heart.remove();
    }, 5000); // Altere o valor conforme necessário
}

// Execute a função createRandomHeart a cada segundo (1000 milissegundos)
setInterval(createRandomHeart, 1000);
