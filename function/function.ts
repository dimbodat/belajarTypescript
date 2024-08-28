const penjumlahan = (angkaPertama: number, angkaKedua: number): number => {
    return angkaPertama + angkaKedua;
};

const pengurangan = (angkaPertama: number, angkaKedua: number): number => {
    return angkaPertama - angkaKedua;
};

const perkalian = (angkaPertama: number, angkaKedua: number): number => {
    return angkaPertama * angkaKedua;
};

const pembagian = (angkaPertama: number, angkaKedua: number): number => {
    return angkaPertama / angkaKedua;
};

const modulus = (angkaPertama: number, angkaKedua: number): number => {
    return angkaPertama % angkaKedua;
};

const totalAngkaDiJumlah: number = penjumlahan(10, 20);
const totalAngkaDiKurang: number = pengurangan(10, 20);
const totalAngkaDiKali: number = perkalian(10, 20);
const totalAngkaDiBagi: number = pembagian(10, 20);
const totalAngkaDiModulus: number = modulus(10, 20);

console.log("Hasil penjumlahan: " + totalAngkaDiJumlah);
console.log("Hasil pengurangan: " + totalAngkaDiKurang);
console.log("Hasil perkalian: " + totalAngkaDiKali);
console.log("Hasil pembagian: " + totalAngkaDiBagi);
console.log("Hasil modulus: " + totalAngkaDiModulus);