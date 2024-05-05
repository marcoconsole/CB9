const divGen = () => {
  const divEl = document.createElement("div");

  divEl.className = "wrapper";

  return divEl;
};

const titleGen = (data) => {
  const titleEl = document.createElement("h1");
  titleEl.textContent = data.title;
  titleEl.className = "title";

  return titleEl;
};

const imageGen = (data) => {
  const imageEl = document.createElement("img");

  imageEl.className = "image";
  imageEl.src = data.image;
  imageEl.alt = data.title;

  return imageEl;
};

const pGen = (data) => {
  const pEl = document.createElement("p");

  pEl.className = "paragraph";
  pEl.textContent = data.description;

  return pEl;
};

//Esercizio avanzato //

const productCardGen = (data) => {
  const cardEl = divGen();

  const title = titleGen(data);
  cardEl.append(title);

  const image = imageGen(data);
  cardEl.append(image);

  const paragraph = pGen(data);
  cardEl.append(paragraph);

  cardEl.append(title, image, paragraph);
  return cardEl;
};

ROOT_EL = document.querySelector(".root");
const wrapperEl = divGen();

fetch("https://fakestoreapi.com/products/1")
  .then((res) => res.json())
  .then((data) => {
    const productEl = productCardGen(data);

    ROOT_EL.append(productEl);
  });

//https://github.com/carolina-serra/CB9/blob/main/lw_08/esercitazioni/src/script.js
