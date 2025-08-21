const wrapper = document.querySelector(".sliderWrapper");  
const menuItems = document.querySelectorAll(".menuItem");  
  
const products = [  
  {  
   id: 1,  
   title: "Air Force",  
   price: 1199,  
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
   description: "The Air Force 1 is a classic basketball shoe that has been a staple in the sneaker game for decades. With its iconic design and comfortable fit, it's a must-have for any sneakerhead.",  
  },  
  {  
   id: 2,  
   title: "Air Jordan",  
   price: 1499,  
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
   description: "The Air Jordan 1 is a legendary basketball shoe that has been a favorite among sneaker enthusiasts for years. With its sleek design and high-quality materials, it's a shoe that's sure to turn heads.",  
  },  
  {  
   id: 3,  
   title: "Blazer",  
   price: 1099,  
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
   description: "The Blazer is a stylish and comfortable shoe that's perfect for everyday wear. With its sleek design and affordable price, it's a great option for anyone looking for a reliable shoe.",  
  },  
  {  
   id: 4,  
   title: "Crater",  
   price: 1299,  
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
   description: "The Crater is a unique and stylish shoe that's sure to make a statement. With its bold design and comfortable fit, it's a great option for anyone looking to add some flair to their wardrobe.",  
  },  
  {  
   id: 5,  
   title: "Hippie",  
   price: 999,  
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
   description: "The Hippie is a fun and playful shoe that's perfect for anyone looking to add some personality to their outfit. With its colorful design and comfortable fit, it's a great option for everyday wear.",  
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
  orderTextarea.value = `Product: ${choosenProduct.title}\nColor: ${selectedColor}\nDescription: ${choosenProduct.description}`;  
});  
  
close.addEventListener("click", () => {  
  payment.style.display = "none";  
});