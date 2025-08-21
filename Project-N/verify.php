 <html>
 <head>
 <title>Order details</title>
 </head>
 <style>
 body {
    font-family: Arial, sans-serif;
    text-align: center;
}

h1 {
    margin-bottom: 20px;
}

form {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"] {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    padding: 10px 20px;
    background-color:   
 #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor:   
 pointer;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
}

tr:nth-child(even) {
    background-color:   
 #f2f2f2;
} 
</style>
 <?php  
$conn = new mysqli("localhost", "root", "", "database_name");  
if ($conn->connect_error){  
   die("Connection failed: " . $conn->connect_error);  
}  
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['phone']))  
 {  
$text=$_POST['phone'];  
$sql='select * from price where phno=?';  
$stmt = $conn->prepare($sql);  
$stmt->bind_param("s", $text);  
$stmt->execute();  
$result = $stmt->get_result();  
  if ($result->num_rows > 0)  
  {   
  echo "<table border=5>
<tr>
<th>Name</th>
<th>Phno</th>
<th>Address</th>
<th>Order</th>
</tr>";
while($row=$result->fetch_assoc())
{
echo "<tr>
<td>$row[name]</td>
<td>$row[phno]</td>
<td>$row[address]</td>
<td>$row[ord]</td>
</tr>";
}
echo "</table>";
}
else
{
echo"no data found";
}
$stmt->close();
   $conn->close();   
 }  
?>
<!DOCTYPE html>  
<html lang="en">  
<head>  
   <meta charset="UTF-8">  
   <meta name="viewport" content="width=device-width, initial-scale=1.0">  
   <title>Checking</title>  
</head> 
<style>
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
    text-align: center;
}

form {
    background: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 400px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 10px;
    font-weight: bold;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

input[type="submit"] {
    background-color: #5cb85c;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
}

input[type="submit"]:hover 
{
    background-color: #4cae4c;
}
</style> 
<body>  
   <h1>Cancel Your Order</h1>  
   <form action= "cancel.php" method="post">  
      <label for="textInput">Enter your phno:</label><br>  
      <input type="text" id="phone" name="phone" required><br><br>  
      <input type="submit" value="Submit">  
   </form>  
</body>