### 28/08/2024

# hari ketiga
## belajar variable
- Variabel sebagai tempat penyimpanan data yang digunakan dalam program. Variabel dapat menyimpan berbagai data seperti `string`, `number`, `boolean`, dan mungkin masih ada lagi.
- contoh :
```typescript     
    let nama: string = "Max";
    let umur: number = 30;
    const negara: string = "Indonesia";
```

## belajar loop (for loop)
- `loop` digunakan untuk mengulangi blok kode tertentu sebanyak beberapa kali
- `for loop` digunakan ketika jumlah iterasi diketahui sebelumnya
- contoh
```typescript

const initialNumber: number = 0;
const finalNumber: number = 10;
const increment: number = 1;

for (let i = initialNumber; i < finalNumber; i = i + increment) {
    console.log(i + 2);
}
// loop asterisk

for (let i = initialNumber; i < finalNumber; i++) {
    let star = "";
    for (let j = 0; j <= i; j++) {
        star += "*";
    }

    console.log(star);
}
```

## belajar loop while
- `loop while` digunakan untuk mengulangi blok kode selama kondisi tertentu
- contoh 
```typescript
let intialNumberWhile: number = 0;

while (intialNumberWhile > 10) {
    console.log(intialNumberWhile);
    intialNumberWhile++;
}
```
## belajar if-else
- Digunakan untuk membuat keputusan dalam program berdasarkan kondisi tertentu. `if` mengevaluasi kondisi, dan `else` memberikan alternatif jika kondisi `if` tidak terpenuhi.
- contoh
```typescript

let totalAngka = 10;

const angkaPertama = 7;
const angkaKedua = 14;
const angkaKetiga = 15;

if (angkaPertama > angkaKedua) {
    console.log("Angka pertama lebih besar dari angka kedua", 111);
} else if (angkaKedua > angkaKetiga) {
    console.log("Angka kedua lebih besar dari angka ketiga", 222);
} else if (angkaKetiga < angkaPertama) {
    console.log("Angka ketiga lebih besar dari angka pertama", 333);
} else {
    console.log("Semua angka sama besar", 444);
}

```

## belajar switch case
- Struktur kontrol yang digunakan untuk mempermudah pengambilan keputusan yang melibatkan banyak kondisi.
- contoh
```typescript

const customerName = "John";
const customerAge = 20;
const isCustomer = true;
switch (isCustomer) {
    case customerAge < 8:
        console.log("John tidak boleh main di taman bermain kora kora.");
        break;
    case customerAge < 20:
        console.log("John boleh main dengan harga setengah di taman bermain kora kora.");
        break;
    case customerAge < 50:
        console.log("John boleh main dengan harga full di taman bermain kora kora.");
        break;
    case customerAge > 50:
        console.log("John akan mati.");
        break;
    default:
        break;
}
```

## belajar function
- Fungsi adalah blok kode yang dapat digunakan kembali untuk melakukan tugas tertentu. Fungsi bisa menerima input (parameter) dan mengembalikan output.
- contoh
```typescript

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

```
### 27/08/2024

-

### 26/08/2024

# hari pertama
## setup 2 akun github: personal, work related.
    -   Bikin email dan username personal, work

- Setup local biar bisa konek ke akun github.
    - Menginstal git (git --version)
    - Mengonfigurasi username dan email untuk commit ke github:
        -   git config --global user.name "Username"
        -   git config --global user.email "email@example.com"
        
    -   Memasukan code SHH key:
        -   ssh-keygen -t rsa -C "your-email-for-work@example.com" id_rsa_work(untuk akun wok related)
        -   sh-keygen -t rsa -C "your-email-for-personal@example.com"
            id_rsa_personal(untuk akun personal)

    - Menambahkan SSH key ke SSH agent:
        -   ssh-add -l
        -   ATAU eval "$(ssh-agent -s)"

    -   Menambahkan SSH key ke akun github:
        -   cat ~/.ssh/id_rsa_work.pub
        -   cat ~/.ssh/id_rsa_personal.pub

    - Meng-clone repository dari github dan mengerjakan dengan Git:
        -   git clone git@github.com:username/repo-name.git


## belajar git:
     Belajar cara bikin project:
        1.  Memulai project baru:
                -   git init
        2.  Menambahkan file:
                -   git add .
        3.  Memaksa perubahan dari file yang dibuat:
                -   git commit -am "tekt dicolom"
        4.  Membuat branch baru:
                -   git checkout -b nama_branch
        5.  Beralih ke branch yang sudah ada:
                - git checkout nama_branch
        6.  Menarik perubahan dari Repository:
                - git pull
        7.  Mendorong perubahan dari Repository:
                - git push


## belajar bikin readme :
    -   Memulai membuat judul project menggunakan '#' didepan
    -   Mendeskripsi singkat tentang project yang dibuat
    -   Menginstal atau mengatur perintah dari instalasi readme tersebut



## Menginstal Node.js
    -   npm init -y
    -   setelah menjalankan perintah di terminal, muncul sebuah file 'package.json'.


## Menginstal typescript
    - Menginstal typescript secara global dengan menggunakan perintah 'tsc':

        -   npm install -g typescript
    
    - Melihat versi dari typescript tersebut:
    
        -   tsc --version (contoh: Version 5.2.2)
    
    - Menginstalasi project Typescript dengan file konfigurasi 'tsconfig.json'
    
        -   tsc --init
