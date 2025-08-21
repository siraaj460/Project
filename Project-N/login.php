<?php  
// Connect to database  
$conn = mysqli_connect("localhost", "root", "", "database_name");  
  
// Check connection  
if (!$conn) {  
  die("Connection failed: " . mysqli_connect_error());  
}  
  
// Define variables  
$username = $_POST['username'];  
$password = $_POST['password'];  
  
// Query to check if user exists  
$query = "SELECT * FROM admin WHERE username = '$username' AND password = '$password'";  
$result = mysqli_query($conn, $query);  
  
// Check if user exists  
if (mysqli_num_rows($result) > 0) {  
  // User exists, log them in  
  session_start();  
  $_SESSION['username'] = $username;  
  header("Location: admin_dashboard.php");  
  exit;  
} else {  
  // User does not exist, display error message  
  echo "Invalid username or password";  
}  
  
// Close connection  
mysqli_close($conn);  
?>