const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CRICKET BAT",
    price: 1199,
    colors: [
      {
        code: "green",
        img: "yellow cri.jpg",
      },
      {
        code: "red",
        img: "green cri.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "TENNIS BAT",
    price: 1499,
    colors: [
      {
        code: "black",
        img: "black tenn.jpg",
      },
      {
        code: "#FFA500",
        img: "orange tenn.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "BASEBALL BAT",
    price: 1099,
    colors: [
      {
        code: "white",
        img: "white base.jpg",
      },
      {
        code: "black",
        img: "green base.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "TABLE TENNIS BAT",
    price: 1299,
    colors: [
      {
        code: "#89CFF0",
        img: "blue table.jpg",
      },
       {
         code: "#FF7F50",
         img: "orange table.jpg",

       },
    ],
  },
  {
    id: 5,
    title: "GOLF CLUB",
    price: 999,
    colors: [
      {
        code: "#D4D7D9",
        img: "iron golf.jpg",
      },
      {
        code: "#900C3F ",
        img: "red golf.jpg",
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