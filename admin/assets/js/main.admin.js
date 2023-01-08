const container = document.querySelector(".container")
const searchInput = document.querySelector("#search-text")
//const tbody = document.getElementsByName("tbody")
ajax = new XMLHttpRequest();
let questions = [] ;
getAllQuestions();
function searchQuestions(){
    getAllQuestions(searchInput.value);
}

function getAllQuestions(search){
        if(!search)
            ajax.open('GET', 'http://localhost:8080/quiz-backend/controller/AdminController.php?questions', true);
        else
            ajax.open('GET', 'http://localhost:8080/quiz-backend/controller/AdminController.php?search='+search+'', true);


        ajax.send();
        ajax.onreadystatechange = ()=>{
            if(ajax.status === 200 && ajax.readyState === 4){
                console.log(ajax.response)
                setData(JSON.parse(ajax.response));
            }
        }
}
function setData(res){
    questions = res;
    showQuestion();
}

function showQuestion(){
    tbody.innerHTML = '';
    questions.forEach((q)=>{
        tbody.innerHTML += `
        <tr>
                        <td>${q.id}</td>
                        <td>${q.question}</td>
                        <td class="d-flex">
                            <button class="btn" onclick="overview()" ><i class="fa fa-eye text-blue"></i></button>
                            <button class="btn" onclick="editQuestion(${q.id})"><i class="fa fa-solid fa-pen text-green"></i></button>
                            <button class="btn" onclick="deleteQuestion(${q.id})" ><i class="fa fa-trash text-red"></i></button>
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
    let question = document.getElementById('question').value;
    let choicesInputs = document.querySelectorAll('input[name="choice"]');
    let correctChoicesInput = document.querySelectorAll('.form-group-item input:checked');
    let choices=[];
    choicesInputs.forEach(e=>choices.push(e.value))
    let answers=[];
    correctChoicesInput.forEach(e=>answers.push(e.value))

    let data = {
        "question":question,
        "choices":[...choices],
        "answers":[...answers]
    }


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/quiz-backend/controller/AdminController.php?save_question=1",
        data: data,
        ContentType: 'application/json',
        success: function(response) {
            Swal.fire({
                position: 'center-center',
                icon: 'success',
                title: 'Your work has been saved ',
                showConfirmButton: false,
                timer: 1500
            })
            getAllQuestions();
            showQuestion();
        }
    });

}
function cancelAction() {
    alert("The action was cancelled!");
}

function editQuestion(id) {

}
function overview() {

}
function deleteQuestion(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            ajax.open('GET', 'http://localhost:8080/quiz-backend/controller/AdminController.php?question-delete='+id, true);
            ajax.send();
            ajax.onreadystatechange = ()=>{
                if(ajax.status === 200 && ajax.readyState === 4){
                    console.log(ajax.response)
                    if(parseInt(ajax.response)){
                        getAllQuestions()
                        Swal.fire(
                            'Deleted!',
                            `Question with id ${id} has been deleted.`,
                            'success'
                        )
                    }else{
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                        })
                    }
                }
            }
        }
    })

}