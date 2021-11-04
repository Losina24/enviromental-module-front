function getDevicesByCouncilId(councilId) {
	fetch("http://localhost:8080/v2/enviromental/devices/council/" + councilId, {
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

function storeDevice(name, mac) {
	
    fetch("http://localhost:8080/v2/enviromental/devices/", {
		method: "POST",
        body: {
            "name": name,
            "mac": mac,
            "gatewayId": 1,
            "latitude": 0,
            "longitude": 0
        },
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Origin': 'http://localhost:8080'

        }
	})
		.then((response) => {
            console.log(response);
            //window.location.reload();
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
    console.log(medicion)
	element.innerHTML +=
		"<li class='d-flex justify-content-between'><p><span class='strong'>Valor: </span>" +
		medicion.name +
		" <span class='strong'>Mac: </span> " +
		medicion.mac +
		" <span class='strong'>Coordenadas: </span> " +
		"X: " + medicion.coords.latitude + ", Y: " + medicion.coords.longitude
		"</p></li>";
}


