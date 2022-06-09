// Javascript File for School Web Tasks 1.3.4

function setStyleSheet(url) {
    // Changes stylesheet of index.html, using id
    
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.setAttribute('href', url);
}

function countLinkClicks(count, click_id, id) {
    // gets the link and increments value when clicked

    var element = document.getElementById(click_id);
    var display = document.getElementById(id);
    element.onclick = function() {
        count++;
        display.innerHTML = count;
    }
}

function changeImages(id1, index1, id2, index2, id3, index3) {
    // swaps images

    if (swap) {
        document.getElementById(id1).src = images[0][index1];
        document.getElementById(id2).src = images[0][index2];
        document.getElementById(id3).src = images[0][index3];
    }
    else {
        document.getElementById(id1).src = images[1][index1];
        document.getElementById(id2).src = images[1][index2];
        document.getElementById(id3).src = images[1][index3];
    }
    swap = !swap;
}

function showError(input, message) {
    // invalid input entered display

    var formValidation = input.parentElement;
    formValidation.className = 'form-validation error';
    const errorMessage = formValidation.querySelector('p');
    errorMessage.innerText = message;
}

function showValid(input) {
    // valid input entered display

    var formValidation = input.parentElement;
    formValidation.className = 'form-validation valid';
}

function getFieldName(input) {
    // get name value of input and formats

    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function checkRequired(array) {
    // checks field isn't left empty

    array.forEach(function(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        }
        else {
            showValid(input);
        }
    });
}

function checkLength(input, min, max) {
    // input length check

    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    else{
        showValid(input);
    }
}

function passwordMatch(input1, input2) {
    // check if passwords match

    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match')
    }
}

function formValidationFunc() {
    // input validation for popup form

    const form = document.getElementById('form');
    const email = document.getElementById('email-address');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password-confirm');

    form.addEventListener('submit', (e) => {
        // calls all validation checks
        e.preventDefault();
        checkRequired([email, password, confirmPassword]);
        checkLength(password, 8, 25);
        checkLength(confirmPassword, 8, 25);
        passwordMatch(password, confirmPassword);
    })
}

function popupSubscription() {
    // opens popup subscription form

    const popup = document.getElementById('email-popup');
    const closeBtn = document.querySelector('.close-btn');
    popup.style.display = 'block';
    
    // ways to close form
    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none'
    })

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    })

    formValidationFunc();
}

function checkFields(array, formEmail) {
    // checks field isn't left empty

    array.forEach(function(input) {
        if (input.value.trim() === '') {
            return false;
        }
