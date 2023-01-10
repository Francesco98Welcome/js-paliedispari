/*
    Pari e Dispari
    L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.
*/
const sceltaPariODispari = prompt('Scegli pari o dispari?');
const numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));

console.log(numeroUtente);

function generaNumeroRandom(min,max) {
    const numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}

let numeroComputer = '';
for (let i = 0; i < 1; i++) {
    numeroComputer = generaNumeroRandom(1 , 5);
    console.log(numeroComputer);
}

const somma = numeroUtente + numeroComputer;
console.log('----------------------');
console.log(somma);

function pariODispari(numero) {
    if(numero % 2 == 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}
const result = pariODispari(somma);
console.log('la somma è ' + result);


if (sceltaPariODispari == 'pari' && somma % 2 == 0) {
    console.log('ha vinto utente');
} else if (sceltaPariODispari == 'dispari' && somma % 2 == 1) {
    console.log('ha vinto utente');
} else if (sceltaPariODispari == 'pari' && somma % 2 == 1 || sceltaPariODispari == 'dispari' && somma % 2 == 0) {
    console.log('ha vinto il pc');
}