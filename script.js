document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        // Create the content container element
        const contentContainer = document.createElement('div');
        contentContainer.classList.add('button-content');
        contentContainer.textContent = "This is a test sentence that showcases the newly added content area.";

        // Append the content container to each button
        button.appendChild(contentContainer);

        button.addEventListener('mouseover', () => {
            // Desktop hover behavior: show content container
            if (window.innerWidth > 768) {
                button.classList.add('open');
            }
        });

        button.addEventListener('mouseleave', () => {
            // Desktop hover behavior: hide content container
            if (window.innerWidth > 768) {
                button.classList.remove('open');
            }
        });

        button.addEventListener('click', () => {
            // Mobile tap behavior: toggle content container visibility
            if (window.innerWidth <= 768) {
                button.classList.toggle('open');
            }
        });
    });
});
