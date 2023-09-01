const questions = [
    {
        question: "The full form of CSS is:",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Coloured Special sheets", correct: false },
            { text: "Color and Style Sheets", correct: false },
            { text: "None of the above", correct: false }
        ]

    },
    {
        question: "How can we change the background color of an element?",
        answers: [
            { text: "color", correct: false },
            { text: "background-color", correct: true },
            { text: "Both A and B", correct: false },
            { text: "None of the above", correct: false }
        ]

    },
    {
        question: "In how many ways can CSS be written in?",
        answers: [
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: true },
            { text: "4", correct: false }
        ]

    },
    {
        question: "How many sizes of headers are available in HTML by default?",
        answers: [
            { text: "6", correct: true },
            { text: "3", correct: false },
            { text: "1", correct: false },
            { text: "5", correct: false }
        ]

    },
    {
        question: "How can we select an element with a specific ID in CSS?",
        answers: [
            { text: ".", correct: false },
            { text: "^", correct: false },
            { text: "#", correct: true },
            { text: "None of the above", correct: false }
        ]
    }
];

const questionElement = document.getElementById("ques");
const answerButton = document.getElementById("answer-options");
const nextButton = document.getElementById("next-button");
let quesNum=document.getElementById("Question");

let currentQuestionNum = 0;
let marks = 0;

function startQuiz() {
    currentQuestionNum = 0;
    marks = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion() {
    removePrevious();
    let currentQuestion = questions[currentQuestionNum];
    let questionNum = currentQuestionNum + 1;

    quesNum.innerHTML=`${questionNum} of 5 Questions`
    
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseAnswer)
    });
}

function removePrevious() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function chooseAnswer(e) {
    const selectedtbn = e.target;
    const isCorrect = selectedtbn.dataset.correct === "true";
    if (isCorrect) {
        selectedtbn.classList.add("correct");
        marks++;

    } else {
        selectedtbn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showMarks() { 
    removePrevious();
    questionElement.innerHTML = `You scored ${marks} out of ${questions.length}!`;  
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function ManageNextbutton() {
    currentQuestionNum++;
    if (currentQuestionNum < questions.length) {
        showQuestion();
    }
    else {         
        showMarks();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionNum < questions.length) {
        ManageNextbutton();
    }
    else {
        startQuiz();
    }
});

startQuiz();









