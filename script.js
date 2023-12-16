
document.addEventListener('DOMContentLoaded', function() {
    const birthday = new Date('2024-03-26T00:00:00');
    const giftBox = document.getElementById('giftBox');
    const balloonBox = document.getElementById('balloonBox');
    const giftMessage = document.getElementById('giftMessage');

    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date();
        const difference = birthday - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `<p>${days} dias ${hours} horas ${minutes} minutos</p>`;

        if (difference <= 0) {
            // Oculta a caixa de presente e exibe os balões com a caixa de mensagem
            giftBox.style.display = 'none';
            balloonBox.style.display = 'block';
            giftMessage.style.display = 'block';
        }
    }
});
