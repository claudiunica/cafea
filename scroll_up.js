window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    document.getElementById("demo").innerHTML = t;
}


function myFunction() {
    var x, text;
    x = document.getElementById("numb").value;

    if (isNaN(x) || x <= 9 || x > 10) {
        text = "Input not valid \uD83D\uDE00";
    } else {
        text = "Input OK \uD83D\uDE00";
        var img = document.createElement("img");
		img.src = "fireworks.png";
		var src = document.getElementById("nota");
		src.appendChild(img);
    }
    document.getElementById("input").innerHTML = text;
}