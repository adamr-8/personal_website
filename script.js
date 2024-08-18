document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');
    const circleContainer = document.querySelector('.circle-container');

    // Calculate the center of the circular arrangement within the container
    const circleCenterX = circleContainer.offsetLeft + circleContainer.offsetWidth / 2;
    const circleCenterY = circleContainer.offsetTop + circleContainer.offsetHeight / 2;

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            const buttonRect = button.getBoundingClientRect();
            const containerRect = circleContainer.getBoundingClientRect();

            // Calculate the center of the button relative to the container
            const buttonCenterX = buttonRect.left + buttonRect.width / 2;
            const buttonCenterY = buttonRect.top + buttonRect.height / 2;

            // Calculate the exact translation needed to align the button's center with the circle's center
            const translateX = circleCenterX - buttonCenterX;
            const translateY = circleCenterY - buttonCenterY;

            // Reset all buttons
            buttons.forEach(btn => {
                btn.classList.remove('centered');
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
            });

            // Move the hovered button to the center of the circular arrangement and gradually increase its size
            button.classList.add('centered');
            button.style.zIndex = "10";
            button.style.transition = "transform 0.5s ease"; // Smooth transition
            button.style.transform = `translate(${translateX}px, ${translateY}px) scale(3)`; // Move to the calculated center and scale up

            // Update details panel
            detailsTitle.innerText = button.innerText;
            detailsContent.innerText = button.getAttribute('data-info');
        });
    });

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;
    });

    // Reset the centered button when hovering outside the circle-container
    circleContainer.addEventListener('mouseleave', () => {
        buttons.forEach(button => {
            button.classList.remove('centered');
            button.style.transform = button.dataset.initialTransform;
            button.style.zIndex = "0";
        });
    });
});
