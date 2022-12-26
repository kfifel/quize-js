const container = document.querySelector(".container")
let username;
let index;
let score;
function rankedComponent(){
    let rankedData = new Map();
    for (let key of Object.keys(localStorage)) {
        let value = JSON.parse(localStorage.getItem(key));
        rankedData.set(key, value);
    }

    let content = `
                    <article>
                        <h1>Global Ranked</h1>
                        <div class="ranked-users">
                            <table>
                            <thead>
                                <tr>
                                    <th>username</th>
                                    <th>score</th>
                                </tr>
                            </thead>
                            </tbody>`;

                for (let [key, value] of rankedData){
                    content += `               
                                 <tr>
                                    <td>${key}</td> 
                                    <td>${value}</td> 
                                </tr>           
                    `;
                }
    content +=`</tbody>
                             </table>
                         </div>
                    </article>
    `;


    container.innerHTML = content;
}
function dashboardComponent(){
    container.innerHTML = `
                    <article>
                        <h1>Welcome to quiz in PHP</h1>
                        <p>
                            this website well offer to you a quiz of POO in PHP <br>
                            Are you ready !!!
                        </p>
                    </article>
                    <section>
                        <label for="username" class="">Put your UserName here to starts: <br></label>
                        <input type="text" id="username" placeholder="username ...">
                        <button  class="start" onclick="Start()">  Let's start  </button>
                        <div id="alert-danger"></div>
                    </section>
    `;
}
function countDownToStart(){
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
    index = 0;
    username = "";
    score = 0;
    username = document.getElementById("username").value;
    if(username !== ""){
        document.getElementById('alert-danger').innerText = "Please username is required";
    }else{
        document.querySelector(".container").innerHTML = `
            <article>
                <h1>Quiz well start in <br> <span id="counter-to-start"></span></h1>
            </article>
        `;
        countDownToStart();
    }
}
//   ------------------------------- Getting data -----------------------------------------------------

    let ajax = new XMLHttpRequest()
    let questions = [];
    let size = 0;
    ajax.onreadystatechange = function() {
        if ( ajax.readyState === 4 && ajax.status === 200) {
            questions = JSON.parse(ajax.responseText);
            size = questions.length;
            questions.sort(()=> Math.random() - 0.5 );
        }
    };
    ajax.open("GET", 'assets/js/typescript/data/Question.json', true);
    ajax.send();


//   ---------------------------------------------------------------------------------------

function countDownTimeQuestion() {

    let counter_question = document.querySelector("#counter-question")
    let i = 20;
    const interval = setInterval(() => {
        i--;
        counter_question.innerHTML = i;
        if( i < 10){
            counter_question.classList.add("text-white")
            counter_question.parentElement.style.backgroundColor = "red";
            document.querySelector(".timer-question box-icon").setAttribute("animation","tada");
        }
        if (i === 0) {
            clearInterval(interval);
            counter_question.innerHTML = 'kill';
            nextQuestion();
        }
        document.querySelector(".btn-next")
            .addEventListener("click", ()=> clearInterval(interval))
    }, 1000);
}

function nextQuestion() {
    if(index < size){
        let data = questions;
        let typeInput = data[index].answers.length > 1 ? "checkbox" : "radio"
        let answerContainer = `
                <div class="quiz-container">
                    <h2>
                        ${data[index].question}  
                        <div class="timer-question">
                            <box-icon name='timer' ></box-icon>
                            <span id="counter-question">30</span>
                        </div>
                    </h2>
                    <div class="answer">
        `;
        for(let i = 0; i < data[index].choices.length; i++ ){
            answerContainer += `
                <label for="${i}" id="choice${i}" class="answer-items">
                    ${data[index].choices[i]}
                    <input type="${typeInput}" id="${i}" name="choice" value="${i}" onclick="stylingDivAnswer()">
                </label>
            `;
        }

        answerContainer += `
            <div class="alert-danger">
                
            </div>
            </div>
        <button class="btn-next" onclick="calcAnswer([${data[index].answers}])">next</button>
    </div>`;
        container.innerHTML = answerContainer;
        index++;
        countDownTimeQuestion();
    }else{
        showResult();
    }
}
function showResult(){
    container.innerHTML = `<h1> congratulation ${username} your Score is : ${score}%</h1>`
    localStorage.setItem(username,score);
}
function quizStart(){
    nextQuestion()
}

function calcAnswer(answers){
    if(document.querySelectorAll("input:checked").length > 0){
        document.querySelector(".btn-next").disabled = true;
        if(answers.length === 1){
            let check = document.querySelector("input:checked");
            if(answers[0] === parseInt(check.value)){
                score += 100 / size;
            }
        }else{
            let checks = document.querySelectorAll("input:checked");
            let userChecks = [];
            checks.forEach(check =>{
                userChecks.push(parseInt(check.id));
            })
            if(answers.every((answer)=>userChecks.includes(answer)))
                score += 100 / size;
        }
        nextQuestion();
    }else{
        document.querySelector(".alert-danger").innerText = "please check the correct answers";
    }
}

function stylingDivAnswer() {
    let check = document.querySelectorAll(".answer-items input:checked")
    let all   = document.querySelectorAll('.answer-items')
    all.forEach(e=>e.classList.remove('active'))
    check.forEach(e=>e.parentElement.classList.add('active'))
}
