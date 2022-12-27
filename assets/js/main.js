const container = document.querySelector(".container")
const progressBar = document.querySelector(".progress")
const progressCounter = document.querySelector("#progress-counter")
const stepperItem = document.querySelector(".stepper-item")
const stepperLine = document.querySelector(".stepper-line")

let username;
let index;
let score;
let size_progress_bar = .0;
function rankedComponent(){
    progressBar.classList.add("d-none")
    progressBar.classList.remove("d-block")
    let rankedData = new Map();
    for (let key of Object.keys(localStorage)) {
        let value = JSON.parse(localStorage.getItem(key));
        rankedData.set(key, value);
    }

    let content = `
                    <article>
                        <h1>Global Ranked</h1>
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
                    </article>
    `;


    container.innerHTML = content;
}
function dashboardComponent(){
    progressBar.classList.add("d-none")
    progressBar.classList.remove("d-block")
    size_progress_bar = 0;
    document.querySelector(".progress-bar").style.width = "0";
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
    document.querySelector(".bg-color2")
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
    progressBar.classList.remove("d-none")
    progressBar.classList.add("d-block")
    stepperItem.classList.add("bg-color2")
    stepperItem.classList.remove("bg-color1")
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
        let i = 6;
        const interval = setInterval(() => {
            try{
                i--;
                counter_question.innerHTML = i;
                if( i < 10){
                    counter_question.classList.add("text-white")
                    counter_question.parentElement.style.backgroundColor = "red";
                    document.querySelector(".timer-question box-icon").setAttribute("animation","tada");
                }
                if (i === 0) {
                    clearInterval(interval);
                    document.querySelector(".btn-next").setAttribute("disabled", "disabled");
                    setTimeout(()=>{
                        counter_question.innerHTML = '--';
                        size_progress_bar += 100/size;
                        for (let i = size_progress_bar - 100/size + 0.5, j = 0; i <= size_progress_bar; i++, j++) {
                            setTimeout(function() {
                                progressCounter.innerText = `${i}%`
                            }, 50 * j );
                        }
                        setTimeout(()=>{nextQuestion();}, 1000)
                    }, 1000)
                }
                document.querySelector(".btn-next")
                    .addEventListener("click", ()=> clearInterval(interval))
            }catch (e){
                clearInterval(interval);
            }

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
                            <box-icon name='timer'" ></box-icon>
                            <span id="counter-question">20</span>
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
    localStorage.setItem(username,score);
    container.innerHTML = `<h1> congratulation ${username} your Score is : ${score}%</h1>`
}
function quizStart(){
    nextQuestion()
}

function calcAnswer(answers){
    if(document.querySelectorAll("input:checked").length > 0){
        document.querySelector(".btn-next").disabled = true;
        size_progress_bar += 100/size;
        for (let i = size_progress_bar - 100/size, j = 0; i <= size_progress_bar; i++, j++) {
            setTimeout(function() {
                progressCounter.innerText = `${i}%`
            }, 50 * j );
        }
        document.querySelector(".progress-bar").style.width = `${size_progress_bar}%`;

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
