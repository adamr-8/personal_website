document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const buttonDetails = {
        "ecommerce": "Content for E-commerce",
        "traditional": "Content for Traditional",
        "sales": "Content for Sales",
        "product": "Content for Product",
        "brand": "Content for Brand",
        "automation": "Content for Automation",
        "analytics": "Content for Analytics",
        "projects": "Content for Projects",
        "startup": "Content for Startup",
        "content": "Content for Content",
        "digital": "Content for Digital",
        "cx": "Content for CX"
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const content = buttonDetails[button.id];
            button.textContent = content;

            // Shrink opposite button
            const oppositeButtonId = getOppositeButton(button.id);
            const oppositeButton = document.getElementById(oppositeButtonId);
            oppositeButton.style.transform = 'scale(0.7) translate(-50%, -50%)';
            oppositeButton.style.zIndex = '0';
        });

        button.addEventListener('mouseout', () => {
            button.textContent = button.id.charAt(0).toUpperCase() + button.id.slice(1);

            // Reset opposite button
            const oppositeButtonId = getOppositeButton(button.id);
            const oppositeButton = document.getElementById(oppositeButtonId);
            oppositeButton.style.transform = 'translate(-50%, -50%)';
            oppositeButton.style.zIndex = '1';
        });
    });

    function getOppositeButton(buttonId) {
        const oppositeButtons = {
            "ecommerce": "brand",
            "traditional": "analytics",
            "sales": "projects",
            "product": "startup",
            "brand": "ecommerce",
            "automation": "content",
            "analytics": "traditional",
            "projects": "sales",
            "startup": "product",
            "content": "automation",
            "digital": "cx",
            "cx": "digital"
        };
        return oppositeButtons[buttonId];
    }
});
