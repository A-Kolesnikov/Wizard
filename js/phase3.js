const currentPage = 3;

const fieldImage = document.querySelector("#image");
const fieldHobby = document.querySelector("#hobbies");
const forma = document.querySelector("form"); //CHANGE ID IN HTML! Change structure from div to form!!!

//fill fields of the form with stored values
fieldImage.value = readStorage("image");
fieldHobby.value = readStorage("hobbies");

protectContent();

//variables to interact with validation and local storage
let image = "";
let hobbies = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    image = fieldImage.files[0].name;
    hobbies = fieldHobby.value;

    /*if (imageVal(image)){
        writeStorage("image");
    }*/
    writeStorage("image")
    writeStorage("hobbies")
    accessToSum()
})