const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "SPORTS BAG",
    price: 1199,
    colors: [
      {
        code: "white",
        img: "white spo.jpg",
      },
      {
        code: "darkblue",
        img: "blue spo.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "COLLEGE BAG",
    price: 1499,
    colors: [
      {
        code: "lightpink",
        img: "pink clg.jpg",
      },
      {
        code: "skin",
        img: "blue clg.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "hip bag",
    price: 1099,
    colors: [
      {
        code: "	#300000 ",
        img: "pony hip.jpg",
      },
      {
        code: "	#F9F6EE",
        img: "white hip.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "DRAWSTRING BAG",
    price: 1299,
    colors: [
      {
        code: "black",
        img: "black draw.jpg",
      },
       {
         code: "lightgray",
         img: "white draw.jpg",

       },
    ],
  },
  {
    id: 5,
    title: "TROLLY BAG",
    price: 999,
    colors: [
      {
        code: "#DAF7A6",
        img: "green trolly.jpg",
      },
      {
        code: "#300000",
        img: "red trolly.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];  
let selectedColor = choosenProduct.colors[0].code;  
  
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
  orderTextarea.value = `Product: ${choosenProduct.title}\nColor: ${selectedColor}\n`;  
});  
  
close.addEventListener("click", () => {  
  payment.style.display = "none";  
});