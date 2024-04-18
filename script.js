const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const input = document.querySelector(".input");


function setValue(value) {
    input.value += value;

}
function calculate(){
    result.textContent = eval(input.value.toString());

}
function clearAll() {
    input.value = '';
}
function clearOne()
{
    input.value = input.value.toString().slice(0, -1);
    if (input.value.length == 0) {
        result.textContent = '';
    }
}

function poweroff() {

    const radiobtn = document.getElementsByName("power");

    for (const rdbt of radiobtn) {
         if(rdbt.checked){
        
             for (allbtns of buttons) {
                 
                 if (allbtns.disabled === true) {
                     allbtns.disabled = false;
                 }
                 
                 else
                  allbtns.disabled = true;
                 
                 
             }
    }
    }
   
}