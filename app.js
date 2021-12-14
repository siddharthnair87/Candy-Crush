//Variables
let picArray = [
  "https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg",
  "https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo=",
  "https://www.pngitem.com/pimgs/m/372-3721347_roastedchicken-rolled-a-random-image-posted-in-comment.png",
];
let startingIndex = 0;

//Selectors

const slide = document.querySelector(".slide");
const carousel = document.querySelector(".carousel-container");

//Create Elements

const leftButton = document.createElement("button");
leftButton.classList.add("leftButton");
const rightButton = document.createElement("button");
rightButton.classList.add("rightButton");

leftButton.innerText = "<";
rightButton.innerText = ">";

carousel.appendChild(leftButton);
carousel.appendChild(rightButton);
