fetch('connect.php')
    .then(response => response.json())
    .then(response=> response.forEach(a => {
        console.log(a.NAMA_AGENDA);
        
    }));

document.querySelector('body').innerHTML = 'tes';