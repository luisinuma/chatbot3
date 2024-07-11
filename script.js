document.addEventListener("DOMContentLoaded", () => {
    const messagesContainer = document.getElementById('messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-btn');

    const questions = [
        { question: '¿Cuál es la raíz cuadrada de 64?', answer: '8' },
        { question: '¿Cuánto es 7 x 8?', answer: '56' },
        { question: '¿Cuál es el valor de Pi (π) redondeado a dos decimales?', answer: '3.14' },
        { question: '¿Cuánto es 12 + 15?', answer: '27' },
        { question: '¿Cuánto es 45 ÷ 5?', answer: '9' },
        { question: '¿Cuál es el área de un triángulo de base 5 y altura 10?', answer: '25' },
        { question: '¿Cuánto es 3^3?', answer: '27' },
        { question: '¿Cuánto es 100 - 37?', answer: '63' },
        { question: '¿Cuál es la fórmula para la circunferencia de un círculo?', answer: '2πr' },
        { question: '¿Cuánto es 5! (5 factorial)?', answer: '120' }
    ];

    let currentQuestionIndex = 0;

    function displayMessage(text, className) {
        const messageElement = document.createElement('div');
        messageElement.textContent = text;
        messageElement.className = `message ${className}`;
        messagesContainer.appendChild(messageElement);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function askQuestion() {
        if (currentQuestionIndex < questions.length) {
            displayMessage(questions[currentQuestionIndex].question, 'bot-message');
        } else {
            displayMessage('¡Felicidades! Has completado todas las preguntas.', 'bot-message');
        }
    }

    sendButton.addEventListener('click', () => {
        const userText = userInput.value.trim();
        if (userText) {
            displayMessage(userText, 'user-message');
            if (currentQuestionIndex < questions.length) {
                if (userText === questions[currentQuestionIndex].answer) {
                    displayMessage('¡Correcto!', 'bot-message');
                } else {
                    displayMessage(`Incorrecto. La respuesta correcta es ${questions[currentQuestionIndex].answer}.`, 'incorrect-message');
                }
                currentQuestionIndex++;
                setTimeout(askQuestion, 1000);
            }
            userInput.value = '';
        }
    });

    userInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    askQuestion();
});
