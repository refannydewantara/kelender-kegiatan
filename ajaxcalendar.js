
// var next = document.querySelector('.next');
// var prev = document.querySelector('.prev');
// var dates = document.querySelector('.dates');
// var month = document.querySelector(".month .header");

// var curmonth = 1;

// function namaBulan(curmonth) {
//   console.log(curmonth);
  
//   switch (curmonth) {
//   case 1:
//     month.innerHTML = "2021, Januari";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Jan');
//     break;
//   case 2:
//     month.innerHTML = "2021, Februari";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Feb');
//     break;
//   case 3:
//     month.innerHTML = "2021, Maret";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Mar');
//     break;
//   case 4:
//     month.innerHTML = "2021, April";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Apr');
//     break;
//   case 5:
//     month.innerHTML = "2021, Mei";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Mei');
//     break;
//   case 6:
//     month.innerHTML = "2021, Juni";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Jun');
//     break;
//   case 7:
//     month.innerHTML = "2021, Juli";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Jul');
//     break;
//   case 8:
//     month.innerHTML = "2021, Agustus";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Agu');
//     break;
//   case 9:
//     month.innerHTML = "2021, September";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Sep');
//     break;
//   case 10:
//     month.innerHTML = "2021, Oktober";
//     month.removeAttribute('id');
//     month.setAttribute('id', 'Okt');
//     break;
//   case 11:
//       month.innerHTML = "2021, November";
//       month.removeAttribute('id');
//     month.setAttribute('id', 'Nov');
//       break;
//   case 12:
//       month.innerHTML = "2021, Desember";
//       month.removeAttribute('id');
//     month.setAttribute('id', 'Des');
//       break;
// }}

// namaBulan(curmonth);


// // tampilan bulan default-current month
// var xhr = new  XMLHttpRequest();

//   xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         dates.innerHTML = xhr.responseText;
//     }

// }
// xhr.open('GET', 'bulan/1.php', true);
// xhr.send();
   

 

//   if (curmonth < 2) {
//     prev.style.display = "none";
//   } else {
//     prev.style.display = "block";
//   }

//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.add('current');






// // klik tombol next - bulan selanjutnya
// next.addEventListener('click', function(){
//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.remove('current');
  

//   var xhr = new  XMLHttpRequest();

//   xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         dates.innerHTML = xhr.responseText;
//     }

// }

//   xhr.open('GET', 'bulan/' + (curmonth + 1) + '.php', true);
//   xhr.send();
//   curmonth++;
//   console.log(curmonth);

//   if (curmonth > 11) {
//     next.style.display = "none";
//   } else {
//     next.style.display = "block";
//   }

//   if (curmonth < 2) {
//     prev.style.display = "none";
//   } else {
//     prev.style.display = "block";
//   }

//   namaBulan(curmonth);
//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.add('current');
// });

// // klik tombol prev-bulan sebelum
// prev.addEventListener('click', function(){
//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.remove('current');

//   var xhr = new  XMLHttpRequest();

//   xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         dates.innerHTML = xhr.responseText;
//     }
// }

//   xhr.open('GET', 'bulan/' + (curmonth - 1) + '.php', true);
//   xhr.send();
//   curmonth--;
//   console.log(curmonth);

//   if (curmonth > 11) {
//     next.style.display = "none";
//   } else {
//     next.style.display = "block";
//   }

//   if (curmonth < 2) {
//     prev.style.display = "none";
//   } else {
//     prev.style.display = "block";
//   }

//   namaBulan(curmonth);
//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.add('current');
// });



// var tombolNav = document.querySelector('.navbar');
// tombolNav.addEventListener('click', function(){
  
//   var curmonth = Number(event.target.classList.item(2));
//   console.log(curmonth);
  
//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.remove('current');

//   namaBulan(curmonth);
  

//   var xhr = new  XMLHttpRequest();
//   xhr.onreadystatechange = function(){
//     if (xhr.readyState == 4 && xhr.status == 200){
//         dates.innerHTML = xhr.responseText;
//     }
// }
//   xhr.open('GET', 'bulan/' + curmonth + '.php', true);
//   xhr.send();

//   if (curmonth < 2) {
//     prev.style.display = "none";
//   } else {
//     prev.style.display = "block";
//   }
  

//   var bulanCal = document.querySelector('.month .header').id;
//   var bulanNav = document.querySelector('.navbar #' + bulanCal);
//   bulanNav.classList.add('current');

//   window.curmonth = curmonth;

// })


  
  
  
  
  







