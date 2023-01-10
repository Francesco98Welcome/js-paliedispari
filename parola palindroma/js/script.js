let inserisciUnaParola = prompt('Inserisci una parola');
let parolaInversa = invertiParola(inserisciUnaParola);

if(inserisciUnaParola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
  }
  
function invertiParola(str){
  let strInversa = str.split('').reverse().join('');  
  return strInversa;
}