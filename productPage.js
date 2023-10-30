var mainImg = document.getElementById("main-img");
var secondImg = document.getElementsByClassName("second-img");
var quantityIndicator = document.getElementById("quantity");
var plusBtn = document.getElementById("plusBtn");
var minusBtn = document.getElementById("minusBtn");
const popUp = document.querySelector("#popupIcon");
const box = document.querySelector("#box");
const main = document.querySelector("#main");
var menuitem = document.querySelector("#productSection");
const navtop = document.querySelector("#navtop");
var sizesBox = document.querySelectorAll("#size");

var cartBtn1 = document.getElementById("cartBtn1");

var flag = 0;
var cartCounter = 0;

popUp.addEventListener("mouseover", ()=> {


    if(flag == 0){
        box.setAttribute("style", "visibility: visible; transition: all 0.4s ease;");
        console.log("on");
        flag = 1;
        // if(main.addEventListener("mouseover", ()=> {
        //     box.setAttribute("style", "visibility: hidden");
        // }));
        // else if(menuitem.addEventListener("mouseover", ()=> {
        //     box.setAttribute("style", "visibility: hidden");
        // }));
        // else if(navtop.addEventListener("mouseover", ()=> {
        //     box.setAttribute("style", "visibility: hidden");
        // }));
    }
    else if(flag == 1){
        box.setAttribute("style", "visibility: hidden; transition: all 0.4s ease;");
        console.log("off");
        flag = 0;
    }
    
})

cartCounter = 0;
sizesBox.forEach(function(size) {
    
        size.addEventListener('click', function() {
            if(cartCounter == 0){
            size.style.backgroundColor = 'black';
            size.style.color = 'white';
            cartCounter = 1;
            }
            else if(cartCounter == 1){
                size.style.backgroundColor = 'white';
                size.style.color = 'black';
                cartCounter = 0;
            }
        });
  });



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

//for adding things to cart script

  cartBtn1.addEventListener('click', function () {
    console.log('Add to Cart button clicked');
    
    // Hide all product cards with the class "cartProduct1" in the cart.html file
    var cartProducts = document.getElementsByClassName('cartProduct1');
    for (var i = 0; i < cartProducts.length; i++) {
      cartProducts[i].style.display = 'none';
    }
  
    // Now, show only the product card that corresponds to the clicked "Add to Cart" button
    // You can identify the specific product card using its unique class name.
    var selectedProductClass = "product-card product1 cartProduct1"; // Set this to the class name of the product card you want to display
    var selectedProduct = document.getElementsByClassName(selectedProductClass);
    for (var i = 0; i < selectedProduct.length; i++) {
      selectedProduct[i].style.display = 'block';
    }
  });
  
  

