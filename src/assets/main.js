const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content') ;

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '44ccaf15b8msh21c2c9c8c4a7d06p14c3c6jsn985851d42b05',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};
/*
fetch('https://youtube-v31.p.rapidapi.com/search?channelId=UC-lHJZR3Gqxm24_Vd_AJ5Yw&part=snippet%2Cid&order=date&maxResults=9', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));*/

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
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
    `).slice(0,4).join('')}   //slice 0,4 regresa solo los primeros 4 elementos del array

    `;
    content.innerHTML = view;
  } catch (error){
    console.log(error);
    
  }
})(); //se ejecuta funcion anonima