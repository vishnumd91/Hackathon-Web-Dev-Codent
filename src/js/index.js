import data from "../data/dataset.json" assert { type: "json" };

const { music, coding, "modern-art": modern_art } = data;

let quizData = [];

quizData = [...music];

let currentQuestionIndex = 0;
let currentQuestionCount = 1;
let wrongAnswers = 0;
let currentQuestion;

const questionContainer = document.getElementById("questionArea");
const choiceElement = document.getElementById("choices");
const totalQuestionElement = document.getElementById("totalQuestion");
const currentQuestionElement = document.getElementById("currentQuestion");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");
const musicButton = document.getElementById("musicType");
const artButton = document.getElementById("artType");
const codingButton = document.getElementById("codingType");

console.log(musicButton);

previousButton.style.display = "none";
submitButton.style.display = "none";
currentQuestionElement.innerText = currentQuestionCount;

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
submitButton.addEventListener("click", submit);
let scoreValue = 0;

const score = localStorage.setItem("score", scoreValue);

// document.addEventListener("DOMContentLoaded", function () {
//   musicButton.addEventListener("click", mapToQuizTypes("music"));
//   artButton.addEventListener("click", mapToQuizTypes("art"));
//   codingButton.addEventListener("click", mapToQuizTypes("coding"));
// });

// // Data Selection
// function mapToQuizTypes(quizType) {
//   console.log("hell");
//   location.href = "quiz.html";
//   switch (quizType) {
//     case "music":
//       quizData = [...music];
//       break;
//     case "art":
//       quizData = [...modern_art];
//     case "coding":
//       quizData = [...coding];
//     default:
//       quizData = [];
//       break;
//   }
// }

// Display the Question
function displayQuestion() {
  currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;
  totalQuestionElement.innerText = quizData.length;
  const optionsHTML = currentQuestion.options
    .map((choice, index, answer) => {
      console.log("answer", answer === currentQuestion.answer);
      return `<div class="input1">
              <input class="radioInput" id="option${index}" type="radio" name="options" value=${choice
        .split(" ")
        .join("")} />
              <label for="option${index}">${choice}</label>
            </div>`;
    })
    .join("");
  choiceElement.innerHTML = optionsHTML;
  checkAnswer();
}

displayQuestion();

// Check for the selected option
function checkAnswer() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  radioButtons.forEach((button) => {
    button.addEventListener("change", function () {
      const selectedOption = document.querySelector(
        'input[name="options"]:checked'
      ).value;
      if (selectedOption === currentQuestion.answer.replace(/ /g, "")) {
        scoreValue++;
      }
    });
  });
}

// Previous Button
function previous() {
  // Show or hide the "Previous" button based on the current question index
  if (currentQuestionIndex === 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
    submitButton.style.display = "none";
  }
  currentQuestionCount--;
  currentQuestionElement.innerText = currentQuestionCount;

  currentQuestionIndex--;
  displayQuestion();
  nextButton.style.display = "inline-block";
}

// Next Button
function next() {
  if (currentQuestionIndex === quizData.length - 2) {
    nextButton.style.display = "none";
    submitButton.style.display = "inline-block";
  } else {
    nextButton.style.display = "inline-block";
  }
  currentQuestionCount++;
  currentQuestionElement.innerText = currentQuestionCount;

  currentQuestionIndex++;
  displayQuestion();

  previousButton.style.display = "inline-block";
  console.log(currentQuestionIndex);
}
// Submit Button
function submit() {
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  location.href = "result.html";
  console.log(submitButton);
}

// Score Check

// Loacal Storage for results
