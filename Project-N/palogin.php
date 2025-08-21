<?php
 $host="localhost";
 $user="root";
 $pass="";
 $dbname="database_name";
 $conn=new mysqli($host,$user,$pass,$dbname);
 if($conn->connect_error)
  {
    die("could not connect:".$conn->connect_error);
  }
 $username=$_POST["admin"];
 $password=$_POST["apwd"];
 $sql="SELECT * FROM admin WHERE username= '$username' ";
 $query=$conn->query($sql);
 $rows=$query->num_rows;
 $data=$query->fetch_assoc();
  if($rows == 0)
   {
	 echo"<script>alert('Admin does not Exist');window.location='psloginpage.php';</script>";
   }
  else if($data['password']!=$password)
   {
	 echo"<script>alert('Invalid Password');window.location='psloginpage.php';</script>";
   }
  else if($data['password']==$password)
   {
	 session_start();
	 $_SESSION["admin"]=$data["fullname"];
	 echo"<script>window.location='pahome.php';</script>";
   }
?>