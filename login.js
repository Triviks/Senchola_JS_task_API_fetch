// ERROR DISPLAY
let err = document.querySelector('.error');
let nameErr = document.querySelector('.nameErr');
let emailErr = document.querySelector('.emailErr');

var prevent = document.querySelector('.login');
prevent.addEventListener('click', (e) => {
    if(!logValidate()) {
        e.preventDefault();
    }
});

function logValidate () {
    // VARIABLES TO ACCESS THE FORM
    let email = document.getElementById('email');
    let emailVal = email.value;

    let pwd = document.getElementById('pwd');
    let pwdVal = pwd.value;
    console.log("log Working");
    
    // REGEX TO VALIDATE MAIL AND NUMBER
    let emailRegex = /^[^\s@]+@[^\s@]+\.(?:com|in|net|org)$/; // MAIL VALIDATION - CORRECT MAIL FORMAT

    // VALIDATE EMPTY FIELDS
    if (emailVal === '' || pwdVal === '') {
        err.innerText = "Please fill all the fields!";
        return false
    }

    else {
        err.innerText = "";
    }
    
    if (emailVal !== '' || pwdVal !== '') {
        // VALIDATE EMAIL
        if (!emailRegex.test(emailVal)) {
            email.style.border = "2px solid red";
            emailErr.innerText = "Please enter a valid email!";
            return false
        }

        else {
            email.style.border = "";
            emailErr.innerText = "";
        }
    }

    var loggedIn = true
    sessionStorage.setItem("loggedIn", loggedIn);
    window.alert("Logged in Successfully!")

    window.location.href = 'index.html';

}

