const currentPage = 2;

const fieldCity = document.querySelector("#city");
const fieldStreet = document.querySelector("#street");
const fieldNumber = document.querySelector("#number");
const forma = document.querySelector("form"); //CHANGE ID IN HTML! Change structure from div to form!!!

//fill fields of the form with stored values
fieldCity.value = load("city");
fieldStreet.value = load("street");
fieldNumber.value = load("number");

protectContent();

//variables to interact with validation and local storage
let city = null;
let street = null;
let number = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    city = fieldCity.value;
    street = fieldStreet.value;
    number = fieldNumber.value;
    if (cityVal(city)){
        save("city");
    }
    if (streetVal(street)){
        save("street")
    }
    save("number")
    accessTo3()
})