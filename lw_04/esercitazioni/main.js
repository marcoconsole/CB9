// Prima esercitazione //

//const MyBirth = '08/03/1992';
//let ToDate = '08/03/1992';
//if (MyBirth === ToDate) {
//   console.log ("Buon compleanno!, ecco il tuo regalo 🎁");
//}   else {
        //console.log("Non è ancora il tuo compleanno");
    //}

// Seconda esercitazione //

const MyRoutine = [
    "Mi alzo dal letto", 
    "Faccio colazione", 
    "Mi lavo", 
    "Mi vesto", 
    "Preparo lo zaino", 
    "Esco di casa", 
    "Guido verso l'azienda", 
    "Timbro il cartellino", 
    "Lavoro sodo per 8 ore", 
    "Torno a casa", 
    "Studio le slide", 
    "Seguo la lazione CB9", 
    "Mangio la cena", 
    "Eseguo questa esercitazione", 
    "Vado a nanna"
];
for (let i=0; i < MyRoutine.length; i++) {
    console.log(MyRoutine[i]);
}

// Esercitazione avanzata 1 //

const MyBirth = prompt ("Inserisci la tua data di nascita");
let ToDate = '08/03/1992';
if (MyBirth === ToDate) {
    console.log ("Buon compleanno!, ecco il tuo regalo 🎁");
}   else {
        console.log("Non è ancora il tuo compleanno");
    }

//Esercitazione avanzata 2 //

function calcolatrice() {
let FirstNum = prompt ("Inserisci il primo numero");
let Operation = prompt ("Inserisci una delle seguenti operazioni (+, -, *, /):");
let SecNum = prompt ("Inserisci il secondo numero");
let Result;

switch (Operation) {
    case '+':
        Result = parseFloat (FirstNum) + parseFloat (SecNum);
    break;
    case '-':
        Result = parseFloat (FirstNum) - parseFloat (SecNum);
    break;
    case '*':
        Result = parseFloat (FirstNum) * parseFloat (SecNum);
    break;
    case '/':
        Result = parseFloat (FirstNum) / parseFloat (SecNum);
    break;
}
    console.log(Result);
}

// Tutte le esercitazoni concluse //