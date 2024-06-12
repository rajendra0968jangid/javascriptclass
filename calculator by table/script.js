let result = document.getElementById('result');

function clearDisplay() {
    result.innerText = '0';
}

function appendCharacter(character) {
    if (result.innerText === '0' && character !== '.') {
        result.innerText = character;
    } else {
        result.innerText += character;
    }
}

function calculateResult() {
    try {
        result.innerText = eval(result.innerText);
    } catch (error) {
        result.innerText = 'Error';
    }
}
