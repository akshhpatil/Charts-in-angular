<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type:application/json;charset=UTF-8");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "ang";

// Create connection
$con = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($con->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
