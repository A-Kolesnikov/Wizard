const currentPage = 3;

const fieldImage = document.querySelector("#image");
const fieldHobby = document.querySelector("#hobbies");
const forma = document.querySelector("form");
const preview = document.querySelector("#preview")

//fill fields of the form with stored values
fieldImage.value = '';
fieldHobby.value = load("hobbies");

protectContent();

//variables to interact with validation and local storage
let image = null;
let hobbies = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    upload(fieldImage); //upload image in BASE64 format to local storage
    hobbies = fieldHobby.value;

    /*if (imageVal(image)){
        save("image");
    }*/
    save("image");
    save("hobbies");
    accessTo4();
})

function drawImage(){
    image = load("image");
    if (image){
        preview.innerHTML = ''
        const prevImage = document.createElement("img");
        prevImage.setAttribute('src', image);
        preview.appendChild(prevImage);
    }
}

function upload(input){
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function(){
        image = reader.result;
        save("image");
        drawImage();
    }
}

drawImage();