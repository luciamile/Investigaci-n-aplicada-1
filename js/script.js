const wheel = document.querySelector('.wheel');
const message = document.getElementById('message');
const segments = document.querySelectorAll('.segment');
const discounts = Array.from(segments).map(segment => segment.getAttribute('data-discount'));

document.getElementById('spinButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * discounts.length);
    const selectedDiscount = discounts[randomIndex];

    const rotateDeg = 3600 + (randomIndex * (360 / discounts.length));
    wheel.style.transform = `rotate(${rotateDeg}deg)`;

    setTimeout(() => {
        if (selectedDiscount === "0%") {
            message.textContent = 'Suerte a la próxima!';
        } else {
            message.textContent = `¡Felicidades! Obtuviste un ${selectedDiscount} de descuento.`;
        }
    }, 4000);
});

document.getElementById('resetButton').addEventListener('click', function() {
    wheel.style.transform = `rotate(0deg)`;
    message.textContent = '';
});
