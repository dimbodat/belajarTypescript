
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
