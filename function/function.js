"use strict";
const penjumlahan = (angkaPertama, angkaKedua) => {
    return angkaPertama + angkaKedua;
};
const pengurangan = (angkaPertama, angkaKedua) => {
    return angkaPertama - angkaKedua;
};
const perkalian = (angkaPertama, angkaKedua) => {
    return angkaPertama * angkaKedua;
};
const pembagian = (angkaPertama, angkaKedua) => {
    return angkaPertama / angkaKedua;
};
const modulus = (angkaPertama, angkaKedua) => {
    return angkaPertama % angkaKedua;
};
const totalAngkaDiJumlah = penjumlahan(10, 20);
const totalAngkaDiKurang = pengurangan(10, 20);
const totalAngkaDiKali = perkalian(10, 20);
const totalAngkaDiBagi = pembagian(10, 20);
const totalAngkaDiModulus = modulus(10, 20);
console.log("Hasil penjumlahan: " + totalAngkaDiJumlah);
console.log("Hasil pengurangan: " + totalAngkaDiKurang);
console.log("Hasil perkalian: " + totalAngkaDiKali);
console.log("Hasil pembagian: " + totalAngkaDiBagi);
console.log("Hasil modulus: " + totalAngkaDiModulus);
