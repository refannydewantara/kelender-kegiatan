<?php 

$conn = mysqli_connect('localhost', 'root', '', 'agenda');

// $result = mysqli_query($conn, "SELECT * FROM agenda WHERE NO_AGENDA = 1");

function query($query){
    global $conn;
    $result = mysqli_query($conn, $query);
    $rows = [];
    while ($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    return $rows;
}

$semuadata = query("SELECT * FROM agenda");

$rows =  (count($semuadata));



?>