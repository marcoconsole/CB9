   // Esercitazione 1 //

function averageNum (){
    const numbers = [];
    let number = prompt("Inserisci un numero (inserisci una stringa vuota per terminare):");
    
    while (number !== "") {
        numbers.push(parseFloat(number));
        number = prompt("Inserisci un numero (inserisci una stringa vuota per terminare):");
        }
    let sum = 0;
    for (let i = 0; i<numbers.length; i++){
        sum += numbers[i];
    }
    if (numbers.lenght === 0){
        return "Nessun numero inserito";
    } else {
       const average = sum/numbers.lenght;
        return average;
   }
}

const result = averageNum();
console.log ("la media dei numeri inseriti è:"+ result);


//Esercitazione 2 + Esercitazione 3//


    const imgGen = (imgUrl, title) => {
    const listEl = document.createElement("li");
    const imgEl = document.createElement ("img");
    
    
    imgEl.className = "listImg";
    imgEl.src = imgUrl;
    imgEl.alt = title;

    // Esercitazione 3//
     imgEl.addEventListener("click", () => {
        imgEl.style.transform = imgEl.style.transform === "rotate(90deg)" ? "" : "rotate(90deg)";
    });
    
    listEl.append(imgEl);
    return listEl;
    
}

const rootEl = document.querySelector("#root");
const list = document.createElement("ul");
const img1 = imgGen ("https://picsum.photos/200/300/?1", "Prima immagine");
const img2 = imgGen ("https://picsum.photos/200/300/?2", "Seconda immagine");
list.append(img1, img2);
rootEl.append(list);


// Esercitazione avanzata //

   /*  const cardGen = (location, temp, weatherImg, description) => {
    
    const cardEl = document.createElement("div");
    const locationEl = document.createElement("h3");
    const tempEl = document.createElement("p");
    const weatherEl = document.createElement("img");
    const descriptionEl = document.createElement("p");
    


    cardEl.className = "card";
    locationEl.textContent = location;
    tempEl.textContent = temp;
    weatherEl.src = weatherImg;
    weatherEl.alt = description;
    descriptionEl.textContent = description;


    


    switch (weatherEl) {
        case 'soleggiato':
            weatherImg  = 'https://picsum.photos/200/300/?1';
          break;
        case 'nuvoloso':
            weatherImg = 'https://picsum.photos/200/300/?2';
          break;
        case 'pioggia':
            weatherImg = 'https://picsum.photos/200/300/?3';
          break;
        case 'neve':
            weatherImg = 'https://picsum.photos/200/300/?4';
          break;
        default:
            weatherImg = "";
          break;
    }


    cardEl.append(locationEl, tempEl, weatherEl, descriptionEl);

    return cardEl;

}
    const rootEl = document.querySelector("#root");
    const weather = ["soleggiato", "nuvoloso", "pioggia", "neve"];

    const card1 = cardGen(Bari, 20, "soleggiato", "soleggiato");

    
    rootEl.append(card1);     */

    
    // -------- Volevo creare una funzione che inserisse uno sfondo preimpostato 
    // in base alla condizione meteo selezionata, ho commesso degli errori che non riesco a correggere --------- //