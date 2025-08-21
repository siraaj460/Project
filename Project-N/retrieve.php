<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data Base</title>
    <link rel="stylesheet" href="style.css">
    <style>  
		/* Add some basic styling to our layout */  
		body 
		{  
			font-family: Arial, sans-serif;  
			margin: 0;  
			padding: 0; 
            background-image: url(https://images.pexels.com/photos/7078622/pexels-photo-7078622.jpeg?auto=compress&cs=tinysrgb&w=600);
		}  
		  
		/* Style our header container */  
		.header
		{  
			background-color: #f0f0f0;  
			padding: 10px;  
			display: flex;  
			align-items: center;  
			justify-content: space-between;  
		}
        .navbar a
		{  
			color: #333;  
			text-decoration: none;  
			margin-right: 20px;  
		}  
		  
		.navbar a:hover
		{  
			color: #666;  
		}
        .table
        {
        table
        {
            border-collapse: collapse;
            width: 50%;
            background-color: white;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        th, td
        {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
        }
        th 
        {
            background-color: #4CAF50;
            color: white;
        }
        }
        .tt
        {
         padding-left: 150px; 
         width: 2500px; margin: 400px auto; height: 200px; 
        }
        .img
        {
            height: 200px;
            width: 200px;
            border-radius:50%;
        }
    </style>
</head>
<body>
<div class="header">  
			<img  src="nike hub.png" alt="Logo" class="img">  
		  
		<!-- Navigation bar -->  
		<div class="navbar">  
			<a href="Main.html">Home</a>  
			<a href="https://agreementservice.svs.nike.com/in/en_gb/rest/agreement?agreementType=privacyPolicy&uxId=com.nike.unite&country=IN&language=en&requestType=redirect">About</a>  
			<a href="https://www.nike.com/in/help/#contact">Contact</a>  
		</div>  
	</div>
    <center><h1> Welcome Back Admin</h1></center>
    <div class="tt"> 
<div class="table"> 
<?php
$conn = new mysqli("localhost", "root", "", "database_name");

if ($conn->connect_error){
    die("Connection failed: " . $conn->connect_error);
}
$sql='select * from price';
$r=$conn->query($sql);
if($r->num_rows>0)
{
echo "<table border=5>
<tr>
<th>Name</th>
<th>Phno</th>
<th>Address</th>
<th>Order</th>
</tr>";
while($row=$r->fetch_assoc())
{
echo "<tr>
<td>$row[name]</td>
<td>$row[phno]</td>
<td>$row[address]</td>
<td>$row[Ord]</td>
</tr>";
}
echo "</table>";
}
else
{
echo"no data found";
}
$conn->close();
?>
</div>
</div>
    
</body>
</html>
