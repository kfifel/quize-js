let username = ""
let index = 0;
let score = 0;

function countDown(){
    quizStart();
    /*for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = `let's Go`
                setTimeout(()=>quizStart(), 2000);
            }
        }, (5 - i) * 1000);
    }*/
}

function Start(){
    username = document.getElementById("username").value;
    if(username !== ""){
        document.getElementById('alert').innerText = "Please username is required";
    }else{
        document.querySelector(".container").innerHTML = `
            <article>
                <h1>Quiz well start in <br> <span id="counter-to-start"></span></h1>
            </article>
        `;
        countDown();
    }
}
//   ------------------------------------------------------------------------------------

    let ajax = new XMLHttpRequest()
    let data = [];
    ajax.onreadystatechange = function() {
        if ( ajax.readyState === 4 && ajax.status === 200) {
            res = JSON.parse(ajax.responseText);
            res.sort(()=> Math.random() - 0.5 );
            getData(res)
        }
    };
    ajax.open("GET", 'assets/js/typescript/data/Question.json', true);
    ajax.send();


//   ---------------------------------------------------------------------------------------

function getData(res){
    data = res;
}

function nextQuestion() {
    console.log(data[index]);
    const container = document.querySelector(".container");
    let answerContainer = `
    <div class="quiz-container">
        <h2>  ${data[index].question}  </h2>
        <div class="answer">
    `;
    for(var i = 0; i < data[index].choices.length; i++ ){
        answerContainer += `
            <label for="${i+1}" id="choice${i+1}" class="answer-items">
                ${data[index].choices[i]}
                <input type="checkbox" id="${i+1}" name="choice" value="${i+1}" onclick="saveAnswer('choice'+${i+1})">
            </label>
        `;
    }

    answerContainer += `
        </div>
    <button class="btn-next" onclick="calcAnswer(data[index].answers)">next</button>
</div>`;
    container.innerHTML = answerContainer;
    index++;
}

function quizStart(){
    nextQuestion()
}

function showQuestions(){
    quizStart()
}

function calcAnswer(answer){
    if(answer.length === 1){
        let check = document.querySelector("input:checked");
        if(answer[0] === parseInt(check.value)){
            score += 10;
            document.getElementById("choice"+answer.id).classList.add("valid");
            console.log(document.getElementById("choice"+answer.id))
            alert("teur : id = "+check.id)
        }else{

            alert('false');
        }
    }else{
        alert('non');
    }
}

function stylingDivAnswer() {
    let check = document.querySelectorAll(".answer-items input:checked")
    let all   = document.querySelectorAll('.answer-items')
    all.forEach(e=>e.classList.remove('active'))
    check.forEach(e=>e.parentElement.classList.add('active'))
}

function saveAnswer(){
    stylingDivAnswer();
}