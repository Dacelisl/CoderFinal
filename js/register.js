const formRegister = document.querySelector("#register");
const register_email = document.getElementById("email");
const register_password = document.getElementById("password");
const register_name = document.getElementById("name");
const register_button = document.getElementById("register-btn");

const valid_name = localStorage.getItem("register_name");
const valid_email = localStorage.getItem("register_email");
const valid_password = localStorage.getItem("register_password");

formRegister.onsubmit = (e) => {
  e.preventDefault();
  if (
    register_name.value === valid_name &&
    register_email.value === valid_email &&
    register_password.value === valid_password
  ) {
    Toastify({
      text: "Your account has been actived! Login Now!!",
      duration: 3000,
    }).showToast();
    return false;
  } else {
    localStorage.setItem("register_name", register_name.value);
    localStorage.setItem("register_email", register_email.value);
    localStorage.setItem("register_password", register_password.value);

    Toastify({
      text: "Register success ✅",
      duration: 3000,
    }).showToast();
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  }
}
