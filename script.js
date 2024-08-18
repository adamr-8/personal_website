document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseover', function () {
        const contentElement = document.querySelector('.content');
        const discipline = this.getAttribute('data-discipline');
        contentElement.querySelector('h1').textContent = discipline;
        contentElement.querySelector('p').textContent = `${discipline} Content`;
    });
});
