
function passwordGenerieren(passLang, funkKleineBuchstaben, FunkGrosseBuchstaben, FunkZahlen, FunkSymbols){

    const KleineBuchstaben = "abcdefghijklmnopqrstuvwxyz";
    const GrosseBuchstaben = "ABCDEFGHIGKLMNOPQRSTUVWXYZ";
    const Zaheln = "1234567890";
    const Symbols = "!@#$%^&*()_>?<";

    let aktiveFunktion = "";
    let password = "";

    aktiveFunktion += funkKleineBuchstaben ? KleineBuchstaben : '';
    aktiveFunktion += FunkGrosseBuchstaben ? GrosseBuchstaben : '';
    aktiveFunktion += FunkZahlen ? Zaheln : '';
    aktiveFunktion += FunkSymbols ? Symbols : '';

    if (passLang <= 8) {

        // console.log("das Password muss mehr als 0 sein")
        return 'das Password muss mehr als 8 sein';
    }
    if(aktiveFunktion.length === 0){
        return `du musst eins oder mehrere funktion anmachen!!!`
    }

    for (let i = 0; i < passLang; i++) {
        const random = Math.floor(Math.random() * aktiveFunktion.length);
        password += aktiveFunktion[random];
    }
    

    return password;

}


const passLang = 17;
const funkKleineBuchstaben = true;
const FunkGrosseBuchstaben = true;
const FunkZahlen = true;
const FunkSymbols = true;

const password = passwordGenerieren(passLang, funkKleineBuchstaben, FunkGrosseBuchstaben, FunkZahlen, FunkSymbols);


console.log(`fertige Passwords ist ( ${password} )`);