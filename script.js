document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        // Store initial transform for reset purposes
        button.dataset.initialTransform = button.style.transform;

        // Handle hover to open button (Desktop Only)
        button.addEventListener('mouseover', () => {
            if (window.innerWidth > 768) { // Desktop behavior
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    btn.classList.remove('open'); // Remove the open class when closing
                });
                button.style.zIndex = "1";
                button.style.transform = "translate(-50%, -50%) scale(9)"; // Slightly larger scale for opened button
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open'); // Add the open class when opening
            }
        });

        // Handle click to toggle open/close
        button.addEventListener('click', (e) => {
            e.stopPropagation();

            const isOpen = button.classList.contains('open');
            if (isOpen) {
                // Close the button
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                button.classList.remove('open');
                document.body.style.overflow = "";
            } else {
                // Open the button
                buttons.forEach(btn => {
                    btn.style.zIndex = "0";
                    btn.style.transform = btn.dataset.initialTransform;
                    btn.querySelector('.button-content').style.display = 'none';
                    btn.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                    btn.classList.remove('open');
                });
                button.style.transform = window.innerWidth <= 768 ? "translate(-50%, -50%) scale(9)" : "translate(-50%, -50%) scale(9)";
                button.style.zIndex = "1";
                button.querySelector('.button-content').style.display = 'block';
                button.querySelector('.button-alt-title').style.display = 'block'; // Show alt title
                button.classList.add('open');
                document.body.style.overflow = "hidden";
            }
        });

        // For mobile: Handle touchstart to open/close buttons
        if (window.innerWidth <= 768) {
            button.addEventListener('touchstart', (e) => {
                // Prevent closing the button if the user is scrolling inside the content
                if (e.target.closest('.button-content')) {
                    return; // Allow scrolling inside the content
                }
                e.preventDefault();
                button.click();
            }, { passive: false });
        }
    });

    // Close buttons when clicking outside of them
    document.addEventListener('click', () => {
        buttons.forEach(button => {
            if (button.classList.contains('open')) {
                button.style.transform = button.dataset.initialTransform;
                button.querySelector('.button-content').style.display = 'none';
                button.querySelector('.button-alt-title').style.display = 'none'; // Hide alt title
                button.classList.remove('open');
                document.body.style.overflow = "";
            }
        });
    });
});

// Particle System Code
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 5 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.size > 0.2) this.size -= 0.1; // Shrink particles
  }

  draw() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

// Resize canvas on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles(); // Reinitialize particles on resize
});
