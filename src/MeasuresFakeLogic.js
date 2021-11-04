function getAllMeasuresByDeviceId(deviceId) {
	fetch("http://localhost:8080/v2/enviromental/measures/" + deviceId, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((data) => {
			var element = document.getElementById("lista");
			var i = 0;

			element.innerHTML = "";

			data.response.forEach((medicion) => {
				imprimirMedicion(medicion, i);
				i = i++;
			});
		})
		.catch((err) => console.log(err));
}

function imprimirMedicion(medicion, i) {
	var element = document.getElementById("lista");

	var li = document.createElement("li");
	li.setAttribute("id", "l" + i);
	li.setAttribute("class", "d-flex justify-content-between");

	var d = new Date(medicion.date);
	let month = d.getMonth() + 1;
	let date = d.getDate() + "-" + month + "-" + d.getFullYear() + " ";

	if (d.getHours().toString().length < 2) {
		date += "0" + d.getHours() + ":";
	} else {
		date += d.getHours() + ":";
	}

	if (d.getMinutes().toString().length < 2) {
		date += "0" + d.getMinutes() + ":";
	} else {
		date += d.getMinutes() + ":";
	}

	if (d.getSeconds().toString().length < 2) {
		date += "0" + d.getSeconds();
	} else {
		date += d.getSeconds();
	}

	element.innerHTML +=
		"<li class='d-flex justify-content-between'><p><span class='strong'>Valor: </span>" +
		medicion.value +
		" <span class='strong'>Unidad: </span> " +
		medicion.unit +
		" <span class='strong'>Tipo: </span> " +
		medicion.type +
		"</p></li>";
}

getAllMeasuresByDeviceId(1)

setTimeout(function(){
	window.location.reload(1);
 }, 5000);