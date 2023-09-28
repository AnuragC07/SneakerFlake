var mainImg = document.getElementById("main-img");
var secondImg = document.getElementsByClassName("second-img");

secondImg[0].onclick = function(){
    mainImg.src = secondImg[0].src;
    console.log("clicked");
}
secondImg[1].onclick = function(){
    mainImg.src = secondImg[1].src;
    console.log("clicked");
}
secondImg[2].onclick = function(){
    mainImg.src = secondImg[2].src;
    console.log("clicked");
}