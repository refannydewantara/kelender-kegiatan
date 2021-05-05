


document.querySelector('.btnrekam').addEventListener('click',function(){
    klikRekam();
  
              })



var date = new Date ();
var curmonth = date.getMonth() + 1;
fetchmonth (curmonth);
// var curmonthStr = curmonth.toString();
// var today = `tgl2021-${curmonthStr.padStart(2, '0')}-${date.getDate()}`;
// console.log(today);

// document.querySelector('#' + today).classList.add('today');

document.querySelector('.prev').addEventListener('click', function(){
    document.getElementById(curmonth).classList.remove('current');
  curmonth --;
  console.log(curmonth);
  fetchmonth (curmonth);
  // if (curmonth < 12){
  //   document.querySelector('.next').style.visibility = 'visible';
  // }
  // if (curmonth == 1) {
  //   document.querySelector('.prev').style.visibility = 'hidden';
  // }
  showPrevNext ();
})

document.querySelector('.next').addEventListener('click', function(){
    document.getElementById(curmonth).classList.remove('current');
    curmonth ++;
  console.log(curmonth);
  fetchmonth (curmonth);
  showPrevNext ();

  // if (curmonth == 12){
  //   document.querySelector('.next').style.visibility = 'hidden';
  // }
  // if (curmonth > 1) {
  //   document.querySelector('.prev').style.visibility = 'visible';
  // }
})
              
document.querySelector('.navbar').addEventListener('click', function(e){
    // document.getElementById(curmonth).classList.remove('current');
    document.querySelector('.current').classList.remove('current');
    console.log(e.target.id);
  curmonth = parseInt(e.target.id);
  fetchmonth (curmonth);
  showPrevNext ();
  

})

// var scr = 0;
// window.addEventListener('wheel',function(e){
//     scr += e.deltaY;
//     if (scr >= 200){
//         document.getElementById(curmonth).classList.remove('current');
//         curmonth ++;
//         fetchmonth (curmonth);
//         showPrevNext ();
//         return scr = 0;
//     }
//     if (scr <= -200){
//         document.getElementById(curmonth).classList.remove('current');
//         curmonth --;
//         fetchmonth (curmonth);
//         showPrevNext ();
//         return scr = 0;
//     }
//     console.log(scr);
// })

