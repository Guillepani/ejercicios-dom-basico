// INSRCIÓN Y ELIMINACION

// 1.1 Inserta dinámicamente en un html un div vacio con javascript
console.log('1.1 Div vacío insertado');
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 1.2 Inserta dinámicamente en un html un div que contenga una p con javascript
console.log('1.2 Div con párrafo insertado');
const divWithP = document.createElement('div');
const pInsideDiv = document.createElement('p');
pInsideDiv.textContent = 'Párrafo dentro del div';
divWithP.appendChild(pInsideDiv);
document.body.appendChild(divWithP);

// 1.3 Inserta dinámicamente en un html un div que contenga 6 p utilizando un loop
console.log('1.3 Div con 6 párrafos insertado');
const divWithSixP = document.createElement('div');
for (let i = 1; i <= 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i} de 6`;
    divWithSixP.appendChild(p);
}
document.body.appendChild(divWithSixP);

// 1.4 Inserta dinámicamente con javascript en un html una p con el texto 'Soy dinámico!'
console.log('1.4 Párrafo dinámico insertado');
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'
console.log('1.5 Texto insertado en h2');
const h2Element = document.querySelector('h2.fn-insert-here');
if (h2Element) {
    h2Element.textContent = 'Wubba Lubba dub dub';
}

// 1.6 Basándote en el siguiente array crea una lista ul > li con los textos del array
console.log('1.6 Lista creada a partir del array');
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');
apps.forEach(app => {
    const liElement = document.createElement('li');
    liElement.textContent = app;
    ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
console.log('1.7 Elementos con clase .fn-remove-me eliminados');
const elementsToRemove = document.querySelectorAll('.fn-remove-me');
elementsToRemove.forEach(element => {
    element.remove();
});

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div
console.log('1.8 Párrafo insertado entre los dos div');
const allDivs = document.querySelectorAll('body > div');
if (allDivs.length >= 2) {
    const pBetweenDivs = document.createElement('p');
    pBetweenDivs.textContent = 'Voy en medio!';
    allDivs[1].insertAdjacentElement('beforebegin', pBetweenDivs);
}

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
console.log('1.9 Párrafos insertados en divs con clase .fn-insert-here');
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
insertHereDivs.forEach(div => {
    const pInside = document.createElement('p');
    pInside.textContent = 'Voy dentro!';
    div.appendChild(pInside);
});