let username = ""

if(window.location.href === "http://localhost:63342/quize-js/quiz.html"){
    for (let i = 5; i >= 0; i--) {
        setTimeout(() =>{
            document.getElementById("counter-to-start").innerText = `${i}`
            if(i===0){
                document.getElementById("counter-to-start").innerText = `let's Go`
                ajax();
            }
        }, (5 - i) * 1000);
    }
}

function Start(){
    username = document.getElementById("username").value;
    if(username === ""){
        document.getElementById('alert').innerText = "Please username is required";
    }else{
        window.location.href = "./quiz.html"
    }
}

function ajax(){
 let ajax = new XMLHttpRequest()

    ajax.onreadystatechange = function() {
        if ( ajax.readyState === 4 && ajax.status === 200) {
            getData(JSON.parse(ajax.responseText));
        }
    };
    ajax.open("GET", 'assets/js/typescript/data/Question.json', true);
    ajax.send();
}

function getData(data){
    quizStart(data)
}

function quizStart(){

}