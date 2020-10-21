const mainPage = document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const midContent = document.querySelector(".middle-content");
const loginTop = document.querySelector(".btn-top");
const Feeds = document.querySelector(".feeds-page");
const loginModal = document.querySelector(".login-modal");
const close = document.querySelector(".fa-times");
const loginFormBtn = document.querySelector(".login-form-btn");
const postBtn = document.querySelector(".post-btn");
const modalWrap = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const closePost = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const plusModal = document.querySelector(".modal-footer span");
const modalInput = document.querySelector(".modal-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sideWrap = document.querySelector(".sidebar-wrapper");
const xbtn = document.querySelector(".sidebar-header i");
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

// Main page
const goToLoginPage = () => {
  mainPage.style.display = "none";
  loginPage.style.display = "grid";
};

midContent.addEventListener("click", (e) => {
  if (e.target.classList[0] === "main-btn") {
    goToLoginPage();
  }
});

//Input validation
loginTop.addEventListener("click", () => {
  const name = document.querySelector(".user-info").value;
  const password = document.querySelector(".password").value;
  if (name !== "" && password !== "") {
    mainPage.style.display = "none";
    Feeds.style.display = "block";
  } else {
    goToLoginPage();
    loginModal.style.display = "block";
  }
});

close.addEventListener("click", () => {
  loginModal.style.display = "none";
});

loginFormBtn.addEventListener("click", () => {
  const name = document.querySelector(".login-name").value;
  const pass = document.querySelector(".login-pass").value;
  if (name !== "" && pass !== "") {
    loginPage.style.display = "none";
    Feeds.style.display = "block";
  } else {
    loginModal.style.display = "block";
  }
});

postBtn.addEventListener("click", () => {
  modal.style.display = "block";
  modalWrap.classList.add("modal-wrapper-style");

  if (modalInput.value !== "") {
    modalInput.value = "";
    changeOpacity(0.5);
  }
});

closePost.addEventListener("click", () => {
  modal.style.display = "none";
  modalWrap.classList.remove("modal-wrapper-style");
});

const changeOpacity = (x) => {
  modalPostBtn.style.opacity = x;
  plusModal.style.opacity = x;
};

modalInput.addEventListener("keypress", (e) => {
  if (e.target.value !== "") changeOpacity(1);
});

modalInput.addEventListener("blur", (e) => {
  if (e.target.value === "") changeOpacity(0.5);
});

// sidebar
user.addEventListener("click", () => {
  sidebar.classList.add("sidebar-display");
  sideWrap.classList.add("sidebar-wrap-display");
});

xbtn.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-display");
  sideWrap.classList.remove("sidebar-wrap-display");
});

const darkEl1 = document.querySelectorAll(".dark-mode-1");
const darkEl2 = document.querySelectorAll(".dark-mode-2");
const lightEl1 = document.querySelectorAll(".light-text");
const border = document.querySelectorAll(".border");
toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  Array.from(darkEl1).map((el) => el.classList.toggle("dark-1"));
  Array.from(darkEl2).map((el) => el.classList.toggle("dark-2"));
  Array.from(lightEl1).map((el) => el.classList.toggle("light"));
  Array.from(border).map((el) => el.classList.toggle("light"));
});
