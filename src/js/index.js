function passwordGenerieren(passLang, funkKleineBuchstaben, FunkGrosseBuchstaben, FunkZahlen, FunkSymbols) {
    const KleineBuchstaben = "abcdefghijklmnopqrstuvwxyz";
    const GrosseBuchstaben = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Zahlen = "1234567890";
    const Symbols = "!@#$%^&*()_>?<";

    let aktiveFunktion = "";
    let password = "";

    if (funkKleineBuchstaben) {
        aktiveFunktion += KleineBuchstaben;
    }
    if (FunkGrosseBuchstaben) {
        aktiveFunktion += GrosseBuchstaben;
    }
    if (FunkZahlen) {
        aktiveFunktion += Zahlen;
    }
    if (FunkSymbols) {
        aktiveFunktion += Symbols;
    }
    if (aktiveFunktion.length === 0) {
        return 'Du musst mindestens eine Funktion aktivieren!';
    }

    for (let i = 0; i < passLang; i++) {
        const random = Math.floor(Math.random() * aktiveFunktion.length);
        password += aktiveFunktion[random];
    }

    return password;
}

document.getElementById("Submit").addEventListener("click", () => {
    const passLang = document.getElementById("Number").value;
    const funkKleineBuchstaben = document.getElementById("KleineBuchstaben").checked;
    const FunkGrosseBuchstaben = document.getElementById("GrosseBuchstaben").checked;
    const FunkZahlen = document.getElementById("Zahlen").checked;
    const FunkSymbols = document.getElementById("Symbols").checked;

    const password = passwordGenerieren(passLang, funkKleineBuchstaben, FunkGrosseBuchstaben, FunkZahlen, FunkSymbols);

    document.getElementById("anzeigen").textContent = password;
});



function copyText() {
    const textToCopy = document.getElementById("anzeigen").textContent;
    navigator.clipboard.writeText(textToCopy)
        .then(function() {
            alert("Text wurde kopiert!");
            document.getElementById("anzeigen").textContent = '';
        })
}
document.getElementById("copyButton").addEventListener("click", copyText);