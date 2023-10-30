var greaterThan = document.getElementById("GreaterThan");
var lessThan = document.getElementById("LessThan");

var greaterThanProduct = document.getElementsByClassName("GreaterThanProduct");
var lessThanProduct = document.getElementsByClassName("LessThanProduct");



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



//for adding things to cart script



