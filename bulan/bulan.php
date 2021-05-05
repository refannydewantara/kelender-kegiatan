<?php for ($i = 1 ; $i <= $awalBulan ; $i++) : ?>
                <div class="date" id="tgl0"></div>
            <?php endfor ?>

            <?php for ($i = 1 ; $i <= $jmlHari ; $i++) : ?>

                <?php if (($i + $awalBulan) % 7 == 0 || ($i + $awalBulan) % 7 == 1 || in_array($i,$tglmerah)) : ?>
                    
                    <div class="date weekend" id="tgl2021-<?=sprintf('%02d', $bulan)?>-<?=sprintf('%02d', $i)?>">
                        <div class="tanggal"><?=$i?></div>
                        <div class="kegiatans"></div>
                    </div>
                <?php else :?> 

                    <div class="date" id="tgl2021-<?=sprintf('%02d', $bulan)?>-<?=sprintf('%02d', $i)?>">
                        <div class="tanggal"><?=$i?></div>
                        <div class="kegiatans"></div>
                    </div>
                <?php endif ?>
            <?php endfor ?>
        <div class="indeks">
            <div class="internal">
                <span class="int"></span>
                Internal
            </div>
            <div class="eksternal">
                <span class="eks"></span>
                Eksternal
            </div>
        </div>
        