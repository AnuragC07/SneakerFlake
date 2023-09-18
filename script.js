const wrapper = document.querySelector("#sliderwrapper");
const menuItems = document.querySelectorAll("#menuitem");
const products = document.querySelector("#products");
const product = document.querySelectorAll("#product");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // console.log("hello"+index);
    });
});

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