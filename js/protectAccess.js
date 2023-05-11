let allowedPage = readStorage("allowedPage");
function accessTo2(){//called when finishing phase 1
    if (readStorage("fullName") && readStorage("email") && readStorage("birthDate")) {
        if (allowedPage < 2){
            allowedPage = 2;
            writeStorage("allowedPage");
            return true;
        }
    } else {
        allowedPage = 1;
        writeStorage("allowedPage");
        return false;
    }
}

function accessTo3(){//called when finishing phase 2
    if (readStorage("city") && readStorage("street")){
        if (allowedPage < 3){
            allowedPage = 3;
            writeStorage("allowedPage");
            return true;
        }
    } else {
        allowedPage = 2;
        writeStorage("allowedPage");
        return false;
    }
}

function accessToSum(){//called when finishing phase 3
    if (readStorage("image")){
        if (allowedPage < 4){
            allowedPage = 4;
            writeStorage("allowedPage");
            return true;
        }
    } else {
        allowedPage = 3;
        writeStorage("allowedPage");
        return false;
    }
}