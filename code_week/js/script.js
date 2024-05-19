const contactGen = (contact) => {
  const el = document.createElement("li");
  el.className = "contact";
  el.textContent = contact.name;

  el.addEventListener("click", () => {
    const contactList = document.querySelector(".contact--list");
    contactList.style.display = "none";
    openModal(contact);
  });

  return el;
};

const modalGen = (modalData) => {
  const modalEl = document.createElement("div");
  const modalWrapperEl = document.createElement("div");
  const titleEl = document.createElement("h2");
  const addressEl = document.createElement("p");
  const phoneEl = document.createElement("p");
  const mailEl = document.createElement("p");
  const websiteEl = document.createElement("a");
  const companyEl = document.createElement("p");
  const buttonEl = document.createElement("button");

  modalEl.className = "modal";
  modalWrapperEl.className = "modal--wrapper";
  titleEl.className = "modal--content";
  addressEl.className = "modal--content";
  phoneEl.className = "modal--content";
  mailEl.className = "modal--content";
  websiteEl.className = "modal--content";
  companyEl.className = "modal--content";
  buttonEl.className = "modal--button";

  titleEl.textContent = modalData.name;
  addressEl.textContent = `Indirizzo: ${modalData.address.city}, via ${modalData.address.street}, ${modalData.address.suite}`;
  phoneEl.textContent = `Telefono: ${modalData.phone}`;
  mailEl.textContent = `email: ${modalData.email}`;
  websiteEl.href = modalData.website;
  websiteEl.textContent = "Visualizza Sito Web";
  companyEl.textContent = `Azienda: ${modalData.company.name}`;
  buttonEl.textContent = "X";

  buttonEl.addEventListener("click", () => {
    modalEl.remove();
    const contactList = document.querySelector(".contact--list");
    contactList.style.display = "flex";
  });

  modalWrapperEl.append(
    titleEl,
    addressEl,
    phoneEl,
    mailEl,
    websiteEl,
    companyEl,
    buttonEl
  );
  modalEl.appendChild(modalWrapperEl);
  return modalEl;
};

const openModal = (contact) => {
  const modal = modalGen(contact);
  document.body.appendChild(modal);
};

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((contacts) => {
    contacts.sort((a, b) => a.name.localeCompare(b.name));

    const contactEl = contacts.map((contact) => contactGen(contact));

    const contactList = document.querySelector(".contact--list");
    contactList.append(...contactEl);
  });
