
document.getElementById('submit-button').addEventListener('click', function () {
    const inputEmail = document.getElementById('user-email');
    const userEmail = inputEmail.value;

    const inputPassword = document.getElementById('user-password');
    const userPassword = inputPassword.value;

    if (userEmail == 'sontan@baap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html';
    }
    inputEmail.value = '';
    inputPassword.value = '';
});

