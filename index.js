function convertAmericanOddsToMultiplier(americanOdds) {
    // Convert the input to a number
    const odds = parseFloat(americanOdds);

    // Check if the conversion was successful
    if (isNaN(odds)) {
        throw new Error("Invalid American odds string.");
    }

    // Check if the odds are positive or negative
    if (odds > 0) {
        // Positive odds
        return (odds / 100) + 1;
    } else if (odds < 0) {
        // Negative odds
        return (100 / Math.abs(odds)) + 1;
    } else {
        // Odds are zero
        return 1;
    }
}

function addLeg() {
    console.log('adding leg');
    var inputContainer = document.getElementById('inputContainer');
    var newInputWrapper = document.createElement('div');
    newInputWrapper.classList.add('inputWrapper');

    var newOddsLabel = document.createElement('label');
    newOddsLabel.for('oddsForLeg' + (inputContainer.children.length + 1))
    newInputWrapper.appendChild(newOddsLabel);
    var newOddsInput = document.createElement('input');
    newOddsInput.type = 'text';
    newOddsInput.id = 'oddsForLeg' + (inputContainer.children.length + 1);
    newInputWrapper.appendChild(newOddsInput);

    var newRiskLabel = document.createElement('label');
    newRiskLabel.for('riskForLeg' + (inputContainer.children.length + 1))
    newInputWrapper.appendChild(newRiskLabel);
    var newRiskInput = document.createElement('input');
    newRiskInput.type = 'text';
    newRiskInput.id = 'riskForLeg' + (inputContainer.children.length + 1);
    newInputWrapper.appendChild(newRiskInput);

    var newButton = document.createElement('button');
    newButton.textContent = 'Remove';
    newButton.classList.add('removeButton');
    newButton.addEventListener('click', function (event) {
        event.preventDefault();
        event.target.parentNode.remove();
    });
    newInputWrapper.appendChild(newButton);

    inputContainer.appendChild(newInputWrapper);
}