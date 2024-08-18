document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', function () {
        const contentElement = document.querySelector('.content');
        const discipline = this.getAttribute('data-discipline');
        contentElement.querySelector('h1').textContent = discipline;
        contentElement.querySelector('p').textContent = `${discipline} Content`;

        // Move clicked circle to the center
        document.querySelectorAll('.circle').forEach(c => c.style.transform = 'translate(-50%, -50%) scale(1)');
        this.style.transform = 'translate(-50%, -50%) scale(1.25)';
    });
});
