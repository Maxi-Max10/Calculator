const previus = document.getElementById('previus');
const current = document.getElementById('current');
const buttonN = document.querySelectorAll('.number');
const buttonO = document.querySelectorAll('.operador');

const display = new Display(previus, current);



buttonN.forEach(boton => {
    boton.addEventListener('click', () =>display.agregarN(boton.innerHTML));

   
});

buttonO.forEach(boton =>{ 
    boton.addEventListener('click', () => display.computar(boton.value))
})