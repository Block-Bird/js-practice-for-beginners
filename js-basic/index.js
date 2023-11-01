var button = document.getElementById("myButton");
var paragraph = document.getElementById("demo");

button.addEventListener("click", function(){
    paragraph.textContent = "Text is changed by JS";
})