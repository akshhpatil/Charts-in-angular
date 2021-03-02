<?php
/**
 * Returns the list of policies.
 */
//require 'database.php';
 include('database.php');   
$data = [];
$sql = "SELECT id, number,month,num FROM chart";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $data[$i]['id']    = $row['id'];
    $data[$i]['number'] = $row['number'];
    $data[$i]['month'] = $row['month'];
    $data[$i]['num'] = $row['num'];
    $i++;
  }
    
  echo json_encode($data);
}
else
{
  http_response_code(404);
}