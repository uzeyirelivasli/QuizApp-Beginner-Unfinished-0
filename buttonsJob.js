let currentIndex = 0

button.addEventListener("click", () =>{
    button.innerHTML = "next";
//show Answers
    answers.classList.add('show');
    answers.classList.remove('hide');
//show question
    question.classList.add('show');
    question.classList.remove('hide');

    getQuestion();
    getAnswers();
    getImages();

    first.innerHTML = currentIndex + 1
    currentIndex++
});