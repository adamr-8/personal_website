/* Existing styles */
body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #fff;
}

.container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    height: 80vh;
    margin: auto;
    flex-direction: row; /* Default direction is row */
}

.circle-container {
    position: relative;
    width: 45vmin;
    height: 45vmin;
}

.details-panel {
    flex-grow: 1;
    padding: 20px;
    background-color: #f9f9f9;
    border-left: 2px solid #ccc;
    min-width: 300px;
    max-width: 35%;
    text-align: left;
}

/* Media query for portrait mode or narrow screens */
@media screen and (max-width: 768px) {
    .container {
        flex-direction: column; /* Stack items vertically */
        justify-content: flex-start; /* Align items at the start of the column */
        height: auto; /* Let the height adjust naturally */
    }

    .circle-container {
        width: 70vmin; /* Increase size for better visibility on narrow screens */
        height: 70vmin;
        margin-bottom: 20px; /* Add some space below the buttons */
    }

    .details-panel {
        border-left: none; /* Remove the left border */
        border-top: 2px solid #ccc; /* Add a top border instead */
        max-width: 90%; /* Increase the width of the details panel */
        width: 100%; /* Ensure it takes up full width */
    }
}