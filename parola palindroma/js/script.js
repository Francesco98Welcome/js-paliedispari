let inserisciUnaParola = prompt('Inserisci una parola');
let parolaInversa = invertiParola(inserisciUnaParola);
let h2 = document.querySelector('h2');

if(inserisciUnaParola == parolaInversa){
    console.log('la parola è palindroma');
    h2.innerHTML = 'la parola è palindroma';
} else {
    console.log('la parola non è palindroma');
    h2.innerHTML ='la parola non è palindroma';
}
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}