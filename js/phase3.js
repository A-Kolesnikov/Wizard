const currentPage = 3;

const fieldImage = document.querySelector("#image");
const fieldHobbie = document.querySelector("#hobbie");
const forma = document.querySelector("form"); //CHANGE ID IN HTML! Change structure from div to form!!!

//fill fields of the form with stored values
fieldImage.value = readStorage("image");
fieldHobbie.value = readStorage("hobbie");

protectContent();

//variables to interact with validation and local storage
let image = null;
let hobbie = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    image = fieldImage.value;
    hobbie = fieldHobbie.value;

    if (imageVal(image)){
        writeStorage("image");
    }
    if (hobbieVal(hobbie)){
        writeStorage("hobbie")
    }
    accessTo3()
})