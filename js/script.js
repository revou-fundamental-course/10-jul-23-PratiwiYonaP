let button = document.getElementById('hitung');

button.addEventListener('click',() =>
{
    //Mengambil nilai input
    const tb = parseInt(document.getElementById('tb').value);
    const bb = parseInt(document.getElementById('bb').value);
    const usia = parseInt(document.getElementById('Usia').value);
    var jk = document.getElementsByName("jenis_kelamin");
    var jenisKelamin;

    for (var i = 0; i < jk.length; i++) {
        if (jk[i].checked) {
          jenisKelamin = jk[i].value;
          break;
        }
      }

    // Memilih elemen hasil
    const result = document.getElementById('hasil');
    const nilai = document.getElementById('nilai');
    const keterangan = document.getElementById('keterangan');
    const penjelasan = document.getElementById('penjelasan');

    // Menginisialisasi variabel status
    let status_tb=false, status_bb=false, status_usia=false, status_opsi = false;

    function hitungBMI(){
        // Menghitung BMI
        const bmi = (bb / ((tb*tb)/10000)).toFixed(1);
        result.style.display='flex';

        var container = document.getElementById("image");
        container.innerHTML = "";


        // Menampilkan hasil BMI dan detailnya
        if(bmi < 18.5)
        {
            if(jenisKelamin === "Laki-laki"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/underweight-male.svg";
                container.appendChild(imgElement);
            }

            else if(jenisKelamin === "Perempuan"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/underweight-female.svg";
                container.appendChild(imgElement);
            }

            nilai.innerHTML = '<h2>' + bmi + '</h2>';
            keterangan.innerHTML = '<p>Kekurangan Berat Badan</p>'
            penjelasan.innerHTML = '<p>Hasil perhitungan mengindikasikan bahwa Anda memiliki berat badan yang kurang atau termasuk dalam kategori kurus. Hasil ini didasarkan pada nilai BMI Anda yang berada di bawah 18.5. Sebagai solusinya, Anda memerlukan tambahan asupan kalori sebanyak 300-500 kkal per hari. Selain itu, Anda juga perlu memperbaiki pola makan dan gaya hidup untuk mendapatkan berat badan yang ideal.</p>'
        }

        else if( bmi >= 18.5 && bmi <= 24.9)
        {
            if(jenisKelamin === "Laki-laki"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/healthy-male.svg";
                container.appendChild(imgElement);
            }

            else if(jenisKelamin === "Perempuan"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/healthy-female.svg";
                container.appendChild(imgElement);
            }

            nilai.innerHTML = '<h2>' + bmi + '</h2>';
            keterangan.innerHTML = '<p>Normal (ideal)</p>'
            penjelasan.innerHTML = '<p>Hasil perhitungan mengindikasikan bahwa Anda memliki berat badan normal (ideal). Hasil ini didasarkan pada nilai BMI Anda yang berada dalam rentang 18.5 hingga 24.9. Memiliki berat badan yang ideal dapat menjadi salah satu upaya untuk menjaga kesehatan tubuh secara keseluruhan. Selain itu hal tersebut juga bisa mencegah timbulnya berbagai penyakit yang berisiko. Menjaga berat badan ideal bisa dilakukan dengan menjaga pola makan dan rutin melakukan aktivitas olahraga. Pada intinya, Anda harus terus menjaga pola hidup yang sehat. Pastikan agar selalu menjaga keseimbangan antara asupan energi dan pengeluaran energi.</p>'
        }

        else if( bmi >= 25.0 && bmi <= 29.9)
        {
            if(jenisKelamin === "Laki-laki"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/overweight-male.svg";
                container.appendChild(imgElement);
            }

            else if(jenisKelamin === "Perempuan"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/overweight-female.svg";
                container.appendChild(imgElement);
            }
            nilai.innerHTML = '<h2>' + bmi + '</h2>';
            keterangan.innerHTML = '<p>Kelebihan Berat Badan</p>'
            penjelasan.innerHTML = '<p>Hasil perhitungan mengindikasikan bahwa Anda memiliki berat badan berlebih. Hasil ini didasarkan pada nilai BMI Anda yang berada dalam rentang 25 hingga 29.9. Sebagai langkah yang tepat, Anda perlu membatasi asupan kalori harian sekitar 300-500 kkal. Mulai saat ini, usahakan untuk lebih memperhatikan jumlah kalori dalam makanan dan minuman yang Anda konsumsi.  Mengurangi jumlah kalori harian sekitar 500 kkal dapat membantu mengurangi berat badan sekitar 0,5-1 kg per minggu. Tidak hanya itu, Mengurangi berat badan juga dapat tercapai dengan cara melakukan aktivitas olahraga secara rutin. Namun penting untuk diingat bahwa hindari mengonsumsi kalori di bawah 1.200 kkal per hari karena bisa berdampak buruk pada kesehatan.</p>'
        }

        else if( bmi >= 30.0 )
        {
            if(jenisKelamin === "Laki-laki"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/obese_level_2-male.svg";
                container.appendChild(imgElement);
            }

            else if(jenisKelamin === "Perempuan"){
                var imgElement = document.createElement("img");
                imgElement.src = "assets/obese_level_2-female.svg";
                container.appendChild(imgElement);
            }
            nilai.innerHTML = '<h2>' + bmi + '</h2>';
            keterangan.innerHTML = '<p>Kegemukan (Obesitas)</p>'
            penjelasan.innerHTML = '<p>Hasil perhitungan mengindikasikan bahwa Anda termasuk kedalam kategori obesitas. Hasil ini didasarkan pada nilai BMI Anda yang bernilai 30.0 atau lebih. Penting untuk dipahami bahwa obesitas memiliki risiko yang lebih besar jika dibandingkan dengan berat badan berlebih. Seseorang yang memiliki kelebihan berat badan belum tentu obesitas, sedangkan seseorang yang obesitas sudah dipastikan memiliki berat badan yang berlebih. Jika tidak diatasi, dapat berpotensi mengakibatkan berbagai penyakit serius. Sebagai solusinya, perlu membatasi asupan kalori harian sekitar 300-500 kkal. Cara ini dapat membantu mengurangi berat badan sekitar 0,5-1 kg per minggu. Namun, membatasi asupan kalori saja tidak cukup. Anda harus menjalankan aktivitas olahraga secara teratur untuk mencapai berat badan yang ideal.</p>'
        }
    }

    function cekInput(){

     // Validasi input tinggi badan
    if(tb === '' || (tb <= 0)|| isNaN(tb)) {
        document.getElementById('tb_error').innerHTML = 'Masukkan tinggi badan yang valid';
    }else{
        document.getElementById('tb_error').innerHTML = '';
        status_tb=true;
    }

    // Validasi input berat badan
    if(bb === '' || (bb <= 0) || isNaN(bb)) {
        document.getElementById('bb_error').innerHTML = 'Masukkan berat badan yang valid';
    }else{
        document.getElementById('bb_error').innerHTML = '';
        status_bb=true;
    }

    // Validasi input usia
    if(usia === '' || (usia <= 0) || isNaN(usia)) {
        document.getElementById('Usia_error').innerHTML = 'Masukkan usia yang valid';
    }else{
        document.getElementById('Usia_error').innerHTML = '';
        status_usia=true;   
    }

    //Validasi input jenis kelamin
    for (var i = 0; i < jk.length; i++) {
        if (jk[i].checked) {
          status_opsi = true;
          break;
        }
      }

      if(!status_opsi){
        document.getElementById('jenisKelamin_error').innerHTML = 'Pilih jenis kelamin';
        }
    
    // Memeriksa jika semua input valid
    if(status_bb && status_tb && status_usia && status_opsi ) 
    {
        hitungBMI();
    }
    }

    // Memanggil fungsi validasi input
    cekInput();
    
})

function reload(){
    // Memuat ulang halaman web saat dipanggil
    window.location.reload()
}