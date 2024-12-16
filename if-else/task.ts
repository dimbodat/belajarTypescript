/**
 * @module if-else/task
 *
 * @description
 * - This module is used to learn about if-else in TypeScript.
 * - This module consists of two if-elses, and switch-case.
 * - tugas:
 *     1. buat nama variabel dengan contoh
 *        - nama: "Max"
 *        - alamat: "New York"
 *        - umur: 30
 *        - jenis kelamin: "laki-laki"
 *        - userLogin: false
 *
 *        hasilnya: "Hello, my name is Max. I live in New York. Iam male, 30 years."
 *        jika userLogin bernilai true, maka tambahkan "notes: Max is loggedIn"
 *        jika userLogin bernilai false, maka tambahkan "notes: Max is not loggedIn"
 *
 *      2. Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.
 *         Gunakan switch-case untuk kasus ini!
 *         Contoh:
 *          var hari = 21; var bulan = 1; var tahun = 1945;
 *          Maka hasil yang akan tampil di console adalah: '21 Januari 1945';
 **/

/*  kerjakan tugas di bawah ini */

// console.log("================= soal 1 =================");

// const nama: string = "Max";
// const alamat: string = "New York";
// const umur: number = 30;
// const jenisKelamin: string = "male";
// const userLogin: boolean = false;


// let description: string = 
//     "hello, my name is " + nama + ". i live in " + alamat + " i am " + jenisKelamin + "," + umur + " years " ;

    
// if(userLogin) {
//   console.log("Max is loggedIn");
// }
// else {
//   console.log("Max is not loggedIn");
// }
// console.log(description);


// console.log("================= soal 2 =================");


// const day: number = 1;
// const month: number = 5;
// const year: number = 1945;


// let monthName: string;

// switch (month) {
//   case 1:
//     monthName = "Januari";
//     break;
//   case 2:
//     monthName = "Februari";
//     break;
//   case 3:
//     monthName = "Maret";
//     break;
//   case 4:
//     monthName = "April";
//     break;
//   case 5:
//     monthName = "Mei";
//     break;
//   case 6:
//     monthName = "Juni";
//     break;
//   case 7:
//     monthName = "Juli";
//     break;
//   case 8:
//     monthName = "Agustus";
//     break;
//   case 9:
//     monthName = "September";
//     break;
//   case 10:
//     monthName = "Oktober";
//     break;
//   case 11:
//     monthName = "November";
//     break;
//   case 12:
//     monthName = "Desember";
//     break;
//   default:
//     monthName = "Tidak valid";
//     break;
// }

// const formatDate: string = + day + " " + monthName + " " + year;


// console.log(formatDate);



// berikan penilaian dari skala 
// A (point 85 ke atas), 
// B (point 80-84),
// C (point 75-79),
// D (point 70-74), 
// E (point 55-59), 
 

// const Nama: string = "Dimas";
// const Nilai: number = 12;


// let ipk;
// let keterangan;


// if (Nilai >= 85) {
//   ipk = 4.0;
//   keterangan = " Mendapatkan Nilai A ";
// } else if (Nilai >= 80) {
//   ipk = 3.5;
//   keterangan = "Mendapatkan Nilai B";
// } else if (Nilai >= 75 ) {
//   ipk = 3.0;
//   keterangan = "Mendapatkan Nilai C";
// } else if (Nilai >= 70 ) {
//   ipk = 2.5;
//   keterangan= "Mendapatkan Nilai D";
// }else if (Nilai <= 55 ) {
//   ipk = 0;
//   keterangan = "Tidak Mendapatkan Nilai "
// }

// console.log("Nama : " + Nama );
// console.log("nilai : " + Nilai);
// console.log("IPK : " + ipk);
// console.log("Keterangan : " + keterangan);


// var gacha = 

// // gacha nya itu kaya dadu ada 6 sisi, hasil nya 1-5
// kalo 1 coba lagi
// kalo 2 dapet kupon 5
// kalo 3 dapet kupon 10
// 4 kupon 20
// 5 Selamat! anda mendapat jackpot kupon 50

// 0 ga ada
// ga boleh ada 0 hasilnya
// math.random, math.floor, sama math.ceil



// Fungsi untuk me-roll dadu
function rollDice(): number {
    // Menghasilkan angka acak dari 1 hingga 6
    return Math.floor(Math.random() * 6) + 2; 
  }
  
  // Fungsi untuk menentukan hasil berdasarkan nilai dadu
  function gachaResult(diceRoll: number): string {
    switch (diceRoll) {
        case 1:
            return "Coba lagi!"; // Jika roll 1
        case 2:
            return "Anda mendapat kupon 5!"; // Jika roll 2
        case 3:
            return "Anda mendapat kupon 10!"; // Jika roll 3
        case 4:
            return "Anda mendapat kupon 20!"; // Jika roll 4
        case 5:
            return "Selamat! Anda mendapat jackpot kupon 50!"; // Jika roll 5
        case 6:
            return "Coba lagi!"; // Jika roll 6
        default:
            return "Tidak ada hasil"; 
    }
  }
  
  const diceRoll = rollDice();
  console.log(` Hasil dadu: `  + diceRoll );
  console.log(gachaResult(diceRoll));