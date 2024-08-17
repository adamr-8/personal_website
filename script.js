document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Move button to center
            buttons.forEach(btn => btn.style.zIndex = "0"); // Reset z-index of all buttons
            button.style.zIndex = "1"; // Bring the hovered button to the front

            // Update details panel
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });
    });
});
