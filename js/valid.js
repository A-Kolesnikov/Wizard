/*function nameVal0(fullname) {
    document.getElementById('user-form').addEventListener('submit', function(event) {
        event.preventDefault()

        let nameInput = document.getElementById('fullname').value.trim()
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
    })
}*/

function nameVal(fullName) {

    let nameInput = fullName.trim()
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

/*function emailVal0(email) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let emailInput = document.getElementById('email').value.trim()
    letemailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (emailInput ==='') {
        alert('Email cannot be empty!')
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address')
    } else {
        return true
    }
})
}*/

function emailVal(email) {
    let emailInput = email
    let emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (emailInput ==='') {
        alert('Email cannot be empty!')
    } else if (!emailPattern.test(emailInput)) {
        alert('Please enter a valid email address!!!')
    } else {
        return true
    }
}

/*function birthVal0(birthDate) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let birthInput = document.getElementById('birthDate').value
    if (birthInput.includes('-00')) {
        alert('You have entered an invalid Birthday!')
    } else {
        return true
    }
})    
}*/

function birthVal(birthDate) {
    let birthInput = birthDate
    if (birthInput.includes('-00')) {
        alert('You have entered an invalid Birthday!')
    } else {
        return true
    } 
}

function cityVal(city) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let cityInput = document.getElementById(city).value
    if (cityInput === '') {
        alert('Please enter a city')
    } else {
        return true
    }
})
}

function streetVal(street) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let streetInput = document.getElementById(street).value
    if (streetInput === '') {
        alert('Please enter a street')
    } else {
        return true
    }
})
}

function numberVal(number) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let numberInput = document.getElementById(number).value
    if (cityInput !== '' && cityInput >=1) {
        return true
    }
})
}

function imageVal(image) {
document.getElementById('user-form').addEventListener('submit', function(event) {
    event.preventDefault()

    let imageInput = document.getElementById(image).value.trim()
    try {
        new URL(imageInput)
    } catch (_) {
        alert('Please enter a valid URL!')
        return
    }
})
}

