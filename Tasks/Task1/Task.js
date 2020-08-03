var image = 1;
currentImage(image);

function nextImage(n) {
  currentImage(image += n);
}

function currentImage(n) {
  currentImage(image = n);
}

function currentImage(n) {
  var i;
  var imageSlide = document.getElementsByClassName("image");
  console.log("slide", imageSlide[0]);
  if (n > imageSlide.length){
    image = 1
  }
  if (n < 1){
    image = imageSlide.length
  }
  for (i = 0; i < imageSlide.length; i++) {
      imageSlide[i].style.display = "none";
  }
  imageSlide[image-1].style.display = "block";
}

var aImage = 0;
autoImage();

function autoImage() {
  var i;
  var timedImageSlide = document.getElementsByClassName("image");
  for (i = 0; i < timedImageSlide.length; i++) {
    timedImageSlide[i].style.display = "none";
  }
  aImage++;
  if (aImage > timedImageSlide.length){
    aImage = 1
  }
  timedImageSlide[aImage-1].style.display = "block";
  setTimeout(autoImage, 4000);
}

var input = document.getElementById("add");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
  event.preventDefault();

// var hwidth;
// hwidth=document.querySelector("html").offsetWidth;
// let img = document.createElement("img");
// src= document.getElementById("asd")
// img.src = 'https://image.shutterstock.com/image-photo/business-people-analyzing-statistics-financial-600w-377884705.jpg';
// src.appendChild(img)
// document.getElementById("image").innerHTML+="https://image.shutterstock.com/image-photo/business-people-analyzing-statistics-financial-600w-377884705.jpg";
  // var node = document.createElement("img");
  // var textnode = document.sour("Water");
  // node.appendChild("dajebkas");
  // document.getElementById("myImg").src = "hackanm.gif";
  // document.getElementById("image").appendChild(node);
  }
});

