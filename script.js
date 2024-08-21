document.querySelectorAll('.circle-item').forEach(item => {
    item.addEventListener('click', () => {
        window.location.href = 'detail.html';
    });
});
