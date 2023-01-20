const formLogin = document.querySelector("#login");
const login_email = document.getElementById("email");
const login_password = document.getElementById("password");
const login_button = document.getElementById("login-btn");

formLogin.onsubmit =  (e) => {
  e.preventDefault();
  const valid_email = localStorage.getItem("register_email");
  const valid_password = localStorage.getItem("register_password");
  if (
    login_email.value== valid_email &&
    login_password.value == valid_password
  ) {
    localStorage.setItem("login_email", login_email.value);
    localStorage.setItem("login_password", login_password.value);
    Toastify({
      text: "Login successfuly ✅",
      duration: 3000,
    }).showToast();
    setTimeout(() => {
      window.location.href = "home.html";
    }, 2000);
  } else {
    Toastify({
      text: "The username or password is incorrect!!",
      duration: 3000,
    }).showToast();
    return false;
  }
};
