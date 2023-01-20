const contenedorCards = document.querySelector(".content");

const cards = (array) => {
  const arrayReducido = array.reduce((acc, element) => {
    let genero;
    console.log(genre.find(gen => gen.id = element.genre_ids));
  
    

    return (
      acc +
      `<div class="wrapper">
      <div class="card">
        <img src="https://image.tmdb.org/t/p/original${element.poster_path}" class="img1" />
        <h1 class="title">${element.title}</h1>
        <p class="text">${element.overview}</p>
        <p class="category">${element.genre_ids}</p>
        <p class="views">${element.release_date}</p>
      </div>
    </div>            
        `
    );
  }, "");
  console.log("primero");
  contenedorCards.innerHTML = arrayReducido;
};

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "23313cb0700ea79bd480389020e9c60b",
    "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
  },
};

fetch(
  "https://api.themoviedb.org/3/trending/movie/day?api_key=23313cb0700ea79bd480389020e9c60b&language=es"
)
  .then((response) => response.json())
  .then((response) => {
    cards(response.results);
    console.log(response.results);
  })
  .catch((err) => console.error(err));



setTimeout(() => {
  const contenedorGenero = document.querySelector(".category");
const gen = (array) => {
  const arrayReducido = array.reduce((acc, element) => {
    return (
      acc +
      `
        <p class="category">${element.name}</p>           
        `
    );
  }, "");
  return arrayReducido;
};
contenedorGenero.innerHTML = gen(genre);
}, 1500);


/* const contenedorCards = document.querySelector(".content");

const cards = (array) => {
  const arrayReducido = array.reduce((acc, element) => {
    return (
      acc +
      `<div class="wrapper">
      <div class="card">
          <img src="${element.Poster}" class="img1" />
        <h1 class="title">${element.Title}</h1>
        <p class="text">${element.Plot}</p>
        <p class="category">${element.Genre}</p>
        <p class="views">${element.Year}</p>
      </div>
    </div>            
        `
    );
  }, "");
  return arrayReducido;
};
contenedorCards.innerHTML = cards(movies);
 */

const login_email = localStorage.getItem("login_email");
const login_password = localStorage.getItem("login_password");
const valid_email = localStorage.getItem("register_email");
const user_login = document.querySelector(".logo");

window.onload = () => {
  if ((login_email, login_password === null)) {
    Toastify({
      text: "Login first!!",
      duration: 3000,
    }).showToast();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
    return false;
  } else {
    /* user_login.innerHTML =`
            <p>${valid_email}</p>
        ` */
  }
};
/* const logout_button = document.querySelector(".logout-btn");
 logout_button.addEventListener('click',  () => {
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_password')
    window.location = 'index.html'
}) */
