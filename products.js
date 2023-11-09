var greaterThan = document.getElementById("GreaterThan");
var lessThan = document.getElementById("LessThan");

var greaterThanProduct = document.getElementsByClassName("GreaterThanProduct");
var lessThanProduct = document.getElementsByClassName("LessThanProduct");

const wrapper = document.querySelector("#sliderwrapper");
const menuItems = document.querySelectorAll("#menuitem");
const products = document.querySelector("#products");
const product = document.querySelectorAll("#product");
const popUp = document.querySelector("#popupIcon");
const box = document.querySelector("#box");
const main = document.querySelector("#main");
const menuitem = document.querySelector("#menuitem");
const navtop = document.querySelector("#navtop");



// greaterThan.addEventListener('click', function(){

    
//     greaterThanProduct.setAttribute("style", "visibility: hidden");
//     console.log("first");
// })


greaterThan.addEventListener('click', function() {
    if (greaterThan.checked) {
        for (var i = 0; i < greaterThanProduct.length; i++) {
            greaterThanProduct[i].style.display = "block";
        }
        for (var i = 0; i < lessThanProduct.length; i++) {
            lessThanProduct[i].style.display = "none";
        }
    }
    else if (lessThan.checked) {
        for (var i = 0; i < lessThanProduct.length; i++) {
            lessThanProduct[i].style.display = "block";
        }
        for (var i = 0; i < lessThanProduct.length; i++) {
            greaterThanProduct[i].style.display = "none";
        }
    }      
    // } else {
    //     for (var i = 0; i < greaterThanProduct.length; i++) {
    //         greaterThanProduct[i].style.display = "none";
    //     }
    //     for (var i = 0; i < lessThanProduct.length; i++) {
    //         lessThanProduct[i].style.display = "block";
    //     }
    // }
});

lessThan.addEventListener('click', function() {
    if (lessThan.checked) {
        for (var i = 0; i < lessThanProduct.length; i++) {
            lessThanProduct[i].style.display = "block";
        }
        for (var i = 0; i < lessThanProduct.length; i++) {
            greaterThanProduct[i].style.display = "none";
        }
    } 

});

var flag = 0;

popUp.addEventListener("mouseover", ()=> {


    if(flag == 0){
        box.setAttribute("style", "visibility: visible;");
        console.log("h");
        // flag = 1;
        if(main.addEventListener("mouseover", ()=> {
            box.setAttribute("style", "visibility: hidden");
        }));
        else if(menuitem.addEventListener("mouseover", ()=> {
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



//for adding things to cart script



