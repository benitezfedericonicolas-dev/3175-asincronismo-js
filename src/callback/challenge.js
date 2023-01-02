const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //llamado al XmlHttpRequest
const API = 'https://api.escuelajs.co/api/v1'; 

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //referencia a new XMLHttpRequest

    xhttp.open('GET', urlApi, true); 
    xhttp.onreadystatechange = function (event) { 
        if (xhttp.readyState === 4) { //si el estado ha sido completada la llamada
            if (xhttp.status === 200) { //el servido responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText)); //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
            } else {
                const error = newError('Error' + urlApi);
                return callback(error, null); //es null porque no se está regresando ningún dato
            }
        } 
    }
    xhttp.send();
}
