
var color2 = document.getElementsByClassName('orange')
var color3 = document.getElementsByClassName('green')


function stop(){
   
    document.getElementById('red').style.background = "red"
    document.getElementById('red').style.borderColo = "blue"
    document.getElementById('orange').style.background = "#C48004"
    document.getElementById('green').style.background = "#016301"
   alert("Stop!")

   
}

function caution(){
   
    document.getElementById('orange').style.background = "orange"
    document.getElementById('red').style.background = "#9e0000"
    document.getElementById('green').style.background = "#016301"
   alert("Slow Down!")
   
}

function go(){
   
    document.getElementById('green').style.background = "green"
    document.getElementById('orange').style.background = "#C48004"
    document.getElementById('red').style.background = "#9e0000"
   alert("Go Ahead!")
   
}