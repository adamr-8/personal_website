/* Global Styles */
html, body {
    scroll-behavior: smooth;
    overflow-x: hidden;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

/* Container Styles */
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    height: 90vh;
    margin: auto;
}

/* Circle Container */
.circle-container {
    position: relative;
    width: 85vmin;
    height: 85vmin;
    margin-right: 5%;
}

/* Details Panel */
.details-panel {
    flex-grow: 1;
    padding: 20px;
    background-color: #f9f9f9;
    border-left: 2px solid #ccc;
    min-width: 300px;
    max-width: 35%;
    text-align: left;
}

/* Button Styles */
.button {
    position: absolute;
    width: 14vmin;
    height: 14vmin;
    border-radius: 50%;
    color: white;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 1.7vmin;
    line-height: 1.2;
    transition: transform 0.5s ease, box-shadow 0.5s ease, background 0.5s ease;
    
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0.1));
    box-shadow: 
        inset -2px -2px 8px rgba(0, 0, 0, 0.3), 
        inset 2px 2px 8px rgba(255, 255, 255, 0.4), 
        3px 3px 10px rgba(0, 0, 0, 0.3);
}

/* Positioning of buttons around the circle */
#traditional-marketing { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(0deg) translate(0, -30vmin) rotate(0deg); background-color: #ffcc00; }
#ad-buying { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(30deg) translate(0, -30vmin) rotate(-30deg); background-color: #ff9900; }
#event-marketing { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(60deg) translate(0, -30vmin) rotate(-60deg); background-color: #ff6600; }
#public-relations { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(90deg) translate(0, -30vmin) rotate(-90deg); background-color: #ff3300; }
#market-research { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(120deg) translate(0, -30vmin) rotate(-120deg); background-color: #e60000; }
#customer-loyalty { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(150deg) translate(0, -30vmin) rotate(-150deg); background-color: #cc0066; }
#marketing-technology { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(180deg) translate(0, -30vmin) rotate(-180deg); background-color: #9900cc; }
#content-marketing { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(210deg) translate(0, -30vmin) rotate(-210deg); background-color: #6600cc; }
#social-media { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(240deg) translate(0, -30vmin) rotate(-240deg); background-color: #0073e6; }
#abm { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(270deg) translate(0, -30vmin) rotate(-270deg); background-color: #00b3b3; }
#digital-marketing { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(300deg) translate(0, -30vmin) rotate(-300deg); background-color: #00cc66; }
#brand-management { top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(330deg) translate(0, -30vmin) rotate(-330deg); background-color: #99cc00; }

/* Hover effect to move button to center and enlarge */
.button.centered {
    z-index: 10;
    transform: translate(-50%, -50%) scale(2.5);
}

/* Details panel text styles */
.details-panel h2 {
    font-size: 2em;
    margin-bottom: 10px;
}

.details-panel p {
    font-size: 1.2em;
    line-height: 1.6;
}

.content-description {
    font-size: 16px;
}

/* Media query for portrait mode or narrow screens */
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column;
        align-items: center;
        height: auto;
    }

    .circle-container {
        width: 90vmin;
        height: 90vmin;
        margin-bottom: 20px;
    }

    .details-panel {
        border-left: none;
        border-top: 2px solid #ccc;
        max-width: 90%;
        width: 100%;
        text-align: center;
    }

    .button {
        width: 13vmin;
        height: 13vmin;
        font-size: 1.5vmin; /* Slightly larger font size */
    }

    .button:focus {
        outline: none;
        transform: translate(-50%, -50%) scale(2.5);
    }
}
