// Step 1 : add click event handler with submit button
document.getElementById('submit').addEventListener('click', function(){
    // step: 2 - get the email address insidde the email field
    // always remember t use value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value
    // step 3 - get password
    // 3.a - set id on the html element
    // 3.b - get the element
    // 3.c - get the value from the element
    const passFiled = document.getElementById('user-passowrd')
    const pass = passFiled.value
    
    // donot verify email and password on the client side
    // step -4 verify email and password
    if(email === 'sontan@baap.com' && pass === 'secret'){
        window.location.href = './bank.html'
    }
    else{
        alert('invalid  user')
    }
})