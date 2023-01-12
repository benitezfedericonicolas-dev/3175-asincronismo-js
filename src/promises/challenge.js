import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fecthData(urlAPI) { 
    return fetch(urlAPI); //fetch es una promesa de la libreria
};

/* MODELO DE OBJETO DEL SERVIDOR
[
  {
    "id": 4,
    "title": "Handmade Fresh Table",
    "price": 687,
    "description": "Andy shoes are designed to keeping in...",
    "category": {
      "id": 5,
      "name": "Others",
      "image": "https://placeimg.com/640/480/any?r=0.591926261873231"
    },
    "images": [
      "https://placeimg.com/640/480/any?r=0.9178516507833767",
      "https://placeimg.com/640/480/any?r=0.9300320592588625",
      "https://placeimg.com/640/480/any?r=0.8807778235430017"
    ]
  }
  // ...
]
 */

fecthData(`${API}/products`)
    .then(resultado => resultado.json())
    /* 
        recibe el objeto del servidor, pero no se puede usar asi. Debe ser "decodificado"
        para eso, tomamos el retorno del fetch y retornamos el retorno del metodo json(), que devolvera un array de objetos
     */
    .then(productos => { 
        /* resultado ahora es el retorno del anterior .then
        Nos interesa volcar el numero ID de cierto objeto (en el caso originarl el objeto 0)
         */
        return fecthData(`${API}/products/${productos[17].id}`)
        /* Retornamos el resultado de una nueva solicitud, esta vez, mas especifica, a partir de lo ya buscado anteriormente
         */
    })
    .then(resultado2 => resultado2.json()) //se pasa el nuevo dato por el metodo .json
    .then(producto => {
        console.log(producto.title)
        //imprimimos un dato que este en este nivel, a saber, el titulo

        return fecthData(`${API}/categories/${producto.category.id}`)
        /* ${API}/categories/${primerResultado[0].id.category.id}
        Lo retorna
         */
    })
    .then(response => response.json()) //se pasa el nuevo dato por json
    .then(categoria => {
        /*
          Se devuelve el name
           */
        console.log(categoria.name);
    })
    .catch(error => console.log(error))
    .finally(() => console.log('Finally'));




/* function postData(urlAPI, data){
    const response = fetch(urlAPI, {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    return response;
}

const valor = {
    "title": "Severus Producto",
    "price": 100,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products/`, data)
    .then(response => { response.json()})
    .then(data => console.log(data)); */