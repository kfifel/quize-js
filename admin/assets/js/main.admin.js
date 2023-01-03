const container = document.querySelector(".container")
//const tbody = document.getElementsByName("tbody")
ajax = new XMLHttpRequest();

let questions = [] ;
getAllQuestions();
function getAllQuestions(){
    ajax.open('GET', 'http://localhost:8080/quiz-backend/controller/AdminController.php?questions', true);
    ajax.send();
    ajax.onreadystatechange = ()=>{
        if(ajax.status === 200 && ajax.readyState === 4){
            setData(JSON.parse(ajax.response));
        }
    }
}
function setData(res){
    questions = res;
    showQuestion();
}

function showQuestion(){

    questions.forEach((q)=>{
        tbody.innerHTML += `
        <tr>
                        <td>${q.id}</td>
                        <td>${q.question}</td>
                        <td class="d-flex">
                            <button class="btn"><i class="fa fa-trash text-green"></i></button>
                            <button class="btn"><i class="fa fa-solid fa-pen text-blue"></i></button>
                            <button class="btn"><i class="fa fa-eye text-red"></i></button>
                        </td>
                    </tr>
        `;
    })
}


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const close = document.getElementsByClassName("close")[0];
const confirmBtn = document.getElementById("confirm-btn");
const cancelBtn = document.getElementById("cancel-btn");


btn.onclick = () => {
    modal.style.display = "block";
}
close.onclick = () => {
    modal.style.display = "none";
}
window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
confirmBtn.onclick = () => {
    modal.style.display = "none";
    createQuestion();
}
cancelBtn.onclick = () => {
    modal.style.display = "none";
    cancelAction();
}
function createQuestion() {
    let question = document.getElementById('question')
    let choicesInputs = document.querySelectorAll('input[name="choice"]');
    let correctChoicesInput = document.querySelectorAll('.form-group-item input:checked');
    let choicesInputsNotEmpty = [];
        choicesInputs.forEach(input=>{
            if(input.value !== "")
                choicesInputsNotEmpty.push(input);
        })


}
function cancelAction() {
    alert("The action was cancelled!");
}

