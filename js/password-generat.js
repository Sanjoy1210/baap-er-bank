document.getElementById('sign-up-button').addEventListener('click', function () {
    // get user email
    const inputEmail = document.getElementById('user-email');
    const userEmail = inputEmail.value;

    // get user password
    const inputPassword = document.getElementById('user-password');
    const userPassword = inputPassword.value;

    // password

    // sign up message
    if (userEmail != '' && userPassword != '') {
        document.getElementById('sign-up-container').style.display = 'none';
        document.getElementById('sign-up-heading').innerText = 'Congratulations!! Login now';
    }
});