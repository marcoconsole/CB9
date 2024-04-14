// Esercitazione Avanzata 1 //
//NON SONO RIUSCITO AD UTILIZZARE FILTER E MAP //


const people= ["Marco", "Luca", "Lia"];
const peopleList = [
  {
    name: "Marco",
    money: 2000,
  },
  {
    name: "Luca",
    money: 4000,
  },
  {
    name: "Lia",
    money: 2500,
  }
];

  for (let i=0; i<peopleList.length; i++){
    if(peopleList[i].money<3000){
    peopleList[i].money = peopleList[i].money + (peopleList[i].money * 0.1 );
  }
}

  console.log(peopleList);

  // Esercitazione Avanzata 2 //
  //NON SONO RIUSCITO AD UTILIZZARE LE CALLBACKS //

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