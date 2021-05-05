<?php
$conn = mysqli_connect('localhost', 'root', '', 'agenda');

if (isset($_POST["simpan"])) {

    
        global $conn;
        $namkeg = htmlspecialchars($_POST["namkeg"]);
        $sifkeg = htmlspecialchars($_POST["sifkeg"]);
        $tangkeg = htmlspecialchars($_POST["tangkeg"]);
        $dokkeg1 = htmlspecialchars($_POST["dokkeg1"]);
        $dokkeg2 = htmlspecialchars($_POST["dokkeg2"]);
        $dokkeg3 = htmlspecialchars($_POST["dokkeg3"]);
        $abskeg = htmlspecialchars($_POST["abskeg"]);
        $fotkeg = htmlspecialchars($_POST["fotkeg"]);
       
        
        $query = "INSERT INTO agenda (NAMA_AGENDA, TGL_AGENDA, JENIS_AGENDA,
                    LINK_DOK1, LINK_DOK2, LINK_DOK3,
                    LINK_ABSEN, LINK_FOTO)
                    VALUES
                (
                '$namkeg',
                '$tangkeg',
                '$sifkeg',
                '$dokkeg1',
                '$dokkeg2',
                '$dokkeg3',
                '$abskeg',
                '$fotkeg'
                )
                ";
        mysqli_query($conn, $query);
        header("location:index.php");
        
  
            

    
    
} 

if (isset($_POST["update"])) {

    
    global $conn;
    $nokeg = ($_POST["nokeg"]);
    $namkeg = htmlspecialchars($_POST["namkeg"]);
    $sifkeg = htmlspecialchars($_POST["sifkeg"]);
    $tangkeg = htmlspecialchars($_POST["tangkeg"]);
    $dokkeg1 = htmlspecialchars($_POST["dokkeg1"]);
    $dokkeg2 = htmlspecialchars($_POST["dokkeg2"]);
    $dokkeg3 = htmlspecialchars($_POST["dokkeg3"]);
    $abskeg = htmlspecialchars($_POST["abskeg"]);
    $fotkeg = htmlspecialchars($_POST["fotkeg"]);
   
    
    $query = "UPDATE agenda SET
                NAMA_AGENDA = '$namkeg',
                TGL_AGENDA = '$tangkeg',
                JENIS_AGENDA = '$sifkeg',
                LINK_DOK1 = '$dokkeg1',
                LINK_DOK2 = '$dokkeg2',
                LINK_DOK3 = '$dokkeg3',
                LINK_ABSEN = '$abskeg',
                LINK_FOTO = '$fotkeg'

                WHERE NO_AGENDA = '$nokeg'
                ";
    mysqli_query($conn, $query);
    header("location:index.php");
    

        



} 

if (isset($_POST["hapus"])){
    global $conn;
    $nokeg = ($_POST["nokeg"]);
    $noke = 123;

    $query = "DELETE FROM agenda WHERE NO_AGENDA = '$nokeg'";

    mysqli_query($conn, $query);
    // var_dump($nokeg);

    // echo "<script>alert('no keg $nokeg terhapus');</script>";
    header("location:index.php");

}


// var_dump($_POST["simpan"]);
// var_dump($_GET["nokeg"]);





?>