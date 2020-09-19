let questions

function loadQuestions() {
    console.log(data)
    document.getElementById("btn").className = "d-none"
    const questionsDiv = document.getElementById("question")
    const h4AnswerTitle = document.createElement("h4")
    const h4QuestionTitle = document.createElement("h4")
    h4QuestionTitle.innerHTML = "Question"
    h4AnswerTitle.innerHTML = "Answers"
    for (let i = 0; i < data.length; i++) {
        const questionDiv = document.createElement("div")
        const questionElmnt = document.createElement("h5")
        questionElmnt.innerHTML = data[i].question
        questionDiv.appendChild(questionElmnt)
        const answersDiv = document.createElement("div")
        const explanationDiv = document.createElement("div")
        for (let x = 0; x < data[i].answers.length; x++) {
            const answerDiv = document.createElement("div")
            const answerElmnt = document.createElement("button")
            answerElmnt.innerHTML = data[i].answers[x]
            answerElmnt.className = "m-2 btn btn-primary"
            answerElmnt.value = x + 1
            answerDiv.appendChild(answerElmnt)
            answersDiv.appendChild(answerDiv)
            answerElmnt.addEventListener("click", () => {
                while (explanationDiv.firstChild) {
                    explanationDiv.removeChild(explanationDiv.firstChild)
                }
                const explanationElmnt = document.createElement("p")
                explanationElmnt.innerHTML = data[i].explanation
                const rightOrWrongElmnt = document.createElement("p")
                if (data[i].correct.indexOf(parseInt(answerElmnt.value)) !== -1) {
                    rightOrWrongElmnt.innerHTML = "You are correct!"
                } else {
                    rightOrWrongElmnt.innerHTML = "Wrong answer"
                }
                explanationDiv.appendChild(rightOrWrongElmnt)
                explanationDiv.appendChild(explanationElmnt)
            })
        }
        questionsDiv.appendChild(questionDiv)
        questionsDiv.appendChild(answersDiv)
        questionsDiv.appendChild(explanationDiv)
    }
}

let btn = document.getElementById("btn")
btn.addEventListener("click", () => {
    loadQuestions()
})