const form = document.getElementById('form-numero');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputCampoA = document.getElementById('campo-A');
    const inputampoB = document.getElementById('campo-B');

    if(inputCampoA.value < inputampoB.value) {
        alert('Formulario valido')
    } else {
        alert('Formulario invalido')
    }

})