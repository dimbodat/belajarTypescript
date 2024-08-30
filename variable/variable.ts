console.log("================= belajar variable string =================");

const userName: string = "Max";
const userAddress: string = "New York";
const userAge: number = 30;

const description: string =
    "Hello, my name is " + userName + ". I live in " + userAddress + ". I am " + userAge + " years old.";

console.log(description);

console.log("================= belajar variable number =================");

const variableAngkaPertama: number = 10;
const variableAngkaKedua: number = 20;

const totalTambah: number = variableAngkaPertama + variableAngkaKedua;
const totalKurang: number = variableAngkaPertama - variableAngkaKedua;
const totalKali: number = variableAngkaPertama * variableAngkaKedua;
const totalBagi: number = variableAngkaPertama / variableAngkaKedua;
const totalModulus: number = variableAngkaPertama % variableAngkaKedua;

console.log("Hasil penjumlahan: " + variableAngkaPertama + variableAngkaKedua);
console.log("Hasil pengurangan: " + totalKurang);
console.log("Hasil perkalian: " + totalKali);
console.log("Hasil pembagian: " + totalBagi);
console.log("Hasil modulus: " + totalModulus);

console.log("================= belajar variable boolean =================");

const isUserArif: boolean = true;
const isLoginArif: boolean = false;

console.log("Apakah user adalah arif? " + isUserArif);
console.log("Apakah user yang login arif? " + isLoginArif);
console.log("Apakah user adalah arif dan yang login arif? " + (isUserArif && isLoginArif));
console.log("Apakah user adalah arif atau yang login arif? " + (isUserArif || isLoginArif));
console.log("Apakah user adalah arif dan yang login bukan arif? " + (isUserArif && !isLoginArif));
