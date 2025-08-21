const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price:  1199,
    colors: [
      {
        code: "",
        img: "aao.jpg",
      },
      {
        code: "",
        img: "air.jpg",
      },
    ],
    sizes: ["42", "43", "44"]
  },
  {
    id: 2,
    title: "Air Jordan",
    price:   1499,
    colors: [
      {
        code: "white",
        img: "jj.jpg",
      },
      {
        code: "blue",
        img: "jod.jpg",
      },
    ],
    sizes: ["42", "43", "44"]
  },
  {
    id: 3,
    title: "Blazer",
    price:   1099,
    colors: [
      {
        code: "black",
        img: "bb.jpg",
      },
      {
        code: "red",
        img: "bb2.jpg",
      },
    ],
    sizes: ["42", "43", "44"]
  },
  {
    id: 4,
    title: "Crater",
    price:  1299,
    colors: [
      {
        code: "black",
        img: "Crater1.jpg",
      },
       {
        code: "lightgray",
         img: "Carter2.jpg",

       },
    ],
    sizes: ["42", "43", "44"]
  },
  {
    id: 5,
    title: "Hippie",
    price:  999,
    colors: [
      {
        code: "gray",
        img: "Hippie.jpg",
      },
      {
        code: "lightpink",
        img: "Hippie3.jpg",
      },
    ],
    sizes: ["42", "43", "44"]
  },
];

let choosenProduct = products[0];  
let selectedColor = choosenProduct.colors[0].code;
let selectedSize = choosenProduct.sizes[0];   
  
const currentProductImg = document.querySelector(".productImg");  
const currentProductTitle = document.querySelector(".productTitle");  
const currentProductPrice = document.querySelector(".productPrice");  
const currentProductColors = document.querySelectorAll(".color");  
const currentProductSizes = document.querySelectorAll(".size");  
const productDesc = document.querySelector(".productDesc");  
const orderTextarea = document.querySelector(".Area");  
  
menuItems.forEach((item, index) => {  
  item.addEventListener("click", () => {  
   //change the current slide  
   wrapper.style.transform = `translateX(${-100 * index}vw)`;  
  
   //change the choosen product  
   choosenProduct = products[index];  
  
   //change texts of currentProduct  
   currentProductTitle.textContent = choosenProduct.title;  
   currentProductPrice.textContent = "Rs" + choosenProduct.price;  
   currentProductImg.src = choosenProduct.colors[0].img;  
   productDesc.textContent = choosenProduct.description;
   currentProductSizes.textContent=choosenProduct.size;  
  
   //assing new colors  
   currentProductColors.forEach((color, index) => {  
    color.style.backgroundColor = choosenProduct.colors[index].code;  
   });  
  });  
});  
  
currentProductColors.forEach((color, index) => {  
  color.addEventListener("click", () => {  
   currentProductImg.src = choosenProduct.colors[index].img;  
   selectedColor = choosenProduct.colors[index].code;  
  });  
});  
  
currentProductSizes.forEach((size, index) => {  
  size.addEventListener("click", () => {  
   currentProductSizes.forEach((size) => {  
    size.style.backgroundColor = "white";  
    size.style.color = "black";  
   });  
   size.style.backgroundColor = "black";  
   size.style.color = "white";  
  });  
});  
  
const productButton = document.querySelector(".productButton");  
const payment = document.querySelector(".payment");  
const close = document.querySelector(".close");  
  
productButton.addEventListener("click", () => {  
  payment.style.display = "flex";  
  orderTextarea.value = `Product: ${choosenProduct.title}\nColor: ${selectedColor}\nSize: ${selectedSize}\n`;  
});  
  
close.addEventListener("click", () => {  
  payment.style.display = "none";  
});