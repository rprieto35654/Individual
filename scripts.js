var datos;
var columnas = 3;
var counter = 0;

function writeTable() {
	var html = '';

	for (var i = 0; i < datos.length / columnas; i++){
		html += '<tr>';
		for (var j = 0; j < columnas; j++){
			html += '<td>' + datos[counter] + '</td>'
			counter++;
		}
		html += '</tr>';
	}
	$("#body").append(html);

}

function saveData() {
	var name = $("#name").val(),
		mail = $("#mail").val(),
		comment = $("#comment").val();
	if(name.trim() != "" && mail.trim() != "" && comment.trim() != "")
	{
		datos.push(name, mail, comment);
		localStorage.setItem("datos", JSON.stringify(datos));
	}
	else 
	{
		alert("Ingresa todos los campos.");
	}

	writeTable();
}

function checkData() {
	if(localStorage.getItem("datos") == null){
		datos = [];
	}
	else {
		datos = JSON.parse(localStorage.getItem("datos"));
	}
}
