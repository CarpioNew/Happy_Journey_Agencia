document.getElementById('boton').addEventListener("click", function(){
	
	var fechaIn = document.getElementById("inicio").value;
	var fechaOut = document.getElementById("fin").value;
	var num = document.getElementById("personas").value;
	
	var presiopersona = num * 1000;
	var diai = parseInt(fechaIn.substr(8,5));
	var diafinal = parseInt(fechaOut.substr(8,5));
	var difdia = diafinal - diai;
	
	var cototal = presiopersona * difdia;
		
	alert(
		"Cotizacion final"+"\n"+
		"Fecha de inicio: " +fechaIn+"\n"+
		"Fecha de salida: " +fechaOut+"\n"+
		"Dias totales: "+difdia+"\n"+
		"Numero de personas: " +num+"\n"+
		"Presion por persona: " +presiopersona+"\n"+
		"total: "+cototal+"\n"
	
	);
	
});