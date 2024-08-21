document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.grid-button');
    const buttonPairs = {
        "ecommerce": "cx",
        "traditional": "digital",
        "sales": "content",
        "product": "startup",
        "brand": "projects",
        "automation": "analytics",
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const buttonId = button.id;
            const oppositeButtonId = buttonPairs[buttonId];
            const oppositeButton = document.getElementById(oppositeButtonId);

            // Scale the hovered button and shrink the opposite one
            button.classList.add('hovered');
            oppositeButton.classList.add('opposite');
        });

        button.addEventListener('mouseleave', () => {
            const buttonId = button.id;
            const oppositeButtonId = buttonPairs[buttonId];
            const oppositeButton = document.getElementById(oppositeButtonId);

            // Reset the scales
            button.classList.remove('hovered');
            oppositeButton.classList.remove('opposite');
        });
    });
});
