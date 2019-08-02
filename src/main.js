const parent  = document.querySelector(".main-element")
const createCard = (obj, indx) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = indx;

    const infoBox = document.createElement("div");
    infoBox.className = "info";

    const face = document.createElement("img");
    face.src = obj.picture.medium;
    face.alt = "portrait";

    const name = document.createElement("p");
    let nameFormat = properCap(obj.name.title) + ". "  + properCap(obj.name.first) + " " + properCap(obj.name.last);
    setProperties(name, "name", nameFormat);

    const email = document.createElement("p");
    setProperties(email, "email", obj.email)

    const phone = document.createElement("p");
    setProperties(phone, "phone", obj.phone);

    const city = document.createElement("p");
    setProperties(city, "city", properCap(obj.location.city));
    
    let info = [];
    info.push(name, email, phone, city);
    for(fact of info) {
        infoBox.appendChild(fact);
    }
    newCard.appendChild(face);
    newCard.appendChild(infoBox);
    parent.appendChild(newCard);
    
    console.log(info);
}
const createAll = arr => {
    for(let i = 0; i < arr.length; i++) {
        createCard(arr[i], i);
    }
}
const properCap = str => {
    return str.replace(str[0], str[0].toUpperCase());
}
const setProperties = (elmt, call, text) => {
    elmt.id = call;
    elmt.innerHTML = text;
}
createAll(list);