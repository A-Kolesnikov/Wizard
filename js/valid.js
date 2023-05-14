function nameVal(fullname) {
    let nameInput = fullname
    let nameParts = nameInput.split(' ')
    if (nameInput === '') {
        alert('Name cannot be empty!')
    } else if (nameParts.length !== 2) {
        alert('Name must be two words!')
    } else if (!nameParts.every(word => word.length >= 2)) {
        alert('Both first and last names must be at least 2 characters long')
    } else {
        return true
    }
}

function emailVal(email) {
    let emailInput = email
    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (emailInput ==='') {
        alert('Email cannot be empty!')
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address')
    } else {
        return true
    }
}


function birthVal(birthDate) {
    let birthInput = birthDate
    if (birthInput.includes('-00')) {
        alert('You have entered an invalid Birthday!')
    } else {
        return true
    }
}

function cityVal(city) {
    let cityInput = city
    if (cityInput === '') {
        alert('Please enter a city')
    } else {
        return true
    }
}

function streetVal(street) {
    let streetInput = street
    if (streetInput === '') {
        alert('Please enter a street')
    } else {
        return true
    }
}

function numberVal(number) {
    let numberInput = number
    if (numberInput !== '' && numberInput >=1) {
        return true
    }
}

function imageVal(image) {
    let imageInput = image
    try {
        new URL(imageInput)
    } catch (_) {
        alert('Please enter a valid URL!')
        return 
    }
    return true;
}

