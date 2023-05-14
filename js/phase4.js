const currentPage = 4;

/*const fieldHappy = document.querySelectorAll("#city");
const fieldStreet = document.querySelector("#street");
const fieldNumber = document.querySelector("#number");*/
const forma = document.querySelector("form"); //CHANGE ID IN HTML! Change structure from div to form!!!

//fill fields of the form with stored values
/*fieldCity.value = readStorage("city");
fieldStreet.value = readStorage("street");
fieldNumber.value = readStorage("number");*/

protectContent();

//variables to interact with validation and local storage
let happy = null;
let skyDive = null;
let rich = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    happy = document.querySelector('input[name="happy"]:checked').value;
    skyDive = document.querySelector('input[name="skyDive"]:checked').value;
    rich = document.querySelector('input[name="rich"]:checked').value;
    save("happy");
    save("skyDive");
    save("rich");
    accessToSum()
})