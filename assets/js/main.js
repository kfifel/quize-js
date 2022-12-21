let username = ""
const answer = [1, 2, 3, 4, 5];

for(var i = 0; i< 5; i++){
    const index = Math.floor(Math.random() * answer.length);
    const value = answer[index];
    console.log( "index: " + index);
    console.log(  value );
    answer.splice(index, 1)
}

function Start(){
    alert('alo')
    ajax()
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
    console.log(data)
}