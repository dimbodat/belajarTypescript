console.log("================= belajar variable string =================");

const userName: string = "max";
const userAddress: string = "new york";
const userAge: number = 30;

const descriptsion: string = 
    " Hello, my name is " + userName + " . I live in " + userAddress + " . I am " + userAge + " years old.";

console.log(descriptsion);

console.log("================= belajar variable number =================");

const variableangkaPertama: number = 10;
const variableangkaKedua: number = 20;

const totalTambah: number = variableangkaPertama + variableangkaKedua;
const totalKurang: number = variableangkaPertama - variableangkaKedua;
const totalKali: number = variableangkaPertama * variableangkaKedua;
const totalBagi: number = variableangkaPertama / variableangkaKedua;
const totalModulus: number = variableangkaPertama % variableangkaKedua;

console.log("hasil penjumlahan: " + totalTambah);
console.log("hasil pengurangan: " + totalKurang);
console.log("hasil perkalian: " + totalKali);
console.log("hasil pembagian: " + totalBagi);
console.log("hasil modulus: " + totalModulus);

console.log("================= belajar variable boolean =================");

const isUserArif: boolean = true;
const isLoginArif: boolean = false;

console.log("Apakah user adalah arif? " + isUserArif);
console.log("Apakah user yang login arif? " + isLoginArif);
console.log("Apakah user adalah arif dan yang login arif? " + (isUserArif && isLoginArif));
console.log("Apakah user adalah arif atau yang login arif? " + (isUserArif || isLoginArif));
console.log("Apakah user adalah arif dan yang login bukan arif? " + (isUserArif && !isLoginArif));



