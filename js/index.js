const key = "23313cb0700ea79bd480389020e9c60b";
let lang = "es";
let idMovie = "228150";
const contenedorCards = document.querySelector(".content");
const contenedorPrincipal = document.querySelector(".pelicula-principal");

const cards = (array) => {
  const arrayReducido = array.reduce((acc, element) => {
    let genero = genres(element.genre_ids);
    return (
      acc +
      `<div class="wrapper">
      <div class="card">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path}" class="img1" />
        <h1 class="title">${element.title}</h1>
        <p class="text">${element.overview}</p>
        <p class="clickImagen">${element.id}</p>
        <p class="category"><ion-icon name="star"></ion-icon>IMDb ${element.vote_average}</p>
        <p class="views">${genero}</p>
        <p class="views date" >${element.release_date}</p>
      </div>
    </div> `
    );
  }, "");
  contenedorCards.innerHTML = arrayReducido;
};

function selectLang() {
  let option2 = document.querySelector("#language").selectedIndex;
  if (option2 == 1) {
    lang = "es";
    textEsp();
    getMovies();
  } else {
    lang = "en";
    textEng();
    getMovies();
  }
}
function genres(array) {
  let found = [];
  for (var i = 0; i < genre.length; i++) {
    for (var j = 0; j < 3; j++) {
      if (genre[i].id == array[j]) found = [...found, genre[i].name];
    }
  }
  let element = found.map((e) => e).join(", ");
  return element;
}
function textEng() {
  document.querySelector("#inicio").innerText = "Home";
  document.querySelector("#tendencia").innerText = "Trending";
  document.querySelector("#peliculas").innerText = "Movies";
  document.querySelector("#series").innerText = "Web Series";
  document.querySelector("#comunidad").innerText = "Community";
  busqueda(idMovie);
}
function textEsp() {
  document.querySelector("#inicio").innerText = "Inicio";
  document.querySelector("#tendencia").innerText = "tendencia";
  document.querySelector("#peliculas").innerText = "peliculas";
  document.querySelector("#series").innerText = "series";
  document.querySelector("#comunidad").innerText = "comunidad";
  busqueda(idMovie);
}
/* llenar cuadricula */
function getMovies() {
  /* fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key}&language=${lang}`) */
  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=${lang}&primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&include_adult=true&include_video=false&page=1`
  )
    .then((response) => response.json())
    .then((response) => {
      cards(response.results);
      setTimeout(() => {
        selectId();
      }, 500);
    })
    .catch((err) => console.error(err));
}
/* Seleccion Individual */
function busqueda(id) {
  const options = {
    method: "GET",
    headers: {
      /* "X-RapidAPI-Key": "725f7c89a8msh38cea6e80ba5430p1cc6f3jsn08bcad0371ed",
      "X-RapidAPI-Host": "streaming-availability.p.rapidapi.com", */
      'X-RapidAPI-Key': 'cdda214c9dmshba50a9277c3a300p1601f0jsna4dc29203c54',
	  	'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
    },
  };
  fetch(
    `https://streaming-availability.p.rapidapi.com/get/basic?country=us&tmdb_id=movie/${id}&output_language=${lang}`,
    options
  )
    .then((response) => response.json())
    .then((response) => imagenClick(response))
    .catch((err) => console.error(err));
}
function imagenClick(element) {
  let genero = genres(element.genres);
  const url = "https://image.tmdb.org/t/p/w780";
  let play = "Reproducir";
  let info = "Más información";
  contenedorPrincipal.setAttribute(
    "style",
    `background: linear-gradient(rgba(0, 0, 0, .50) 0%, rgba(0,0,0,.50) 100%), url(${
      url + element.backdropPath
    })`
  );
  contenedorPrincipal.style.backgroundSize = "cover";
  contenedorPrincipal.style.backgroundPosition = "initial";

  if (lang == "en") {
    play = "Watch Now";
    info = "More Details";
  }
  contenedorPrincipal.innerHTML = `<div class="contenedor">
    <h3 class="titulo">${element.title}</h3>
    <div class="meta-wrapper">
          <div class="badge-wrapper">
            <div class="badge badge-fill">PG ${element.age}</div>
            <div class="badge-outline"><ion-icon name="star" id="star"></ion-icon>IMDb ${element.tmdbRating}</div>
          </div>
          <div class="ganre-wrapper">
            <a href="#">${genero}</a>
          </div>
          <div class="date-time">
            <div>
              <ion-icon name="calendar-outline" size="large"></ion-icon>
              <span id="date">${element.year}</span>
            </div>
            <div>
              <ion-icon name="time-outline" size="large"></ion-icon>
              <span id="time">${element.runtime} min</span>
            </div>
          </div>
        </div>
    <p class="descripcion">${element.overview}</p>
    <button class="boton" id="play">
      <ion-icon class="info" name="play-circle-outline" size="large"></ion-icon> ${play}</button>
    <button class="boton" id="info">
      <ion-icon class="info" name="information-circle-outline" size="large"></ion-icon>${info}</button>
  </div>           
      `;
}
function selectId() {
  const clickImagen = document.querySelectorAll(".clickImagen");
  clickImagen.forEach((element) => {
    element.addEventListener("click", (e) => {
      idMovie = e.target.innerHTML;
      busqueda(idMovie);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
}
