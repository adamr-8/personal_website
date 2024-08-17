document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Reset z-index of all buttons
            buttons.forEach(btn => {
                btn.style.zIndex = "0"; 
                btn.style.transform = btn.dataset.initialTransform; // Reset position of all buttons
            });

            // Move hovered button to center
            button.style.zIndex = "1"; 
            button.style.transform = "translate(-50%, -50%) scale(1.25)"; 

            // Update details panel
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });
    });

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });
});
