function getProgrammerHumour(){
    fetch(`https://xkcd.now.sh/?comic=latest`).then(response => response.json()).then((data) => {
        const img = document.createElement("img");
        img.src = data.img;
        document.body.appendChild(img);
        console.log(data);
    }).catch((err) => {
        console.log("error found");
    })
}
getProgrammerHumour();