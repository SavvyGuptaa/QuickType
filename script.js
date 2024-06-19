const testText = document.getElementById('test-text');
const userInput = document.getElementById('user-input');
const submitBtn = document.getElementById('submit-btn');
const speedElement = document.getElementById('speed');
const accuracyElement = document.getElementById('accuracy');

let startTime;
let endTime;

submitBtn.addEventListener('click', () => {
    endTime = new Date().getTime();
    const userInputValue = userInput.value;
    const testTextValue = testText.textContent;
    const speed = calculateSpeed(userInputValue, endTime - startTime);
    const accuracy = calculateAccuracy(userInputValue, testTextValue);
    speedElement.textContent = `Speed: ${speed} w/s`;
    accuracyElement.textContent = `Accuracy: ${accuracy}%`;
});

userInput.addEventListener('focus', () => {
    startTime = new Date().getTime();
});

function calculateSpeed(input, time) {
    const numChars = input.length;
    const timeInSeconds = time / 1000;
    return Math.round(numChars / timeInSeconds);
}

function calculateAccuracy(input, testText) {
    const inputArray = input.split('');
    const testTextArray = testText.split('');
    let correctChars = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i] === testTextArray[i]) {
            correctChars++;
        }
    }
    return Math.round((correctChars / testTextArray.length) * 100);
}