const swiperMain = new Swiper(".swiper-main", {
  // Optional parameters
  // direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows

  // And if we need scrollbar
});

// ----------------------Project-gallery--------------------------------

const projectBtn = document.querySelector(".project-btn");
const projectGrid = document.querySelector(".project-grid");

projectBtn.addEventListener("click", () => {
  projectGrid.classList.toggle("visible");
  if (projectBtn.innerHTML == "Свернуть") {
    projectBtn.innerHTML = "РАЗВЕРНУТЬ";
  } else {
    projectBtn.innerHTML = "Свернуть";
  }
});

// -------------------------Stages-slider------------------------------

const swiperStages = new Swiper(".swiper-stages", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 60,
});

// ------------------------Popup--------------------------------

const btnHeader = document.querySelector(".header-right-btn");
const aboutBtn = document.querySelector(".about-btn");
const firstBtn = document.querySelector(".first-btn");
const stagesBtn = document.querySelector(".stages-btn");
const popup = document.querySelector(".popup");
const shadow = document.querySelector(".shadow-popup");
const close = document.getElementById("close");

btnHeader.addEventListener("click", PopupOpen);
aboutBtn.addEventListener("click", PopupOpen);
firstBtn.addEventListener("click", PopupOpen);
stagesBtn.addEventListener("click", PopupOpen);

close.addEventListener("click", PopupClose);
shadow.addEventListener("click", PopupClose);

function PopupOpen() {
  popup.classList.add("open");
  shadow.classList.add("open");
}

function PopupClose() {
  popup.classList.remove("open");
  shadow.classList.remove("open");
}
