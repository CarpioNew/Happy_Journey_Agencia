var videoUno = document.getElementById("video1");
var videoDos = document.getElementById("video2");
var videoTres = document.getElementById("video3");
var videoCua = document.getElementById("video4");
var videoCin = document.getElementById("video5");
var videoSeis = document.getElementById("video6");

function playpause1(){
	if(videoUno.paused)
		videoUno.play();
			else
				videoUno.pause();
}

function playpause2(){
	if(videoDos.paused)
		videoDos.play();
			else
				videoDos.pause();
}
function playpause3(){
	if(videoTres.paused)
		videoTres.play();
			else
				videoTres.pause();
}
function playpause4(){
	if(videoCua.paused)
		videoCua.play();
			else
				videoCua.pause();
}

function playpause5(){
	if(videoCin.paused)
		videoCin.play();
			else
				videoCin.pause();
}

function playpause6(){
	if(videoSeis.paused)
		videoSeis.play();
			else
				videoSeis.pause();
}




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



