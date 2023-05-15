const currentPage = 1
const fieldName = document.querySelector("#fullName")
const fieldMail = document.querySelector("#email")
const fieldBirth = document.querySelector("#birthDate")
const forma = document.querySelector("form")

fieldName.value = load("fullName");
fieldMail.value = load("email");
fieldBirth.value = load("birthDate");

initStorage();

//variables to interact with validation and local storage
let fullName = null;
let email = null;
let birthDate = null;

forma.addEventListener("submit", function(evnt){
    evnt.preventDefault();
    fullName = fieldName.value;
    email = fieldMail.value;
    birthDate = fieldBirth.value;
    let cnt = 0;
    if (nameVal(fullName)){
        save("fullName");
    }
    if (emailVal(email)){
        save("email");
    }
    if (birthVal(birthDate)){
        save("birthDate");
    }
    accessTo2();
})