document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const brandingLogo = document.getElementById('branding-logo');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            buttons.forEach(btn => {
                btn.classList.remove('centered');
                brandingLogo.style.display = 'none';  // Hide branding logo on hover
            });
            button.classList.add('centered');
            detailsTitle.innerText = button.innerText;
            detailsContent.innerHTML = button.getAttribute('data-info');
        });

        button.addEventListener('mouseleave', () => {
            brandingLogo.style.display = 'block';  // Show branding logo on mouse leave
        });
    });
});
