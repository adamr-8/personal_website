// JavaScript for updating the details panel with actual content and managing 3D effects

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
        document.getElementById('details-title').textContent = details[id].title;
        document.getElementById('details-content').textContent = details[id].content;
        
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
