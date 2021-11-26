//script carrusel
var myIndex = 0;



function carrusel(){
var i;
var x = document.getElementsByClassName("imagenes");
for(i = 0; i < x.length; i++){
x [i].style.display = "none";
}
myIndex++;
if(myIndex > x.length){
myIndex = 1;
}
x[myIndex-1].style.display = "block";
setTimeout(carrusel, 3000); //cambiar cada 1.5 segundos
}
carrusel();


var mivideo1 = document.getElementById("video1");
var mivideo2 = document.getElementById("video2");
var mivideo3 = document.getElementById("video3");
var mivideo4 = document.getElementById("video4");
var mivideo5 = document.getElementById("video5");
var mivideo6 = document.getElementById("video6");

function playpause1(){
	if(mivideo1.paused)
		mivideo1.play();

	else
		mivideo1.pause();
}

function playpause2(){
	if(mivideo2.paused)
		mivideo2.play();

	else
		mivideo2.pause();
}
function playpause3(){
	if(mivideo3.paused)
		mivideo3.play();

	else
		mivideo3.pause();
}
function playpause4(){
	if(mivideo4.paused)
		mivideo4.play();

	else
		mivideo4.pause();
}

function playpause5(){
	if(mivideo5.paused)
		mivideo5.play();

	else
		mivideo5.pause();
}

function playpause6(){
	if(mivideo6.paused)
		mivideo6.play();

	else
		mivideo6.pause();
}


