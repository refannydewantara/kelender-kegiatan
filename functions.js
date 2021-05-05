function klikSimpan(){
  document.querySelector('.simpan').addEventListener('click', function(e){
    e.preventDefault();
    console.log('simpan terklik');
    fetch('crud.php')
    .then(response=> {
      response;
      console.log(response.text());
      fetchmonth (curmonth);
    })
  })
}


function klikBatalRekam(){
  document.querySelector('.batal.rekam').addEventListener('click', function(){
    document.querySelector('.main').classList.remove('shrink');
    document.querySelector('.right').style.visibility = 'hidden';
})

}

function klikClose(){

  document.querySelector('.close').addEventListener('click', function(){
      document.querySelector('.main').classList.remove('shrink');
      document.querySelector('.right').style.visibility = 'hidden';
  })
}

function klikRekam(){
  document.querySelector('.main').classList.add('shrink');
  document.querySelector('.right').style.visibility = 'visible';
  document.querySelector('.right .rekam').innerHTML=`
                <form action="" method="post">
                <div class="header">
                    <div class="judul">Detail Kegiatan</div>
                    <div class="close"><i class="fas fa-times"></i></div>
                </div>
                <ul>
                    <li>
                        <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                        <input type="text" id="namkeg" name="namkeg" value="" required><br>
                    </li>
                    <li>
                        <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                        <input type="text" id="sifkeg" name="sifkeg" value="" required><br>
                    </li>   
                    <li>
                        <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                        <input type="text" onfocus="(this.type='date')" id="tangkeg" name="tangkeg" value="" required><br>
                    </li>
                    <li class="dokkeg1">
                        <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                        <input type="text" id="dokkeg1" name="dokkeg1" value=""><br>
                    </li>
                    <li class="dokkeg2">
                        <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                        <input type="text" id="dokkeg2" name="dokkeg2" value=""><br>
                    </li>
                    <li class="dokkeg3">
                        <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                        <input type="text" id="dokkeg3" name="dokkeg3" value=""><br>
                    </li>
                    <li>
                        <label for="abskeg" class="labelup">Link Absensi</label><br>
                        <input type="text" id="abskeg" name="abskeg" value=""><br>
                    </li>
                    <li>
                        <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                        <input type="text" id="fotkeg" name="fotkeg" value=""><br>
                    </li>
                </ul>
                <div class="button">
                    
                        <button type="submit" class="simpan" name="simpan">Simpan</button>
                        <div class="batal rekam" type="submit">Batal</div>
                  
                    
                </div>
                
                </form>
                `;
    // klikSimpan();
    klikBatalRekam();
    klikClose();
}


