const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCvXyEzHeLk_uWREo5P4KJ3g&part=snippet%2Cid&order=date&maxResults=5" //cambiamos la fuente del fecth

const CONTENT = null || document.getElementById('content');

const options = {
method: 'GET',
headers: {
	'X-RapidAPI-Key': '9029a9a935mshf04a0ed3bd0cf08p1cb7d1jsncd51adb928e3',
	'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
}
};

/*//Eliminamos el fetch
fetch(`${API}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
*/

//agregamos una funcion asincrona que hara el fetchData.
async function fetchData(urlApi){
		const response = await fetch (urlApi, options);
		const data = await response.json();
		return data;
}

(async () => { // Esta nueva estructura sirve para ejecutar una funcion apenas se lea el archivo de manera automatica.
		try { //se intentara recibir los objetos solicitados
				const videos = await fetchData(API)
				
				let view = `
				${videos.items.map(video => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
				
				`).slice(0,5).join('')
      }`; // El anterior codigo se saca del original html. Con el crearemos un template que se repetira al itinerar en cada elemento
      CONTENT.innerHTML = view;
    }
		catch (error){
      console.log(console.error(error))
    }
})();
