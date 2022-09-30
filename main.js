// animate__zoomIn
// animate__zoomOut

const playBtn = document.getElementById("play");
const videoContainer = document.getElementById("video");
const videoInner = document.getElementById("video__inner");

playBtn.addEventListener("click", function () {
  videoContainer.classList.remove("hide");
  videoInner.classList.remove("animate__zoomOut");
  videoInner.classList.add("animate__zoomIn");
});

const closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", function () {
  videoContainer.classList.add("hide");
  videoInner.classList.remove("animate__zoomIn");
  videoInner.classList.add("animate__zoomOut");
});

// Header scroll
window.onscroll = function () {
  if (window.scrollY > 100) {
    document.querySelector("#header").classList.add("fixed");
  } else {
    document.querySelector("#header").classList.remove("fixed");
  }
};