function fetchmonth (curmonth){
  switch (curmonth) {
    case 1:
      document.querySelector('.month .header').innerHTML = "Januari 2021";
      break;
    case 2:
      document.querySelector('.month .header').innerHTML = "Februari 2021";
      break;
    case 3:
      document.querySelector('.month .header').innerHTML = "Maret 2021";
      break;
    case 4:
      document.querySelector('.month .header').innerHTML = "April 2021";
      break;
    case 5:
      document.querySelector('.month .header').innerHTML = "Mei 2021";
      break;
    case 6:
      document.querySelector('.month .header').innerHTML = "Juni 2021";
      break;
    case 7:
      document.querySelector('.month .header').innerHTML = "Juli 2021";
      break;
    case 8:
      document.querySelector('.month .header').innerHTML = "Agustus 2021";
      break;
    case 9:
      document.querySelector('.month .header').innerHTML = "September 2021";
      break;
    case 10:
      document.querySelector('.month .header').innerHTML = "Oktober 2021";
      break;
    case 11:
        document.querySelector('.month .header').innerHTML = "November 2021";
        break;
    case 12:
        document.querySelector('.month .header').innerHTML = "Desember 2021";
        break;
  }

  document.getElementById(curmonth).classList.add('current');
    
    fetch(`bulan/${curmonth}.php`)
      .then(response=>response.text())
      // .then(response=>console.log(response))
      .then(response=> {
        document.querySelector('.dates').innerHTML = response;
        var date = new Date ();
        var curmonth = date.getMonth() + 1;
        var curmonthStr = curmonth.toString();
        var curdate = date.getDate();
        var curdateStr = curdate.toString();
        var today = `tgl2021-${curmonthStr.padStart(2, '0')}-${curdateStr.padStart(2, '0')}`;
        console.log(today);
        document.querySelector('#' + today).classList.add('today');
      })
      
        // ambil data dari database, ubah ke json
        fetch('connect.php')
        .then(response => response.json())
        .then(response=> {


          //bikin border ke tanggal yg di-klik
          var date = document.querySelectorAll('.date');
          date.forEach(e => {
            e.addEventListener('click', function (){
              if (document.querySelector('.curDate')){
                document.querySelector('.curDate').classList.remove('curDate');
              }
              e.classList.add('curDate');
              document.querySelector('.agendas').innerHTML=`
              <div class="agenda no0">
                <div class=agenda0>Tidak ada agenda di hari ini. Ingin
                <span class=agendaask>menambahkan kegiatan ?</span> </div>
              </div>`

              document.querySelector('.agendaask').addEventListener('click', function(){
                klikRekam();
              })
            });
          })
    
          // bikin array kosong untuk menampung tanggal
          let tanggals = [];
        
          // tampung semua tanggal
          for (i = 0; i<= response.length - 1; i++){
           
            // menghilangkan tanggal yang duplikat
            if (!tanggals.includes(response[i].TGL_AGENDA)){
              tanggals.push(response[i].TGL_AGENDA)
            }
          }
          
          //bikin pin kegiatan ke tanggal
          for (i = 0; i<= response.length - 1; i++){
    
            if (document.querySelector('#tgl' + response[i].TGL_AGENDA)){
              if (response[i].JENIS_AGENDA == '0'){
                document.querySelector('#tgl' + response[i].TGL_AGENDA + ' .kegiatans').innerHTML += 
                '<div class="kegiatan int"></div>'
              } else {
                document.querySelector('#tgl' + response[i].TGL_AGENDA + ' .kegiatans').innerHTML += 
                '<div class="kegiatan eks"></div>'
              }
            }
          }
    
          tanggals.forEach(e => {
            if (document.querySelector('#tgl' + e)){
              
              document.querySelector('#tgl' + e).addEventListener('click', function(){
                
                
                //cari objek yang mengandung tanggal = e
                //tampung ke wadah
                //looping
                let events = [];
                response.forEach(r =>{
                  if(r.TGL_AGENDA == e){
                    events.push(r)
                  }
                })
                let eventNames = '';
    
                for (i = 0 ; i <= events.length - 1; i++){
                  if (events[i].JENIS_AGENDA == '1'){
                    eventNames +=
                    `<div class="agenda no${(i+1)}">
                    <span class=pineks></span>
                        <span class=name>${events[i].NAMA_AGENDA}</span>
                    </div>`
                  } 
                  else {
                      eventNames +=
                    `<div class="agenda no${(i+1)}">
                    <span class=pinint></span>
                        <span class=name>${events[i].NAMA_AGENDA}</span>
                    </div>`
                  }
                  document.querySelector('.agendas').innerHTML = eventNames;     
                               
    
                }
                events.forEach((el,i) => {
                  document.querySelector('.agenda' + '.no' + (i+1)).addEventListener('click', function(){
                    
                    
                    if (document.querySelector('.curAgenda')){
                      document.querySelector('.curAgenda').classList.remove('curAgenda');
                    }
                    this.classList.add('curAgenda');
                    document.querySelector('.main').classList.add('shrink');
                    document.querySelector('.right').style.visibility = 'visible';
                    document.querySelector('.rekam').innerHTML=`
                    <form action="" method="post">
                  <div class="header">
                    <div class="judul">Detail Kegiatan</div>
                    <div class="close"><i class="fas fa-times"></i></div>
                </div>
        <ul>
            <li class="noagenda">
                <input type="text" class="detail nokeg" name="nokeg" value="${el.NO_AGENDA}"></input>
            </li>
            <li>
                <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                <div class="detail namkeg">${el.NAMA_AGENDA}</div>
            </li>
            <li>
                <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                <div class="detail sifkeg">${el.JENIS_AGENDA}</div>
            </li>   
            <li>
                <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                <div class="detail tangkeg"></a>${el.TGL_AGENDA}</div>
            </li>
            <li class="dokkeg1">
                <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                <div class="detail dokkeg1"><a href="#">${el.LINK_DOK1}</a></div>
            </li>
            <li class="dokkeg2">
                <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                <div class="detail dokkeg2"><a href="#">${el.LINK_DOK2}</a></div>
            </li>
            <li class="dokkeg3">
                <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                <div class="detail dokkeg3"><a href="#">${el.LINK_DOK3}</a></div>
            </li>
            <li>
                <label for="abskeg" class="labelup">Link Absensi</label><br>
                <div class="detail abskeg"><a href="#">${el.LINK_ABSEN}</a></div>
            </li>
            <li>
                <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                <div class="detail fotkeg"><a href="#">${el.LINK_FOTO}</a></div>
            </li>
        </ul>
        <div class="button"> 
          <div class="ubah" name="ubah">Ubah</div>
          <button type="submit" class="hapus" name="hapus">Hapus</button>
        </div>
        
    </form>`;
    klikClose();
    // document.querySelector('.hapus').addEventListener('click', function(){
    //   console.log('hapus');
    //   if(confirm('hapus data ?')){

    //     fetch(`crud.php?nokeg=${el.NO_AGENDA}`)
    //       .then(response=> {
    //         response;
    //         fetchmonth (curmonth);
        
    //       })
    //   }
          

      
    // })
    function klikUbah(){

      document.querySelector('.ubah').addEventListener('click', function(){
          document.querySelector('.rekam').innerHTML=
          
            `<form action="" method="post">
            <div class="header">
                    <div class="judul">Detail Kegiatan</div>
                    <div class="close"><i class="fas fa-times"></i></div>
                </div>
            <ul>
                <li class="noagenda">
                    <input  type="text" id="nokeg" name="nokeg" value="${el.NO_AGENDA}"><br>
                </li>
                <li>
                    <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                    <input type="text" id="namkeg" name="namkeg" value="${el.NAMA_AGENDA}"><br>
                </li>
                <li>
                    <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                    <input type="text" id="sifkeg" name="sifkeg" value="${el.JENIS_AGENDA}"><br>
                </li>   
                <li>
                    <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                    <input type="text" onfocus="(this.type='date')" id="tangkeg" name="tangkeg" value="${el.TGL_AGENDA}"><br>
                </li>
                <li class="dokkeg1">
                    <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                    <input type="text" id="dokkeg1" name="dokkeg1" value="${el.LINK_DOK1}"><br>
                </li>
                <li class="dokkeg2">
                    <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                    <input type="text" id="dokkeg2" name="dokkeg2" value="${el.LINK_DOK2}"><br>
                </li>
                <li class="dokkeg3">
                    <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                    <input type="text" id="dokkeg3" name="dokkeg3" value="${el.LINK_DOK3}"><br>
                </li>
                <li>
                    <label for="abskeg" class="labelup">Link Absensi</label><br>
                    <input type="text" id="abskeg" name="abskeg" value="${el.LINK_ABSEN}"><br>
                </li>
                <li>
                    <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                    <input type="text" id="fotkeg" name="fotkeg" value="${el.LINK_FOTO}"><br>
                </li>
            </ul>
            <div class="button">    
                    <button type="submit" class="simpan" name="update">Simpan</button>
                    <div class="batal ubah">Batal</div>
            </div>
            </form>
                `;
            // klikSimpan()
            klikClose();
      
                document.querySelector('.batal.ubah').addEventListener('click',function(){
                  console.log('ada tombol batal');
                  document.querySelector('.rekam').innerHTML= `
                        <form action="" method="post">
                      <div class="header">
                        <div class="judul">Detail Kegiatan</div>
                        <div class="close"><i class="fas fa-times"></i></div>
                    </div>
            <ul>
                <li class="noagenda">
                <input type="text" class="detail nokeg" name="nokeg" value="${el.NO_AGENDA}"></input>
                </li>
                <li>
                    <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                    <div class="detail namkeg" name="namkeg">${el.NAMA_AGENDA}</div>
                </li>
                <li>
                    <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                    <div class="detail sifkeg">${el.JENIS_AGENDA}</div>
                </li>   
                <li>
                    <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                    <div class="detail tangkeg"></a>${el.TGL_AGENDA}</div>
                </li>
                <li class="dokkeg1">
                    <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                    <div class="detail dokkeg1"><a href="#">${el.LINK_DOK1}</a></div>
                </li>
                <li class="dokkeg2">
                    <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                    <div class="detail dokkeg2"><a href="#">${el.LINK_DOK2}</a></div>
                </li>
                <li class="dokkeg3">
                    <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                    <div class="detail dokkeg3"><a href="#">${el.LINK_DOK3}</a></div>
                </li>
                <li>
                    <label for="abskeg" class="labelup">Link Absensi</label><br>
                    <div class="detail abskeg"><a href="#">${el.LINK_ABSEN}</a></div>
                </li>
                <li>
                    <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                    <div class="detail fotkeg"><a href="#">${el.LINK_FOTO}</a></div>
                </li>
            </ul>
            <div class="button"> 
              <div class="ubah" name="ubah">Ubah</div>
              <button type="submit" class="hapus" name="hapus">Hapus</button>
            </div>
            
        </form>`;
        
        // document.querySelector('.hapus').addEventListener('click', function(){
        //   console.log('hapus');
        //   if(confirm('hapus data ?')){
    
        //     fetch(`crud.php?nokeg=${el.NO_AGENDA}`)
        //       .then(response=> {
        //         response;
        //         fetchmonth (curmonth);
            
        //       })
        //   }
              
    
          
        // })         

        klikClose();        
        klikUbah();
                })
          })
      }

    klikUbah();  
    

                // document.querySelector('.ubah').addEventListener('click', function(){
                //   document.querySelector('.rekam').innerHTML=
                  
                //     `<form action="" method="post">
                //     <ul>
                //         <li>
                //             <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                //             <input type="text" id="namkeg" name="namkeg" value="${el.NAMA_AGENDA}"><br>
                //         </li>
                //         <li>
                //             <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                //             <input type="text" id="sifkeg" name="sifkeg" value="${el.JENIS_AGENDA}"><br>
                //         </li>   
                //         <li>
                //             <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                //             <input type="text" onfocus="(this.type='date')" id="tangkeg" name="tangkeg" value="${el.TGL_AGENDA}"><br>
                //         </li>
                //         <li class="dokkeg1">
                //             <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                //             <input type="text" id="dokkeg1" name="dokkeg1" value="${el.LINK_DOK1}"><br>
                //         </li>
                //         <li class="dokkeg2">
                //             <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                //             <input type="text" id="dokkeg2" name="dokkeg2" value="${el.LINK_DOK2}"><br>
                //         </li>
                //         <li class="dokkeg3">
                //             <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                //             <input type="text" id="dokkeg3" name="dokkeg3" value="${el.LINK_DOK3}"><br>
                //         </li>
                //         <li>
                //             <label for="abskeg" class="labelup">Link Absensi</label><br>
                //             <input type="text" id="abskeg" name="abskeg" value="${el.LINK_ABSEN}"><br>
                //         </li>
                //         <li>
                //             <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                //             <input type="text" id="fotkeg" name="fotkeg" value="${el.LINK_FOTO}"><br>
                //         </li>
                //     </ul>
                //     <div class="button">    
                //             <button type="submit" class="simpan" name="simpan">simpan</button>
                //             <div class="batal">batal</div>          
                //     </div>
                //     </form>
                //         `;


                //         document.querySelector('.batal').addEventListener('click',function(){
                //           console.log('ada tombol batal');
                //           document.querySelector('.rekam').innerHTML= `
                //                 <form action="" method="post">
                //     <ul>
                //         <li>
                //             <label for="namkeg" class="labelup">Nama Kegiatan</label><br>
                //             <div class="detail namkeg">${el.NAMA_AGENDA}</div>
                //         </li>
                //         <li>
                //             <label for="sifkeg" class="labelup">Sifat Kegiatan</label><br>
                //             <div class="detail sifkeg">${el.JENIS_AGENDA}</div>
                //         </li>   
                //         <li>
                //             <label for="tangkeg" id="labeltangkeg" class="labelup">Tanggal Kegiatan</label><br>
                //             <div class="detail tangkeg"></a>${el.TGL_AGENDA}</div>
                //         </li>
                //         <li class="dokkeg1">
                //             <label for="dokkeg1" class="labelup">Dokumen Pendukung</label><br>
                //             <div class="detail dokkeg1"><a href="#">${el.LINK_DOK1}</a></div>
                //         </li>
                //         <li class="dokkeg2">
                //             <label for="dokkeg2" class="labelup">Dokumen Pendukung</label><br>
                //             <div class="detail dokkeg2"><a href="#">${el.LINK_DOK2}</a></div>
                //         </li>
                //         <li class="dokkeg3">
                //             <label for="dokkeg3" class="labelup">Dokumen Pendukung</label><br>
                //             <div class="detail dokkeg3"><a href="#">${el.LINK_DOK3}</a></div>
                //         </li>
                //         <li>
                //             <label for="abskeg" class="labelup">Link Absensi</label><br>
                //             <div class="detail abskeg"><a href="#">${el.LINK_ABSEN}</a></div>
                //         </li>
                //         <li>
                //             <label for="fotkeg" class="labelup">Foto Kegiatan</label><br>
                //             <div class="detail fotkeg"><a href="#">${el.LINK_FOTO}</a></div>
                //         </li>
                //     </ul>
                //     <div class="button"> 
                //       <div class="ubah" name="ubah">Ubah</div>
                //       <button class="hapus">Hapus</button>
                //     </div>
                    
                // </form>`
                //         })
                //   }); 
    

                    
                  })
               
                });
    
              })
            }
          });
    
      })
}

function showPrevNext (){
    if (curmonth < 12){
    document.querySelector('.next').style.visibility = 'visible';
  }
  if (curmonth == 12){
    document.querySelector('.next').style.visibility = 'hidden';
  }
  if (curmonth > 1) {
    document.querySelector('.prev').style.visibility = 'visible';
  }
  if (curmonth == 1) {
    document.querySelector('.prev').style.visibility = 'hidden';
  }
  
}

console.log('hai');