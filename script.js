const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const input = document.querySelector(".input");

function setValue(values) {
   
    if (input.value.length === 0){
        if ((values === '0') || (values === "-") || (values === "+") || (values === "00") || (values === "*") || (values === "/")) {
            textContent = "";            
        }
        else
        input.value += values;
    }
    else
    input.value += values;
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

    for (const rdbt of radiobtn) {  //for ll buttons
         if(rdbt.checked){
             for (allbtns of buttons) {    // for all radio buttons
                 if (allbtns.disabled === true) {
                     allbtns.disabled = false;
                 }
                 else
                  allbtns.disabled = true;  
       }
    }
  }
}