// EVENTOS

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
console.log('1.1 Botón con evento click añadido');

// Crear y añadir el botón
const btnToClick = document.createElement('button');
btnToClick.id = 'btnToClick';
btnToClick.textContent = 'Haz clic aquí';
btnToClick.style.margin = '10px';
btnToClick.style.padding = '10px';
document.body.appendChild(btnToClick);

// Añadir evento click
btnToClick.addEventListener('click', (event) => {
    console.log('Información del evento click:', event);
});

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input
console.log('1.2 Evento focus añadido al input correspondiente');

const focusInput = document.querySelector('input.focus');
if (focusInput) {
    focusInput.addEventListener('focus', (event) => {
        console.log('Valor del input con focus:', event.target.value);
    });
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input
console.log('1.3 Evento input añadido al input correspondiente');

const valueInput = document.querySelector('input.value');
if (valueInput) {
    valueInput.addEventListener('input', (event) => {
        console.log('Valor del input cambiado:', event.target.value);
    });
}