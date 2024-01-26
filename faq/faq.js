console.log("chal raha");

const plusButtons = document.querySelectorAll('.symbol');
const answerDivs = document.querySelectorAll('.ans');

plusButtons.forEach((plusButton, index) => {
    plusButton.addEventListener('click', (e) => {
        console.log("clicked");
        
        // Assuming you want to toggle visibility for the corresponding answer div
        const currentAnswerDiv = answerDivs[index];
        
        // Toggle the visibility of the answer div
        if (currentAnswerDiv.style.display === 'none' || currentAnswerDiv.style.display === '') {
            currentAnswerDiv.style.display = 'block';
        } else {
            currentAnswerDiv.style.display = 'none';
        }
    });
});