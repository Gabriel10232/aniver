document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.carousel-img');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let current = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    prevBtn.onclick = function () {
        current = (current - 1 + images.length) % images.length;
        showImage(current);
    };

    nextBtn.onclick = function () {
        current = (current + 1) % images.length;
        showImage(current);
    };

    // Garantir que exibe a primeira ao iniciar
    showImage(current);
});