const container       = document.querySelector(".container")
const progressBar     = document.querySelector(".progress")
const stepperBar      = document.querySelector(".stepper-bar")
const progressCounter = document.querySelector("#progress-counter")
const stepperItem2    = document.querySelector("#stepper-item-2")
const stepperItem3    = document.querySelector("#stepper-item-3")
const stepperLine1    = document.querySelector("#stepper-line-1")
const stepperLine2    = document.querySelector("#stepper-line-2")

let isConnect = false;
let username;
let index;
let score;
let size_progress_bar = 0;
let questions = [];
let size = 0;
let duration = 0;
let startTime = 0;
let endTime = 0;

//   ------------------------------- Getting data -----------------------------------------------------

let ajax = new XMLHttpRequest()
ajax.onreadystatechange = function() {
    if ( ajax.readyState === 4 && ajax.status === 200) {
        questions = JSON.parse(ajax.responseText);
        size = questions.length;
        questions.sort(()=> Math.random() - 0.5 );
    }
};
ajax.open("GET", 'http://localhost:8080/quiz-backend/controller/UserController.php?questions', true);
ajax.send();

verifyUser();
function verifyUser(){
    if(isConnect)
        questStartSession.innerHTML = `
                        <button class="start" onclick="Start()">  Let's start  </button>
`;
}


function rankedComponent(){
    progressBar.classList.add("d-none")
    progressBar.classList.remove("d-block")
    stepperBar.style.display = "none";
    container.classList.add("bg-color-1-25");
    container.classList.remove("bg-color-1-75");
    let localStorageData = new Map();
    for (let key of Object.keys(localStorage)) {
        let value = JSON.parse(localStorage.getItem(key));
        localStorageData.set(key, value);
    }
    const rankedData = new Map([...localStorageData.entries()].sort((b, a) => a[1] - b[1]));

    let content = `
                    <article>
                        <h1>Global Ranked</h1>
                            <table>
                            <thead>
                                <tr>
                                    <th>top</th>
                                    <th>username</th>
                                    <th>score</th>
                                </tr>
                            </thead>
                            </tbody>`;
                let i = 0;
                if(rankedData.size > 0 ) {
                    for (let [key, value] of rankedData){
                        i++;
                        if(key === username){
                            content += `               
                                     <tr class="bg-color-1-75">
                                        <td>${i}</td> 
                                        <td>${key}</td> 
                                        <td>${value}%</td> 
                                    </tr>           
                            `;
                            continue;
                        }
                        content += `               
                                     <tr>
                                        <td>${i}</td> 
                                        <td>${key}</td> 
                                        <td>${value}%</td> 
                                    </tr>           
                        `;
                    }
                    content +=`</tbody>
                                             </table>
                                    </article>
                    `;
                }else{
                    content = `<article>
                                    <h1>Global Ranked</h1>
                                    <div class='alert-warning'> No ranked is saved </div>
                                </article>`
                }


    container.innerHTML = content;
}

function dashboardComponent(){
    progressBar.classList.add("d-none")
    progressBar.classList.remove("d-block")
    stepperItem2.classList.remove("bg-color-1-50")
    stepperLine1.classList.remove("bg-color-1-50")
    stepperItem3.classList.remove("bg-color-1-50")
    stepperLine2.classList.remove("bg-color-1-50")
    stepperBar.style.display = "flex";
    container.classList.remove("bg-color-1-25");
    container.classList.add("bg-color-1-75");
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
                    <section id="questStartSession">
                        <label for="username" class="">Put your UserName here to starts: <br></label>
                        <input type="text" id="username" placeholder="username" required><br>
                        <input type="password" id="password" placeholder="password" required><br>
                        <button class="start" onclick="login()">  Let's start  </button>
                        <div id="alert-danger"></div>
                    </section>
    `;
    verifyUser();
}

function countDownToStart(){
    document.querySelector(".bg-color2")
    for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                progressBar.classList.remove("d-none")
                progressBar.classList.add("d-block")
                stepperItem2.classList.add("bg-color-1-50")
                stepperLine1.classList.add("bg-color-1-50")
                document.getElementById("counter-to-start").innerText = `let's Go`
                setTimeout(()=>nextQuestion(), 2000);
            }
        }, (5 - i) * 1000);
    }
}

