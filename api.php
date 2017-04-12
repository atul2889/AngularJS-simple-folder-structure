<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true' );
header('Access-Control-Request-Method: *');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: *,x-requested-with,Content-Type');
header('Content-type: application/json; charset=UTF-8');
$action = $_GET['action'];
$con = mysqli_connect("localhost","root","","test");
if($action==="registerUser")	{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $pass = base64_encode($_POST['pass']);
    $query = "INSERT INTO users (name,email,password) VALUES ('$name','$email','$pass')";
    $result = mysqli_query($con,$query);
    return true;
}
elseif($action==="login"){
    $uname = $_POST['username'];
    $pass = base64_encode($_POST['password']);
    $query = "select * from users where email='".$uname."' and password='".$pass."'";
    $result = mysqli_query($con,$query);
    while($row = mysqli_fetch_array($result, MYSQLI_ASSOC))
    {
        echo json_encode($row);
    }

}

?>