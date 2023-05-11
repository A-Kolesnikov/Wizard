const pageNumber = 4

if (pageNumber > allowedPage) {
    pageNumber.imnerHTML = 'Error 403 - Access forbidden'
} else {
    let fullname = localStorage.getItem('fullname')
    let email = localStorage.getItem('email')
    let birthDate = localStorage.getItem('birthDate')
    let city = localStorage.getItem('city')
    let street = localStorage.getItem('street')
    let number = localStorage.getItem('number')
    let image = localStorage.getItem('image')
    let hobbies = localStorage.getItem('hobbies')
    
    document.getElementById('fullname').innerHTML = 'Full Name: ' + fullname
    document.getElementById('email').innerHTML = 'Email: ' + email
    document.getElementById('birthDate').innerHTML = 'Birth Date: ' + birthDate
    document.getElementById('city').innerHTML = 'City: ' + city
    document.getElementById('street').innerHTML = 'Street: ' + street
    document.getElementById('number').innerHTML = 'Number: ' + number
    document.getElementById('hobbies').innerHTML = 'Hobbies: ' + hobbies
    document.getElementById('image').src = image
}

function resetLocalStorage() {
    localStorage.setItem('fullname', null);
    localStorage.setItem('email', null);
    localStorage.setItem('birthDate', null);
    localStorage.setItem('city', null);
    localStorage.setItem('street', null);
    localStorage.setItem('number', null);
    localStorage.setItem('image', null);
    localStorage.setItem('hobbies', null);
    alert('Local Storage has been reset');
}