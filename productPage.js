var mainImg = document.getElementById("main-img");
var secondImg = document.getElementsByClassName("second-img");
var quantityIndicator = document.getElementById("quantity");
var plusBtn = document.getElementById("plusBtn");
var minusBtn = document.getElementById("minusBtn");

count = 0;

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

plusBtn.onclick = function() {
    if(count < 10){
        count++;
        console.log("hi");
        quantityIndicator.innerHTML = "" + count;
    }
   
}
minusBtn.onclick = function() {
    if(count > 0){
        count--;
        console.log("hi");
        quantityIndicator.innerHTML = "" + count;
    }
    
}