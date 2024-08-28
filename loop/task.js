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
// console.log("================= loop for terbalik =================");
// // const initialNumber: number = 10;
// // const finalNumber: number = 0;
// // for (let i = initialNumber; i >= finalNumber; i--) {
// //         console.log(i);
// //     }
//     console.log("================= loop kondisi tertentu: ganjil =================");
//  const initialNumber: number = 1;
// const finalNumber: number = 10;
// const increment: number = 1;
// for (let i = initialNumber; i <= finalNumber; i += increment) { // kondisi tertentu: melewati angka genap
//     if (i % 2 !== 0) {
//       console.log(i);
//     }
//   }
// console.log("================= loop kondisi tertentu: genap =================");
// const initialNumber: number = 2;
// const finalNumber: number = 10;
// const increment: number = 1;
// for(let i = initialNumber; i <= finalNumber; i += increment) { // kondisi tertentu: melewati angka ganjil
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// console.log("================= loop while terbalik =================");
// let initialnumberWhile: number = 10;
// while(initialnumberWhile > 0) {
//     console.log(initialnumberWhile);
//     initialnumberWhile--;
// } 
// console.log("================= loop while kondisi tertentu: angka ganjil =================");
// let initialnumberWhileganjil: number = 1;
// while (initialnumberWhileganjil <= 10) {
//     if (initialnumberWhileganjil % 2 !== 0) {
//         console.log(initialnumberWhileganjil);
//     }
//     initialnumberWhileganjil++;
// }
// console.log("================= loop while kondisi tertentu: angka genap =================");
// let initialnumberWhilegenap: number = 1;
// while (initialnumberWhilegenap <= 10) {
//     if (initialnumberWhilegenap % 2 === 0) {  
//         console.log(initialnumberWhilegenap);
//     }
//     initialnumberWhilegenap++;  
// }
// console.log("================= loop while asterisk =================");
// let initialNumber: number = 10;
// let i: number = initialNumber;
// while (i >= 1) {
//     let initialNumber: string = '';
//     let j: number = 1;
//     while (j <= i) {
//         initialNumber += '*';
//         j++;
//     }
//     console.log(initialNumber);
//     i--;
// }
