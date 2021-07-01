function showPassword(){
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('ceye');
    const fieldPassword = document.getElementById('field-password');

    if (eye.style.display =='none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fieldPassword.type = 'password';  
    }
}

document.getElementById('btnlogin').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Bem Vindo(a) de volta!');
});

