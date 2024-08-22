document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const detailsTitle = document.getElementById('details-title');
    const detailsContent = document.getElementById('details-content');

    // Store details for each button
    const buttonDetails = {
        "traditional": { 
            title: "Traditional Marketing", 
            content: `
                <i class="fa-sharp fa-solid fa-bullhorn" style="font-size: 40px; color: #333;"></i>
                <p>With extensive experience in traditional marketing, I've led successful campaigns across print, tradeshows, events, mailers, and catalog creation. My efforts have consistently driven brand recognition and generated significant ROI, especially in B2B markets.</p>
                <ul>
                    <li>Managed comprehensive tradeshow strategies resulting in a 30% increase in qualified leads.</li>
                    <li>Successfully launched multiple direct mail campaigns with a response rate 20% above industry average.</li>
                </ul>`
        },
        // Other buttons' details...
    };

    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            // Show details panel with content
            const buttonId = button.id.toLowerCase();
            if (buttonDetails[buttonId]) {
                detailsTitle.innerText = buttonDetails[buttonId].title;
                detailsContent.innerHTML = buttonDetails[buttonId].content;
            } else {
                detailsTitle.innerText = button.innerText;
                detailsContent.innerText = button.getAttribute('data-info');
            }

            buttons.forEach(btn => {
                btn.style.zIndex = "0";
                btn.style.transform = btn.dataset.initialTransform;
            });

            button.style.zIndex = "1";
            button.style.transform = "translate(-50%, -50%) scale(3)";
        });

        button.dataset.initialTransform = button.style.transform;

        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.style.zIndex = "0");
            button.style.zIndex = "1";
            if (button.style.transform.includes('scale(3)')) {
                button.style.transform = "translate(-50%, -50%) scale(8)";
            } else {
                button.style.transform = button.dataset.initialTransform;
            }
        });
    });
});
