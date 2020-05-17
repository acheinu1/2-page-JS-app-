var NumONE = document.getElementById("num-one");
var NumTWO = document.getElementById("num-two");
var addSUM = document.getElementById("sum-of-Num");

// example of javascriptevents
// click, mouseleave, mouseenter, 
//mousedown, mouseup, mousemove, keydown, keyup, blur, focus


NumONE.addEventListener("input",add)
NumTWO.addEventListener("input", add)

function add(){
    var inputOne =parseFloat (NumONE.value) || 0;
    var inputTwo =parseFloat (NumTWO.value) || 0;
    // var sum = inputOne + inputTwo
    addSUM.innerHTML= "the sum of " + inputOne+" "+"&" +" " + inputTwo +" "+ "is" + " "+ (inputOne + inputTwo);
}