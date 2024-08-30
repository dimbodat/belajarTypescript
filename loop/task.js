"use strict";
// buatlah loop terbalik, dari atas kebawah 100 ke 0
// const initialNumber: number = 100;
// const finalNumber: number = 0;
// for (let i = initialNumber; i >= finalNumber; i--) {
//         console.log(i);
//     }
// buatlah loop dari 1 - 100, tampilkan hanya angka ganjil
// const initialNumber: number = 1;
// const finalNumber: number = 100;
// const increment: number = 1;
// for (let i = initialNumber; i <= finalNumber; i += increment) {
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// buatlah loop dari 1 - 100, tampilkan hany angka genap
// const initialNumber: number = 2;
// const finalNumber: number = 100;
// const increment: number = 1;
// for(let i = initialNumber; i <= finalNumber; i += increment) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// main bintang
// const initialNumber: number = 0;
// const finalNumber: number = 100;
// const increment: number = 1;
// for (let i = initialNumber; i < finalNumber; i++) {
//     let star = "";
//     for (let j = 0; j <= i; j++) {
//         star += "*";
//     }
//     console.log(star);
// }
/**
 * @module loop/task
 *
 * @description
 * - this module is user to learn about loop in TypeScript
 * - this module consists of two loops, for and while.
 * - tugas
 *     - loop for terbalik (reverse for loop)
 *     - loop for dengan kondisi tertentu (for loop with certain condition)
 *     - loop asterisk
 *     - loop while terbalik (reverse while loop)
 *     - loop while dengan kondisi tertentu (while loop with certain condition)
 *     - loop while asterisk
 */
/*  kerjakan tugas di bawah ini */
console.log("================= loop for terbalik =================");
const initialNumber = 10;
const finalNumber = 0;
for (let i = initialNumber; i >= finalNumber; i--) {
    console.log(i);
}
console.log("================= loop kondisi tertentu: ganjil =================");
const initialNumberGanjil = 1;
const finalNumberGanjil = 10;
const increment = 1;
for (let i = initialNumberGanjil; i <= finalNumberGanjil; i += increment) { // kondisi tertentu: melewati angka genap
    if (i % 2 !== 0) {
        console.log(i);
    }
}
console.log("================= loop kondisi tertentu: genap =================");
const initialNumberGenap = 2;
const finalNumberGenap = 10;
const incrementGenap = 1;
for (let i = initialNumberGenap; i <= finalNumberGenap; i += incrementGenap) { // kondisi tertentu: melewati angka ganjil
    if (i % 2 === 0) {
        console.log(i);
    }
}
console.log("================= loop while terbalik =================");
let initialnumberWhile = 10;
while (initialnumberWhile > 0) {
    console.log(initialnumberWhile);
    initialnumberWhile--;
}
console.log("================= loop while kondisi tertentu: angka ganjil =================");
let initialnumberWhileganjil = 1;
while (initialnumberWhileganjil <= 10) {
    if (initialnumberWhileganjil % 2 !== 0) {
        console.log(initialnumberWhileganjil);
    }
    initialnumberWhileganjil++;
}
console.log("================= loop while kondisi tertentu: angka genap =================");
let initialnumberWhilegenap = 1;
while (initialnumberWhilegenap <= 10) {
    if (initialnumberWhilegenap % 2 === 0) {
        console.log(initialnumberWhilegenap);
    }
    initialnumberWhilegenap++;
}
console.log("================= loop while asterisk =================");
let initialnumber = 10;
let i = initialNumber;
while (i >= 1) {
    let initialnumber = '';
    let j = 1;
    while (j <= i) {
        initialnumber += '*';
        j++;
    }
    console.log(initialnumber);
    i--;
}
