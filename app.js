function parolaolustur (length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    
    const lowercasedizi = "abcdefghijklmnoprstuvyzxwq";
    const uppercasedizi = "ABCDEFGHIJKLMNOPRSTUVYZXQW";
    const numbersdizi = "1234567890";
    const symboldizi = "!'^+%&/=?*-";

    let izinlidiziler = "";
    let parola = "";

    izinlidiziler += includeLowercase ? lowercasedizi: "";
    izinlidiziler += includeUppercase ? uppercasedizi: "";
    izinlidiziler += includeNumbers ? numbersdizi: "";
    izinlidiziler += includeSymbols ? symboldizi: "";

    if (izinlidiziler.length === 0) {
        return `(En az 1 karakter seti seçilmelidir.)`;
    }

    if(length <= 0) {
        return `(Parolanızda en az 1 karakter olmalı.)`;
    }
   
    
   for(let i = 0; i < length; i++) {
    const randomindex = Math.floor(Math.random() * izinlidiziler.length);
    parola += izinlidiziler[randomindex];
   }

    return parola;
   
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const parola = parolaolustur (passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);

console.log(`Üretilen Parola: ${parola}`);