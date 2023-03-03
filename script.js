const titulo = document.getElementById('titulo');

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML='';
    textoArray.forEach((letra, i) => {
        setTimeout(()=>elemento.innerHTML += letra, 120 * i);
    });
}

typeWriter(titulo);

$("#btn-outro").click(function() {
    $('body').animate({
      scrollTop: $("#produtos-tittle").offset().top
    }, 10000);
});

const toggleSwitch = document.getElementById('dark-mode-toggle');

toggleSwitch.addEventListener('change', function() {
    if(this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    }  
});