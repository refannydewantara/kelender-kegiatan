<?php
require 'crud.php';
?>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Belum ada nama</title>
    
    <link rel="stylesheet" href="layout.css">
    <link rel="stylesheet" href="calendar.css">
    <link rel="stylesheet" href="right.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="left.css">
    <link rel="stylesheet" href="FA\css\all.css">
    
    
</head>
<body>
<div class="left">
    <div class="logo">Nama</i></div>    
    <div class="navbar">
        <div class="Nav Jan 1" id=1>Januari</div>
        <div class="Nav Feb 2" id=2>Februari</div>
        <div class="Nav Mar 3" id=3>Maret</div>
        <div class="Nav Apr 4" id=4>April</div>
        <div class="Nav Mei 5" id=5>Mei</div>
        <div class="Nav Jun 6" id=6>Juni</div>
        <div class="Nav Jul 7" id=7>Juli</div>
        <div class="Nav Agu 8" id=8>Agustus</div>
        <div class="Nav Sep 9" id=9>September</div>
        <div class="Nav Okt 10" id=10>Oktober</div>
        <div class="Nav Nov 11" id=11>November</div>
        <div class="Nav Des 12" id=12>Desember</div>
    </div>
</div>

<div class="main">
    
    <div class="calendar">
        <div class="container">
            <div class="month" id="Jan">
                <div class="header"></div>
                <div class="button">
                    <div class="prev"><i class="fas fa-chevron-left"></i></div>
                    <div class="next"><i class="fas fa-chevron-right"></i></div>
                </div>
                <div class="btnrekam"><i class="fas fa-plus"></i></div>

            </div>
            <div class="days" id="days">
                    <div class="day weekend" id="Min">Min</div>
                    <div class="day" id="Sen">Sen</div>
                    <div class="day" id="Sel">Sel</div>
                    <div class="day" id="Rab">Rab</div>
                    <div class="day" id="Kam">Kam</div>
                    <div class="day" id="Jum">Jum</div>
                    <div class="day weekend" id="Sab">Sab</div>   
            </div>
            <div class="dates" id="dates"></div>
            </div>
    </div>
    <div class="eventlist">
        <div class="title">
        Daftar Agenda
        </div>
        <div class="agendas">
        </div>
        
    </div>
</div>

<div class="right">
    
    <div class="rekam">
    </div>
</div>


<!-- <img src="loader.gif" alt="loading" class="loader"> -->


<script src="functions.js"></script>
<script src="fetchcalendar.js"></script>
<script src="event.js"></script>
<!-- <script src="rekam.js"></script>
<script src="button.js"></script>
<script src="ajaxdate.js"></script> -->
</body>
</html>






