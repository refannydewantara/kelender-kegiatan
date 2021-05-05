var agendas = document.querySelector('.agendas');

var xhr2 = new  XMLHttpRequest();

  xhr2.onreadystatechange = function(){
    if (xhr2.readyState == 4 && xhr2.status == 200){
        agendas.innerHTML = xhr2.responseText;
    }

}
xhr2.open('GET', 'ajaxdate.php', true);
xhr2.send();