const currentPage = 4;

protectContent();
    
document.getElementById('fullName').innerHTML = 'Full Name: ' + readStorage("fullName")
document.getElementById('email').innerHTML = 'Email: ' + readStorage("email")
document.getElementById('birthDate').innerHTML = 'Birth Date: ' + readStorage("birthDate")
document.getElementById('city').innerHTML = 'City: ' + readStorage("city")
document.getElementById('street').innerHTML = 'Street: ' + readStorage("street")
document.getElementById('number').innerHTML = 'Number: ' + readStorage("number")
document.getElementById('hobbies').innerHTML = 'Hobbies: ' + readStorage("hobbies")
document.getElementById('image').src = readStorage("image")