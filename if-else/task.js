"use strict";
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
console.log("================= soal 1 =================");
const nama = "Max";
const alamat = "New York";
const umur = 30;
const jenisKelamin = "male";
const userLogin = false;
let description = "hello, my name is " + nama + ". i live in " + alamat + " i am " + jenisKelamin + "," + umur + " years ";
if (userLogin) {
    console.log("Max is loggedIn");
}
else {
    console.log("Max is not loggedIn");
}
console.log(description);
console.log("================= soal 2 =================");
const day = 1;
const month = 5;
const year = 1945;
let monthName;
switch (month) {
    case 1:
        monthName = "Januari";
        break;
    case 2:
        monthName = "Februari";
        break;
    case 3:
        monthName = "Maret";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "Mei";
        break;
    case 6:
        monthName = "Juni";
        break;
    case 7:
        monthName = "Juli";
        break;
    case 8:
        monthName = "Agustus";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "Oktober";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "Desember";
        break;
    default:
        monthName = "Tidak valid";
        break;
}
const formatDate = +day + " " + monthName + " " + year;
console.log(formatDate);
