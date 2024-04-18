// Esercitazione 1 //

function averageNum (numbers){
    const numbers = [];
    let number = prompt("Inserisci un numero (inserisci una stringa vuota per terminare):");
    
    while (number !== "") {
        numbers.push(parseFloat(number));
        }
    let sum=0;
    for (let i=0; i<numbers.length; i++){
        sum= numbers[i];
    }
    if (numbers.lenght === 0){
        return "Nessun numero inserito";
    } else {
        const average = sum/numbers.lenght;
        return average;
    }
}

const result = averageNum(numbers);
console.log ("la media dei numeri inseriti è:"+ result);