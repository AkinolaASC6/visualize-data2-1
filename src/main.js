// const first = list[0];
const parent  = document.querySelector(".main-element")
const createCard = (obj, indx) => {
    const newCard = document.createElement("div");
    newCard.className = "card";
    newCard.id = indx;

    const face = document.createElement("img");
    face.src = obj.picture.medium;
    face.alt = "portrait";

    newCard.appendChild(face);
    parent.appendChild(newCard);

    console.log(obj.gender);
};
const createAll = arr => {
    for(let i = 0; i < arr.length; i++) {
        createCard(arr[i], i);
    }
}
const properCap = str => {
    return str.replace(str[0], str[0].toUpperCase());
}
createAll(list);