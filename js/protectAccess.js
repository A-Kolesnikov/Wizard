let allowedPage = load("allowedPage");
function accessTo2(){//called when finishing phase 1
    allowedPage = load("allowedPage")
    if (load("fullName") && load("email") && load("birthDate")) {
        if (allowedPage < 2){
            allowedPage = 2;
            save("allowedPage");
            return true;
        }
    } else {
        allowedPage = 1;
        save("allowedPage");
        return false;
    }
}

function accessTo3(){//called when finishing phase 2
    allowedPage = load("allowedPage")
    if (load("city") && load("street")){
        if (allowedPage < 3){
            allowedPage = 3;
            save("allowedPage");
            return true;
        }
    } else {
        allowedPage = 2;
        save("allowedPage");
        return false;
    }
}

function accessTo4(){//called when finishing phase 3
    allowedPage = load("allowedPage")
    if (load("image")){
        if (allowedPage < 4){
            allowedPage = 4;
            save("allowedPage");
            return true;
        }
    } else {
        allowedPage = 3;
        save("allowedPage");
        return false;
    }
}

function accessToSum(){//called when finishing phase 4
    allowedPage = load("allowedPage")
    if (load("happy") && load("skyDive") && load("rich")){
        if (allowedPage < 5){
            allowedPage = 5;
            save("allowedPage");
            return true;
        }
    } else {
        allowedPage = 4;
        save("allowedPage");
        return false;
    }
}

function protectContent(){
    if (load("allowedPage") < currentPage){
        document.querySelector("body").innerHTML='<h1>Error 403 Forbidden Access'; //add button "Previous page"
    }
}