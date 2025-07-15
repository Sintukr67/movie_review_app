// API link to fetch popular movies
const APILINK =
  "https://api.themoviedb.org/3/movie/popular?api_key=6c04c6a3664a2010fec7fddb48cdb1ac&page=1";
// Image base URL for posters
const IMG_PATH = "https://image.tmdb.org/t/p/w500";
// Search API to fetch search results
const SEARCHAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=6c04c6a3664a2010fec7fddb48cdb1ac&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      data.results.forEach((element) => {
        const div_card = document.createElement("div");
        div_card.setAttribute("class", "card");

        // const div_row=document.createElement('div');
        // div_row.setAttribute('class','row');

        // const div_column=document.createElement('div');
        // div_column.setAttribute('class','column');

        const image = document.createElement("img");
        image.setAttribute("class", "thumbnail");
        image.setAttribute("id", "image");

        const title = document.createElement("h3");
        title.setAttribute("id", "title");

        // const center=document.createElement('center');

        title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">reviews</a>`;
        image.src = IMG_PATH + element.poster_path;

        // center.appendChild(image);
        // div_card.appendChild(center);
        // div_card.appendChild(title);
        // div_column.appendChild(div_card);
        // div_row.appendChild(div_column);

        // main.appendChild(div_row);
        div_card.appendChild(image);
        div_card.appendChild(title);
        main.appendChild(div_card);
      });
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = ``;
  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem);
    search.value = "";
  }
});
