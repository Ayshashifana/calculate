var answer = document.getElementById("input-box")


function display(num){
    answer.value += num
}

function clr(){
    answer.value = "";
    
}
function calc(){
    answer.value = eval(answer.value)
}
function clrea(){
    answer.value=answer.value.toString().slice(0,-1);
    
    
}