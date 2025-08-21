const wrapper = document.querySelector(".sliderWrapper");  
const menuItems = document.querySelectorAll(".menuItem");  
  
const products = [  
  {  
   id: 1,  
   title: "HOODIE",  
   price: 1199,  
   colors: [  
    {  
      code: "black",  
      img: "wb hood.jpg",  
    },  
    {  
      code: "darkblue",  
      img: "blue hood.jpg",  
    },  
   ],    
   sizes: ["M", "L", "XL"]  
  },  
  {  
   id: 2,  
   title: "T-SHIRT",  
   price: 1499,  
   colors: [  
    {  
      code: "orange",  
      img: "orange-t.jpg",  
    },  
    {  
      code: "white",  
      img: "white-t.jpg",  
    },  
   ],    
   sizes: ["S", "M", "L"]  
  },  
  {  
   id: 3,  
   title: "TRACK SUITS",  
   price: 1099,  
   colors: [  
    {  
      code: "",  
      img: "TRA.jpg",  
    },  
    {  
      code: "black",  
      img: "black track.jpg",  
    },  
   ],   
   sizes: ["M", "L", "XL"]  
  },  
  {  
   id: 4,  
   title: "HAT",  
   price: 1299,  
   colors: [  
    {  
      code: "black",  
      img: "black cap.jpg",  
    },  
     {  
    code: "lightgray",  
    img: "white cap.jpg",  
  
    },  
   ],    
   sizes: ["S", "M", "L"]  
  },  
  {  
   id: 5,  
   title: "TERRA",  
   price: 999,  
   colors: [  
    {  
      code: "#DAF7A6 ",  
      img: "green terra.jpg",  
    },  
    {  
      code: "white",  
      img: "white terra.jpg",  
    },  
   ],    
   sizes: ["M", "L", "XL"]  
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
  selectedSize = choosenProduct.sizes[index];   
  });   
});   
  
const productButton = document.querySelector(".productButton");   
const payment = document.querySelector(".payment");   
const close = document.querySelector(".close");   
   
productButton.addEventListener("click", () => {   
  payment.style.display = "flex";   
  orderTextarea.value = `Product: ${choosenProduct.title}\nColor: ${selectedColor}\nSize: ${selectedSize}`;   
});   
   
close.addEventListener("click", () => {   
  payment.style.display = "none";   
});