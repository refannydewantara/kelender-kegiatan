<?php
$connect = mysqli_connect('localhost', 'root', '', 'agenda');
$result = mysqli_query($connect, 'SELECT * FROM agenda');
$json_array = array();
while ($row = mysqli_fetch_assoc($result)){
    $json_array[] = $row;
}
echo json_encode($json_array);
?>

