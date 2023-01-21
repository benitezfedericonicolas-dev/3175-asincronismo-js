import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) { 
    /* Definimos la funcion */
    const response = fetch(urlApi, {
        /* anteriormente dispusimos solo de la url para el metodo GET. 
        Ahora, un segundo parametro permite incertar un objeto con caracteristicas pretererminada que son consensuadas */
        method: 'POST', 
        mode: 'cors',
        credentials: 'same-origin', //Se explicita, pero same-origins es de todas forms el predeterminado en caso de ausencia.
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        /* El método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON,  */
    });
    return response;
}

const DATA = {
    /* Procedemos a preparar el objeto en cuestion a ser creado en el servidor */
    "title": "frSeverus Producto",
    "price": 303456,
    "description": " lorem ipsum ",
    "categoryId": 1,
    "images": [
        "https://preview.redd.it/o5udiiestt391.jpg?width=580&format=pjpg&auto=webp&v=enabled&s=a8dfad1da1e3d74b0ff21b5a2c9a449124287f52"]
}


postData(`${API}/products`, DATA)
    .then(response => response.json())
    .then(data => console.log(data));
