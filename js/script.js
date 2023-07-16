let button = document.getElementById('hitung');

button.addEventListener('click',() =>
{
    //Mengambil nilai input
    const tb = document.getElementById('tb').value;
    const bb = document.getElementById('bb').value;
    const usia = document.getElementById('Usia').value;

    // Memilih elemen hasil
    const result = document.getElementById('hasil');
    const nilai = document.getElementById('nilai');
    const keterangan = document.getElementById('keterangan');
    const penjelasan = document.getElementById('penjelasan');

    // Menginisialisasi variabel status
    let status_tb=false, status_bb=false, status_usia=false;

    function hitungBMI(){
        // Menghitung BMI
        const bmi = (bb / ((tb*tb)/10000)).toFixed(1);
        result.style.display='flex';

        if(bmi < 18.6)
        {
            // Menampilkan hasil BMI dan detailnya
            nilai.innerHTML = '<h3>' + bmi + '</h3>';
            keterangan.innerHTML = '<p>Kekurangan Berat Badan</p>'
            penjelasan.innerHTML = '<p>aaaaaaaaaaaaaaaaaaaaaaaaaa</p>'
        }
    }

    function cekInput(){

     // Validasi input tinggi badan
    if(tb === '' || (tb <= 0)) {
        document.getElementById('tb_error').innerHTML = 'Masukkan tinggi badan yang valid';
    }else{
        document.getElementById('tb_error').innerHTML = '';
        status_tb=true;
    }

    // Validasi input berat badan
    if(bb === '' || (bb <= 0)) {
        document.getElementById('bb_error').innerHTML = 'Masukkan berat badan yang valid';
    }else{
        document.getElementById('bb_error').innerHTML = '';
        status_bb=true;
    }

    // Validasi input usia
    if(usia === '' || (usia <= 0)) {
        document.getElementById('Usia_error').innerHTML = 'Masukkan usia yang valid';
    }else{
        document.getElementById('Usia_error').innerHTML = '';
        status_usia=true;   
    }

    // Memeriksa jika semua input valid
    if(status_bb && status_tb && status_usia ) 
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