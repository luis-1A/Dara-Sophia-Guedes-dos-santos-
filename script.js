
document.addEventListener('DOMContentLoaded', function() {
    // Data do aniversário
    const birthday = new Date('2024-03-26T00:00:00');

    // Atualiza o contador a cada segundo
    setInterval(updateCountdown, 1000);

    function updateCountdown() {
        const now = new Date();
        const difference = birthday - now;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const countdownElement = document.getElementById('countdown');
        countdownElement.innerHTML = `<p>${days} dias ${hours} horas ${minutes} minutos</p>`;
    }
});
