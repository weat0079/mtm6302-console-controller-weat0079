function fontchange(n){
    var paragraph = document.getElementById('para');
    paragraph.style.fontSize = n + "px";
}

var buttons = document.querySelector(".buttons");
var button = buttons.querySelectorAll(".button");

for(var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function(){
        var current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active"
    })
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
});

function red(){
    document.getElementById('para').style.color="red";
}
function green(){
    document.getElementById('para').style.color="green";
}
function blue(){
    document.getElementById('para').style.color="blue";
}

function changeColor(v) {
    document.getElementsByTagName("body")[0].style.backgroundColor = v.getAttribute("value")
}