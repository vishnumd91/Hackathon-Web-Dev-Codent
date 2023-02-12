import quizData from "../data/dataset.json" assert { type: "json" };

const { music, coding, "modern-art": modern_art } = quizData;

let currentQestionIndex = 0;

const questionContainer = document.getElementById("questionArea");
const choiceElement = document.getElementById("choices");
const totalQuestionElement = document.getElementById("totalQuestion");
// Data Selection

// Display the Question
function displayQuestion() {
  const currentQuestion = music[currentQestionIndex];
  questionContainer.innerText = currentQuestion.question;
  totalQuestionElement.innerText = music.length;
  const optionsHTML = currentQuestion.options
    .map((choice, index) => {
      return `<div class="input1">
              <input id="option${index}" type="radio" name="options" />
              <label for="option${index}">${choice}</label>
            </div>`;
    })
    .join("");

  choiceElement.innerHTML = optionsHTML;
}

displayQuestion();

// Previous Button Operation

// Next Button

// Submit Button

// Score Check

// Loacal Storage for results
