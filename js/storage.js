const storage = localStorage
const parameters ={ //default values of user parameters
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


function initStorage(){ //Create all user parameters with default value in local storage if they don`t exist
    for (element in parameters){
        if (storage.getItem(element) == null){
            storage.setItem(element, JSON.stringify(parameters[element]));
        }
    }
}

function clearStorage(){ //Delete all user parameters from local storage
    for (element in parameters){
        storage.removeItem(element);
    }
}

function readStorage(elName){ //Give to this function name of variable, as a string(in quotes)
    return JSON.parse(storage.getItem(elName))
}

function writeStorage(elName){ //Give to this function name of variable, as a string(in quotes)
    storage.setItem(elName, JSON.stringify(eval(elName)))
}