function login(){
    username = document.getElementById("username").value;
    let password = document.getElementById("password").value;


    ajax.open('POST', "../../quiz-backend/controller/Authentication.php", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    ajax.send("login&username="+username+"&password="+password);

    function getResponseLogin(resp) {
        isConnect = resp;
        Start();
    }

    ajax.onreadystatechange = ()=>{
        if(ajax.readyState === 4 && ajax.status === 200){
            console.log(ajax.responseText);
            getResponseLogin(JSON.parse(ajax.responseText));
        }
    }
}

function Start(){
    verifyUser();
    index = 0;
    score = 0;
    progressCounter.innerText = '0%';
    if(isConnect){

        startTime = Date.now();
        document.querySelector(".container").innerHTML = `
            <article>
                <h1>Quiz well start in <br> <span id="counter-to-start"></span></h1>
            </article>
        `;
        countDownToStart();
    }else{
        document.getElementById('alert-danger').innerText = "username or password is incorrect";
    }
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
                            <box-icon name='timer' size='lg' ></box-icon>
                            <span id="counter-question">20</span>
                        </div>
                    </h2>
                    <div class="answer">
        `;
        for(let i = 0; i < data[index].choices.length; i++ ){
            answerContainer += `
                <label for="${i}" id="choice${i}" class="answer-items bg-color-2-50">
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
        stepperItem3.classList.add("bg-color-1-50")
        stepperLine2.classList.add("bg-color-1-50")

        endTime = Date.now();
        function formatDuration(time) {
            let date = new Date()
            console.log(time)
            console.log(date.getHours())
            return `${date.getHours()+'h'+date.getMinutes()+'min'+date.getSeconds()+'s'}`;
        }
        duration = formatDuration(endTime - startTime);
        showResult();
    }
}

function countDownTimeQuestion() {
        let counter_question = document.querySelector("#counter-question")
        let i = 20;
        const interval = setInterval(() => {
            try{
                i--;
                counter_question.innerText = `${i}`;
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
                        updateProgressBar();
                        setTimeout(()=>{nextQuestion();}, 1000)
                    }, 1000)
                }

                document.querySelector(".btn-next")
                    .addEventListener("click", ()=> {
                        clearInterval(interval)
                    })

                document.getElementById('rankedComponent')
                    .addEventListener("click", ()=> clearInterval(interval))

                document.getElementById('dashboardComponent')
                    .addEventListener("click", ()=> clearInterval(interval))
            }catch (e){
                clearInterval(interval);
            }

        }, 1000);

}

function updateProgressBar(){
    size_progress_bar += 100/size;
    for (let i = size_progress_bar - 100/size , j = 0; i <= size_progress_bar; i++, j++) {
        setTimeout(function() {
            progressCounter.innerText = `${i}%`
        }, 50 * j );
    }
    document.querySelector(".progress-bar").style.width = `${size_progress_bar}%`;
}

function calcAnswer(answers){
    if(document.querySelectorAll("input:checked").length > 0){
        document.querySelector(".btn-next").disabled = true;
        updateProgressBar()

        if(answers.length === 1){
            let check = document.querySelector("input:checked");
            if(answers[0] === parseInt(check.value)){
                score += 100 / size;
            }
        }else{
            let checks = document.querySelectorAll("input:checked");
            let userChecks = [];
            checks.forEach(check =>{
                userChecks.push(parseInt(check.value));
            })
            if(answers.every((answer)=>userChecks.includes(answer))) // peut être une beug
                score += 100 / size;
        }
        nextQuestion();
    }else{
        document.querySelector(".alert-danger").innerText = "please check the correct answers";
    }
}

function showResult(){
    localStorage.setItem(username,score);
    if(score >= 75){
        container.innerHTML = ` <div class="container-result"> 
                                <span class="text-green">congratulation</span> ${username} <br><br>
                                Your score is : <br><br> <span class="text-boald text-blue">${score}%</span>
                                <br> time passed :  ${duration}
                                </div>`
    }else{
        container.innerHTML = ` <div class="container-result"> ${username}<br>
                                <span class="text-red">Unfortunatelty</span> you are not succes <br><br>
                                Your score is : <br><br> <span class="text-boald text-blue">${score}%</span>
                                <br> time passed :  ${duration}
                                </div>`
    }
}

function stylingDivAnswer() {
    let check = document.querySelectorAll(".answer-items input:checked")
    let all   = document.querySelectorAll('.answer-items')
    all.forEach(e=>e.classList.remove('bg-color-2-100'))
    check.forEach(e=>e.parentElement.classList.add('bg-color-2-100'))
}