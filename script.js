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
        "sales": { 
            title: "Sales", 
            content: `
                <i class="fa-sharp fa-solid fa-handshake" style="font-size: 40px; color: #333;"></i>
                <p>I have a proven track record in driving sales and business development strategies that deliver strong revenue growth. From creating effective sales pitches to negotiating with key stakeholders, I've consistently exceeded sales targets.</p>
                <ul>
                    <li>Developed sales strategies that contributed to a 38% revenue growth year-over-year at OptiMA Inc.</li>
                    <li>Led the expansion of new business channels, increasing overall market share by 25%.</li>
                </ul>`
        },
        "product": { 
            title: "Product Development", 
            content: `
                <i class="fa-sharp fa-solid fa-box-open" style="font-size: 40px; color: #333;"></i>
                <p>My experience in product development spans from concept to launch, focusing on customer needs and market trends. I've been instrumental in launching successful products that meet market demands.</p>
                <ul>
                    <li>Led the development of the Opti-Rite
