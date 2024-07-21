const textbox = document.getElementById("textbox");
const pop = document.getElementById("Pop");
const shift = document.getElementById("Shift");
const unshift = document.getElementById("Unshift");
const array = document.getElementById("array");

let testarray = [];

function arraydisplay(){
    array.innerHTML = '';
    
        array.textContent = [...testarray].join(", ");

}

document.getElementById('Push').onclick = function() {
    let temp = Number(textbox.value);
    testarray.push(temp);
    arraydisplay();
}
pop.onclick = function() {
    if(testarray.length==0){
        window.alert('Array is empty');
    }else{
    testarray.pop();
    arraydisplay();
}}

shift.onclick = function() {
    if(testarray.length==0){
        window.alert('Array is empty');
    }else{
    testarray.shift();
    arraydisplay();
}
}

unshift.onclick = function() {
    let temp = Number(textbox.value);
    testarray.unshift(temp);
    arraydisplay();

}