document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const circleContainer = document.querySelector('.circle-container');

    // Calculate the center of the circle container
    const containerRect = circleContainer.getBoundingClientRect();
    const circleCenterX = containerRect.width / 2;
    const circleCenterY = containerRect.height / 2;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const buttonRect = button.getBoundingClientRect();
            const buttonCenterX = buttonRect.width / 2;
            const buttonCenterY = buttonRect.height / 2;

            // Calculate translation relative to the circle container itself
            const translateX = circleCenterX - buttonCenterX;
            const translateY = circleCenterY - buttonCenterY;

            // Apply the transformation after resetting any initial transform
            button.style.transform = ''; // Reset any existing transforms
            button.style.transform = `translate(${translateX}px, ${translateY}px) scale(3)`;
            button.style.zIndex = "10";
        });
    });

    // Reset the centered button when hovering outside the circle-container
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.style.transform = ''; // Clear transforms when mouse leaves
            button.style.zIndex = "0";
        });
    });
});
