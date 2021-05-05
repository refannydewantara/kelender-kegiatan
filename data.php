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




// cari semua no agenda
$allnomor = [];
for ($i = 0; $i < $rows; $i++){
    $nomor = ($semuadata[$i]['NO_AGENDA']);
    $allnomor[] = $nomor;
    
}

// Cari semua tanggal - masukkan ke array
$alltanggal = [];
for ($i = 0; $i < $rows; $i++){
    $tanggal = ($semuadata[$i]['TGL_AGENDA']);
    if (!in_array($tanggal, $alltanggal)){
        $alltanggal[] = $tanggal;
    }
}

// var_dump ($tanggals);
// var_dump ($alltanggal);           

// Buat array untuk tiap tanggal - satu tanggal satu array
foreach ($alltanggal as $index => $tanggal){
    $strtgl = str_replace('-', '', $tanggal);
    ${'tgl'.$strtgl} = [];
    // echo $strtgl;
    // echo '<br>';
    // echo $index;
    // echo '<br>';
    ${'tgl'.$strtgl}[] = query("SELECT * FROM agenda WHERE TGL_AGENDA = '$tanggal'");
    
    
    echo "<script>";
    // echo "var tgl = 123;";
    // echo ("var tgl = document.querySelector('#tgl'" + $strtgl + "' .kegiatans');");
    echo "setTimeout(function(){ ";
    echo "var tgl = document.querySelector(";
    echo "'#tgl";
    echo $strtgl;
    echo " .kegiatans');";
    echo "console.log(tgl);";
    // echo "('#tgl' + $strtgl + ' .kegiatans')";
    // echo ";";
    echo "console.log('tes js');";
    echo "}, 0);";
    echo "</script>";
    // var_dump (${'tgl'.$strtgl}[0]);
    
    foreach ((${'tgl'.$strtgl}[0]) as $tgl){
    
    if ($tgl["JENIS_AGENDA"] == 1){
        echo "<script>";
        echo "var xhr2 = new  XMLHttpRequest();
            xhr2.onreadystatechange = function(){
            if (xhr2.readyState == 4 && xhr2.status == 200){ ";
        echo "setTimeout(function(){ ";
        echo "var tgl = document.querySelector(";
        echo "'#tgl";
        echo $strtgl;
        echo " .kegiatans');";
        echo "tgl.innerHTML += '<div class=\"kegiatan eks\"></div>';";
        echo "}, 20);
            } } ";
        echo "xhr2.open('GET', 'index.php', true);
            xhr2.send();";
        echo "</script>";
        // echo "satu";
        
    } else {
        echo "<script>";
        echo "var xhr2 = new  XMLHttpRequest();
            xhr2.onreadystatechange = function(){
            if (xhr2.readyState == 4 && xhr2.status == 200){ ";
        echo "setTimeout(function(){ ";
        echo "var tgl = document.querySelector(";
        echo "'#tgl";
        echo $strtgl;
        echo " .kegiatans');";
        echo "tgl.innerHTML += '<div class=\"kegiatan int\"></div>';";
        echo "}, 20);
            } } ";
        echo "xhr2.open('GET', 'index.php', true);
            xhr2.send();";
        echo "</script>";
        // echo "dua";
        
    }
    
    


    }
}
?>

<script src="zcoret.js"></script>
<!-- <script>
var a = 1;
setTimeout(function(){ 
    console.log(a); }, 0);
console.log(a);
var a = 2;


</script> -->