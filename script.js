document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', function () {
        const contentElement = document.querySelector('.content');
        const discipline = this.getAttribute('data-discipline');
        contentElement.querySelector('h1').textContent = discipline;
        contentElement.querySelector('p').textContent = `${discipline} Content`;

        // Move hovered circle to the center
        const centerCircle = document.querySelector('.circle:nth-child(1)');
        centerCircle.style.top = this.style.top;
        centerCircle.style.left = this.style.left;
        centerCircle.style.backgroundColor = this.style.backgroundColor;
        centerCircle.innerHTML = this.innerHTML;
        
        this.style.top = '50%';
        this.style.left = '50%';
        this.style.transform = 'translate(-50%, -50%) scale(1.25)';
    });
});
