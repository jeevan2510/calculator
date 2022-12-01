
function display(num){
inputBox.value += num
}//display no. when clicking on buttons
function allClr(){
    inputBox.value=""
}//all crearing
function equal(){
    inputBox.value= eval(inputBox.value);
}//evaluating oopertaions
function back(){
    inputBox.value=inputBox.value.slice(0,-1)
}