<?php
$servername="localhost";
$username= "root";
$password = "";
$dbname = "database_name";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error)
die("Connection failed: " . $conn->connect_error);
if ($_SERVER["REQUEST_METHOD"] == "POST")
 {
$n = $_POST['name'];
$p = $_POST['pno'];
$add = $_POST['address'];
$ord = $_POST['order'];

$ins = "INSERT INTO price (name, phno, address, ord) VALUES ('$n','$p','$add','$ord')";
if($conn->query($ins))
	header("Location: Thank.html");   
		
}
$conn->close();
?>
