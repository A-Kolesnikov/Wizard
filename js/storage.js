const storage = localStorage

function initStorage(){
    //Create all parameters of user in local storage, 
    const parameters ={
        fullName: null,
        email: null,
        birthDate: null,
        city: null,
        street: null,
        number: null,
        image: null,
        hobbies: null,
        allowedPage: 1
    }
    for (element in parameters){
        if (storage.getItem(element) == null){
            storage.setItem(element, JSON.stringify(parameters[element]))
        }
    }
}

//Give to the function name of variable, as a string(in quotes)
function readStorage(elName){
    return JSON.parse(storage.getItem(elName))
}

//Give to the function name of variable, as a string(in quotes)
function writeStorage(elName){
    storage.setItem(elName, JSON.stringify(eval(elName)))
}

initStorage()