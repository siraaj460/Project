const loginForm = document.getElementById('login-form');  
const usernameInput = document.getElementById('username');  
const passwordInput = document.getElementById('password');  
const errorMessage = document.getElementById('error-message');  
  
loginForm.addEventListener('submit', (e) => {  
  e.preventDefault();  
  const username = usernameInput.value.trim();  
  const password = passwordInput.value.trim();  
  
  if (username === '' || password === '') {  
   errorMessage.textContent = 'Please enter both username and password';  
   return;  
  }  
  
  // Assuming you have a function to check username and password  
  // Replace this with your actual logic  
  const isValid = checkUsernameAndPassword(username, password);  
  
  if (!isValid) {  
   errorMessage.textContent = 'Invalid username or password';  
   return;  
  }  
  
  // If credentials are valid, you can redirect to another page or perform other actions  
  console.log('Login successful!');  
});  
  
function checkUsernameAndPassword(username, password) {  
  // Replace this with your actual logic to check username and password  
  // For demonstration purposes, I'm just checking if the username is 'admin' and password is 'password'  
  return username === 'admin' && password === 'password';  
}