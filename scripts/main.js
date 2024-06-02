let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/face.png") {
    myImage.setAttribute("src", "images/handsome.jpg");
  } else {
    myImage.setAttribute("src", "images/face.png");
  }
};
