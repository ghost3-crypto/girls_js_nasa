function changeBackground(imageURL) {
    document.body.style.backgroundImage = `url(${ imageURL})`; 
}
let dataURL = "https://api.nasa.gov/planetary/apod?api_key=3DwNSddaOVOaikOzbFPGB4CJtMNItkKcVo3KfjfQ";

function getPicture() {
    fetch(dataURL)
    .then((resp) => {
        console.log("Test");
        return resp.json();
    })
    .then((data) => {

        changeBackground(data.hdurl);
    }).catch(error=>console.log(error));

}
getPicture()


let urlMars = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=3DwNSddaOVOaikOzbFPGB4CJtMNItkKcVo3KfjfQ";

function getMarsPicture() {
    fetch(urlMars)
    .then((resp) => {
        return resp.json();
    })
    .then((data) =>{
        let pictureList = data.photos;
        createGallery(pictureList);
        
    });
}

let gallery = document.getElementById("content");

function createGallery(dataList){
    for (let i = 0; i < 9; i++){

        let img = document.createElement("img");
        let imgPath = dataList[i].img_src;
        img.src = imgPath;
        gallery.appendChild(img);

    }
}

console.log(getMarsPicture);
