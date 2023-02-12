import quizData from "../data/dataset.json" assert { type: "json" };

const { music, coding, "modern-art": modern_art } = quizData;

let currentQuestionIndex = 0;
let currentQuestionCount = 1;

const questionContainer = document.getElementById("questionArea");
const choiceElement = document.getElementById("choices");
const totalQuestionElement = document.getElementById("totalQuestion");
const currentQuestionElement = document.getElementById("currentQuestion");
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const submitButton = document.getElementById("submit");

previousButton.style.display = "none";
submitButton.style.display = "none";
currentQuestionElement.innerText = currentQuestionCount;

previousButton.addEventListener("click", previous);
nextButton.addEventListener("click", next);
submitButton.addEventListener("click", submit);

// Data Selection

// Display the Question
function displayQuestion() {
  const currentQuestion = music[currentQuestionIndex];
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

// Previous Button
function previous() {
  // Show or hide the "Previous" button based on the current question index
  if (currentQuestionIndex === 1) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline-block";
  }
  currentQuestionCount--;
  currentQuestionElement.innerText = currentQuestionCount;

  currentQuestionIndex--;
  displayQuestion();
  nextButton.style.display = "inline-block";
}

// Next Button
function next() {
  if (currentQuestionIndex === music.length - 2) {
    nextButton.style.display = "none";
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
  console.log(submitButton);
}

// Score Check

// Loacal Storage for results
