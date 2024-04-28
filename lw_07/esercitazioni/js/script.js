const imageCardGen = (imageData) => {
    const wrapperEl = document.createElement ("div");
    const imageEl = document.createElement ("img");

    wrapperEl.className = "card--wrapper";
    imageEl.className = "card--image";
    imageEl.src = imageData.urls.small;
    imageEl.alt = imageData.alt_description;

    wrapperEl.addEventListener("click", () =>{
        window.open(imageData.urls.full, "_blank").focus();
    })

    wrapperEl.append(imageEl);
    return wrapperEl;

}

const listGen = () => {
    const listEl = document.createElement ("div");

    listEl.className = "card--list";

    return listEl;
}


// Logic

const BASE_URL = "https://api.unsplash.com";
const API_TOKEN = "QYV5vJ4vsvejITfB__BZAlk9zaKAfjjTgWeJwXJsnZM" ;
const SEARCH_QUERY = "bmw";
const PER_PAGE = 30;
const ROOT_EL = document.querySelector(".root");


const imageListEl = listGen();


// Async Logic
fetch (`${BASE_URL}/search/photos/?client_id=${API_TOKEN}
&query=${SEARCH_QUERY}&per_page=${PER_PAGE}`)


.then ((res) => res.json())
.then ((data) => {
    const listData = data.results;
    
    listData.map ((photo) => {
        const imageCardEl = imageCardGen(photo);

        imageListEl.append(imageCardEl);

    });
     ROOT_EL.append(imageListEl);
});


