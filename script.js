document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const circleContainer = document.querySelector('.circle-container');

    // Calculate the center of the circle container
    const containerRect = circleContainer.getBoundingClientRect();
    const circleCenterX = containerRect.left + containerRect.width / 2;
    const circleCenterY = containerRect.top + containerRect.height / 2;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Calculate the center of the button relative to the container
            const buttonRect = button.getBoundingClientRect();
            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;

            // Calculate translation needed to move the button's center to the circle's center
            const translateX = circleCenterX - buttonCenterX;
            const translateY = circleCenterY - buttonCenterY;

            // Apply the translation and scaling
            button.style.transform = `translate(${translateX}px, ${translateY}px) scale(3)`;
            button.style.zIndex = "10";
        });

        button.addEventListener('mouseleave', () => {
            // Reset transformation when mouse leaves the button
            button.style.transform = ''; 
            button.style.zIndex = "0";
        });
    });

    // Ensure only one button can be transformed at a time
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.style.transform = ''; // Reset all buttons when mouse leaves the container
            button.style.zIndex = "0";
        });
    });
});
