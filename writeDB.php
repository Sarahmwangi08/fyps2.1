<?php
/**
 * Created by PhpStorm.
 * User: bizsa
 * Date: 10/07/2018
 * Time: 10:48
 */


include 'connect.php';

$usermail = $_POST['username'];
$userpass = $_POST['password'];
$userpass2 = md5($_POST['password']);

echo $usermail,' ',$userpass2;

$sql = "insert into pms_users(pms_user_email,pms_user_password) value ('$usermail','$userpass');";

if ($conn->query($sql)===true){
    echo 'successful';
}else{
    echo 'failed';
}

?>