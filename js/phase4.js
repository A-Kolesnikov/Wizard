const currentPage = 4;

const forma = document.querySelector("form");
const radHappy = document.querySelectorAll('input[name = "happy"]')
const radSkyDive = document.querySelectorAll('input[name = "skyDive"]')
const radRich = document.querySelectorAll('input[name = "rich"]')

//fill fields of the form with stored values
for (element of radHappy){
    let happy = load("happy");
    if (element.value == happy){
        element.checked = true;
    }
}
for (element of radSkyDive){
    let skyDive = load("skyDive");
    if (element.value == skyDive){
        element.checked = true;
    }
}
for (element of radRich){
    let rich = load("rich");
    if (element.value == rich){
        element.checked = true;
    }
}

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