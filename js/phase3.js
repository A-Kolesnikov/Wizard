const currentPage = 3;

const fieldImage = document.querySelector("#image");
const fieldHobby = document.querySelector("#hobbies");
const forma = document.querySelector("form");
const preview = document.querySelector("#preview")

//fill fields of the form with stored values
fieldImage.value = '';
fieldHobby.value = readStorage("hobbies");

protectContent();

//variables to interact with validation and local storage
let image = null;
let hobbies = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    image = fieldImage.value;
    hobbies = fieldHobby.value;

    /*if (imageVal(image)){
        writeStorage("image");
    }*/
    writeStorage("image")
    writeStorage("hobbies")
    accessToSum()
})

function drawImage(){
    image = readStorage("image")
    if (image){
        const prevImage = document.createElement("img");
        prevImage.setAttribute('src', image)
        preview.appendChild(prevImage);
    }
}

function upload(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        image = reader.result;
        writeStorage("image")
        drawImage();
    }
}

drawImage();