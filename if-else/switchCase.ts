const customerName: string = "John";
const customerAge: number = 20;
const isCustomer: boolean = true;

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