// JavaScript for smoother text transitions and hover effects

const details = {
    traditional: {
        title: "Traditional Marketing",
        content: "With extensive experience in traditional marketing, I've led successful campaigns across print, tradeshows, events, and more."
    },
    sales: {
        title: "Sales & Business Development",
        content: "Proven track record in driving sales strategies that deliver strong revenue growth through effective sales pitches and negotiations."
    },
    product: {
        title: "Product Development",
        content: "Experience in product development from concept to launch, focusing on customer needs and market trends."
    },
    brand: {
        title: "Brand Management",
        content: "Building, protecting, and enhancing brand equity across various markets, leading to stronger market position and customer loyalty."
    },
    automation: {
        title: "Marketing Automation",
        content: "Extensive experience with CRM systems, streamlining processes to drive engagement and retention."
    }
};

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const id = button.id;
        const panel = document.querySelector('.details-panel');

        // Fade out the content
        panel.classList.remove('active');

        setTimeout(() => {
            document.getElementById('details-title').textContent = details[id].title;
            document.getElementById('details-content').textContent = details[id].content;

            // Fade in the new content
            panel.classList.add('active');
        }, 500); // Matches the duration of the fade-out effect

        document.querySelectorAll('.button').forEach(b => {
            if (b !== button) {
                b.style.transform = 'translateZ(10px)';
            }
        });
        button.style.transform = 'translateZ(50px) scale(1.2)';
    });

    button.addEventListener('mouseleave', () => {
        document.querySelectorAll('.button').forEach(b => {
            b.style.transform = 'translateZ(20px)';
        });
    });
});
