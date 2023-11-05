const wrapper = document.querySelector("#sliderwrapper");
const menuItems = document.querySelectorAll("#menuitem");
const products = document.querySelector("#products");
const product = document.querySelectorAll("#product");
const popUp = document.querySelector("#popupIcon");
const box = document.querySelector("#box");
const main = document.querySelector("#main");
const menuitem = document.querySelector("#menuitem");
const navtop = document.querySelector("#navtop");



// menuItems.forEach((item, index) => {
//     item.addEventListener("click", () => {
//         wrapper.style.transform = `translateX(${-100 * index}vw)`;
        
//         // console.log("hello"+index);
//     });
// });



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






// setInterval(function(){
//     product.style.transform = `translateX(${-100}vw)`;
// },2000);

// setInterval(() => {
//     // Accessing All the carousel Items
//      Array.from(product).forEach((item,index) => {
    
//        if(i < product.length){
//         product.style.transform = `translateX(-${i*100}vw)`
//        }
//       })
    
    
//       if(i < product.length){
//         i++;
//       }
//       else{
//         i=0;
//       }
//     },2000)