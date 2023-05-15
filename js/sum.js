const currentPage = 5;

protectContent();
    
document.getElementById('fullName').innerHTML = 'Full Name: ' + load("fullName");
document.getElementById('email').innerHTML = 'Email: ' + load("email");
document.getElementById('date').innerHTML = 'Birth Date: ' + load("birthDate");
document.getElementById('city').innerHTML = 'City: ' + load("city");
document.getElementById('street').innerHTML = 'Street: ' + load("street");
document.getElementById('number').innerHTML = 'Number: ' + load("number");
document.getElementById('hobbies').innerHTML = 'Hobbies: ' + load("hobbies");
document.getElementById('happy').innerHTML = load("happy");
document.getElementById('skyDive').innerHTML = load("skyDive");
document.getElementById('rich').innerHTML = load("rich");
document.getElementById('image').src = load("image");