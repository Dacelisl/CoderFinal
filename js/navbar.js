const login_email = localStorage.getItem("login_email");
const login_password = localStorage.getItem("login_password");
const user = localStorage.getItem("register_name");

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
    document.querySelector(".signIn").innerHTML = `
    <span>${user} - LOGOUT</span>
`;
getMovies();
  }
}
const logout_button = document.querySelector(".signIn");
 logout_button.addEventListener('click',  () => {
    localStorage.removeItem('login_email')
    localStorage.removeItem('login_password')
    window.location = 'index.html'
})

function hamburger() {
  document.querySelector(".navbar").classList.toggle("active");
  document.querySelector(".overlay").classList.toggle("active");
  document.body.classList.toggle("active");
}
