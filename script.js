document.querySelectorAll('.circle-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.circle-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});
