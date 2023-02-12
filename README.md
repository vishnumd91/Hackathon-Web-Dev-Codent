# Quiz App

This is a simple quiz app that displays questions and options to the user, allowing them to select an answer and navigate to the next or previous question. The user can also submit their answers and view their score.

---

### Importing Data

---

The quiz data is imported from a JSON file named `dataset.json.` The code uses destructuring to extract the data for the music and coding categories, as well as a modern art category using a custom identifier `modern-art.` The data is imported using the following code:

```
import quizData from "../data/dataset.json"
assert { type: "json" };


const { music, coding, "modern-art": modern_art } = quizData;
```

---

### Variables and DOM Elements

---

The code sets up several variables and constants to store information about the current question and the number of questions. The following DOM elements are also accessed and stored in constants:

**_questionContainer
choiceElement
totalQuestionElement
currentQuestionElement
previousButton
nextButton
submitButton
Event Listeners_**

The code sets up event listeners for the `previousButton, nextButton, and submitButton` elements. When the user clicks the previous button, the code displays the previous question. When the user clicks the next button, the code displays the next question. When the user clicks the submit button, the code hides the previous and next buttons.

---

### Displaying Questions

---

```
 function displayQuestion() {
  currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;
  totalQuestionElement.innerText = quizData.length;
  const optionsHTML = currentQuestion.options
    .map((choice, index, answer) => {
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
```

The code defines a function named displayQuestion that displays the current question and options. The function sets the text of the questionContainer element to the current question and the totalQuestionElement to the total number of questions. The options are generated as HTML and set to the choiceElement. The function also adds event listeners to the radio buttons that allow the user to select an answer.

---

### Previous and Next Buttons

---

```
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
}

```

The code defines the previous and next functions to navigate through the questions. The previous function decrements the currentQuestionIndex and displays the previous question. The next function increments the currentQuestionIndex and displays the next question. The code also updates the currentQuestionCount and the text of the currentQuestionElement to display the current question number.

---

### Submit Button

---

```
// Submit Button
function submit() {
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  location.href = "result.html";
}
```

The code defines the submit function, which is called when the user clicks the submit button. The function hides the previous and next buttons, indicating that the quiz is complete.

---

### Score Check

---

The code checks the selected option using the selectedOption constant and logs the result to the console. The user's score is also stored in local storage and displayed on the page using the `localStorage.getItem` method.

---

### Submit Button Function

---

```
function submit() {
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  location.href = "result.html";
}
```

The `submit()` function is used to submit the quiz and redirect the user to the result page. The function hides the previous and next buttons, and then redirects the user to the `result.html` page using the `location.href `property.

---

---
