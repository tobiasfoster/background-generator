var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var cssHeader = document.getElementById('cssGradient');


var color1Val = color1.value;
var color2Val = color2.value;
cssHeader.innerHTML = "Gradient colors: " + color1Val + " and " + color2Val;




color2.addEventListener('input', function(event) {

    let val = color2.value;
    color2Val = val;
    document.body.style.background = "linear-gradient(to right," + color1Val + " , " + val +")";
    cssHeader.innerHTML = "Gradient colors: " + color1Val + " and " + color2Val;
})


color1.addEventListener('input', function(event) {

    let val = color1.value;
    color1Val = val;
    

    document.body.style.background = "linear-gradient(to right," + val + " , " + color2Val +")";
    cssHeader.innerHTML = "Gradient colors: " + color1Val + " and " + color2Val;
})

document.body.style.anim

