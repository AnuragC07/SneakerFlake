var mainImg = document.getElementById("main-img");
var secondImg = document.getElementsByClassName("second-img");
var quantityIndicator = document.getElementById("quantity");
var plusBtn = document.getElementById("plusBtn");
var minusBtn = document.getElementById("minusBtn");
const popUp = document.querySelector("#popupIcon");
const box = document.querySelector("#box");
const main = document.querySelector("#main");
const navtop = document.querySelector("#navtop");


var flag = 0;

popUp.addEventListener("mouseover", ()=> {


    if(flag == 0){
        box.setAttribute("style", "visibility: visible; transition: all 0.4s ease;");
        console.log("h");
        // flag = 1;
        if(main.addEventListener("mouseover", ()=> {
            box.setAttribute("style", "visibility: hidden");
        }));
        else if(navtop.addEventListener("mouseover", ()=> {
            box.setAttribute("style", "visibility: hidden");
        }));
    }
    // else{
    //     box.setAttribute("style", "visibility: hidden");
    //     console.log("h");
    //     flag = 0;
    // }
})




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