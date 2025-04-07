// Agregar un manejador de evento para el objeto Window de tipo keydown
window.addEventListener('keydown', event => {
    if (event.key === 'Enter'){
        document.body.style.background = 'tomato';
    };
    if (event.key === 'Enter' && event.ctrlKey){
        document.body.style.background = '#b4d455';
    };
});

window.addEventListener('keyup', e =>{
    document.body.style.background = 'white';
});