<?php
/**
 * Created by PhpStorm.
 * User: bizsa
 * Date: 10/07/2018
 * Time: 10:49
 */

$host = '50.116.30.188';
$db = 'PMSDB';
$user = 'sarahmwangi';
$pwd = 'SAMAjuwa04';


$conn = mysqli_connect($host,$user,$pwd,$db);

if ($conn->connect_error){
    die($conn);
}else{
    echo 'success';
}


?>