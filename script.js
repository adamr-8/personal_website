document.querySelectorAll('.circle-button').forEach(button => {
    button.addEventListener('click', function() {
        const detail = this.getAttribute('data-detail');
        window.location.href = `detail.html?detail=${detail}`;
    });
});
