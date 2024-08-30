"use strict";
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
