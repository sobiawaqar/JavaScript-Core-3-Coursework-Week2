function apiFetchImage(){
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json()).then(data => {
        const image =document.createElement("img");//button created
        image.src = data.message // gives source of image
        const listItem = document.createElement("li"); // li created
        listItem.appendChild(image); //image is appended
        const ul = document.querySelector("#dogImage");
        ul.appendChild(listItem);
    }).catch( err => {
        console.log("no Image");
    })
}
const button =document.querySelector("#btnImg");
button.addEventListener("click", () => {
    apiFetchImage();
});