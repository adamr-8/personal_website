document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('mouseenter', function() {
        document.getElementById('content-title').textContent = this.textContent;
        document.getElementById('content-description').textContent = this.textContent + " Content";
    });
});