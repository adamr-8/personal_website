document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        document.querySelectorAll('.button').forEach(b => {
            if (b !== button) {
                b.style.transform = 'translateZ(10px)';
            }
        });
        button.style.transform = 'translateZ(50px) scale(1.2)';
    });

    button.addEventListener('mouseleave', () => {
        document.querySelectorAll('.button').forEach(b => {
            b.style.transform = 'translateZ(20px)';
        });
    });
});
