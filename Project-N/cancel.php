<!DOCTYPE html>  
<html lang="en">  
<head>  
   <meta charset="UTF-8">  
   <meta name="viewport" content="width=device-width, initial-scale=1.0">  
   <title>Thank You</title>  
   <style>  
      body
      {  
        font-family: Arial, sans-serif;  
        background-color: #f0f0f0;  
      }  
      .container
      {  
        width: 80%;  
        margin: 40px auto;  
        text-align: center;  
      }  
      .thank-you-message 
      {  
        font-size: 24px;  
        font-weight: bold;  
        margin-bottom: 20px;  
      }  
      .button
      {  
        background-color: #4CAF50;  
        color: #fff;  
        padding: 10px 20px;  
        border: none;  
        border-radius: 5px;  
        cursor: pointer;  
      }  
      .button:hover 
      {  
        background-color: #3e8e41;  
      }  
   </style>  
</head>  
<body>  
   <div class="container">  
      <h1 class="thank-you-message">your order is cancelled!</h1>  
      <p>Browse and Confirm ur Order.Thank u for visiting.</p>  
      <button class="button" onclick="window.location.href='Main.html'">Navigate to Main Page For More Shopping</button>  
   </div>  
</body>  
<?php  
$conn = new mysqli("localhost", "root", "", "database_name");  
if ($conn->connect_error){  
   die("Connection failed: " . $conn->connect_error);  
}  
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['phone']))  
 {  
$text=$_POST['phone']; 
$sql='delete from price where phno=?';  
$stmt = $conn->prepare($sql);  
$stmt->bind_param("s", $text);  
$stmt->execute();  
 }
 else{
	 echo "not found";
 }
$stmt->close();
$conn->close();   
?>
</html>