document.querySelectorAll('.character').forEach(item => {
    item.addEventListener('click', () => {
        alert(`Você clicou em ${item.querySelector('h3').innerText}`);
    });
});