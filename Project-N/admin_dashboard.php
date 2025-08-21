<?php  
// Start session  
session_start();  
  
// Check if user is logged in  
if (!isset($_SESSION['username'])) {  
  header("Location: Admin.html");  
  exit;  
}  
  
// Display admin dashboard  
echo "Welcome, " . $_SESSION['username'] . "!";  
?>