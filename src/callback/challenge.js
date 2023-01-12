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
                const error = new Error('Error ' + urlApi);
                return callback(error, null); //es null porque no se está regresando ningún dato
            };
        };
    };
    xhttp.send();
};

//Callback hell

fetchData(`${API}/products`, function (error1, data1) { //Se realiza la funcion. Puede dar por parametros (null,datos) o (error,null)
    if (error1) return console.error(error1); //si da (error,null), retorna el error y se termina el if con el return.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) { // Se vuelve a llamar a la misma funcion para solicitar un segundo dato
        if (error2) return console.error(error2); // Misma logica
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) { //idem
            if (error3) return console.error(error3); //idem
            console.log(data1[0]); // Si todo sale bien, en consola se imprimira el elemento entero data1[0] y luego el contenido de las propiedades title y name
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

