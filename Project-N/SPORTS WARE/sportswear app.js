const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "WRIST BAND",
    price: 1199,
    colors: [
      {
        code: "#0A0A0A ",
        img: "b hand.jpg",
      },
      {
        code: "#F3DE0A",
        img: "y hand.webp",
      },
    ],
  },
  {
    id: 2,
    title: "KNEE PADS",
    price: 1499,
    colors: [
      {
        code: "pink",
        img: "pink.png",
      },
      {
        code: "blue",
        img: "kb.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "GLOVES",
    price: 1099,
    colors: [
      {
        code: "#E0D89D",
        img: "m glove.webp",
      },
      {
        code: "yellow",
        img: "y glove.webp",
      },
    ],
  },
  {
    id: 4,
    title: "BOTTLE",
    price: 1299,
    colors: [
      {
        code: "black",
        img: "w bottle.jpg",
      },
       {
      code: "lightblue",
      img: "blue bottle.jpg",

      },
    ],
  },
  {
    id: 5,
    title: "CAP",
    price: 999,
    colors: [
      {
        code: "#898483 ",
        img: "cement cap.png",
      },
      {
        code: "	#808000",
        img: "cap.jpg",
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
  orderTextarea.value = `Product: ${choosenProduct.title}\nColor: ${selectedColor}\nDescription: ${choosenProduct.description}`;  
});  
  
close.addEventListener("click", () => {  
  payment.style.display = "none";  
});
function sendOTP(contact, isEmail) {
  // Generate OTP
  const OTP = Math.floor(1000 + Math.random() * 9000);
  
  // Determine the contact method and send OTP accordingly
  if (isEmail) {
      console.log(`OTP ${OTP} sent to email: ${contact}`);
  } else {
      console.log(`OTP ${OTP} sent to phone number: ${contact}`);
  }
}

// Usage
sendOTP('example@email.com', true); // Sending OTP to an email
sendOTP('1234567890', false); // Sending OTP to a phone number