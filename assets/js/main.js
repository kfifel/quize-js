let username = ""
let index = 0;
function countDown(){
    for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = `let's Go`
                quizStart()
            }
        }, (5 - i) * 1000);
    }
}

function Start(){
    username = document.getElementById("username").value;
    if(username === ""){
        document.getElementById('alert').innerText = "Please username is required";
    }else{
        document.querySelector(".container").innerHTML = `
            <article>
                <h1>Quiz well start in <br> <span id="counter-to-start">5</span></h1>
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
    <div>
        <h2>  ${data[index].question}  </h2>
        <div class="answer">
    `;
    for(var i = 0; i < data[index].choices.length; i++ ){
        answerContainer += `
        <div class="answer-items">
            <label for="choice1">${data[index].choices[i]}</label>
            <input type="radio" id="choice${i}" name="choice" value="i">
        </div> 
        `;
    }

    answerContainer += `</div></div>`;
    container.innerHTML = answerContainer;
}

function quizStart(){
    nextQuestion()
}

function showQuestions(){
    quizStart()
}