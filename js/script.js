const redirect = document.getElementById('imgRegister');
const inputFocus = document.getElementsByClassName('inputUser');

redirect.addEventListener('click', function() {
    for(let i = 0; i < inputFocus.length; i++) {
    if(inputFocus[i].value === '') {
        inputFocus[i].focus();
        return; // Para o loop quando o primeiro campo é encontrado. 
    }
}

})