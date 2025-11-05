//CREACIÓN DINÁMICA

// 1.1 Basándote en el array, crea una lista ul > li dinámicamente
console.log('1.1 Lista de países creada');
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countriesList = document.createElement('ul');
countries.forEach(country => {
    const li = document.createElement('li');
    li.textContent = country;
    countriesList.appendChild(li);
});
document.body.appendChild(countriesList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me
console.log('1.2 Elemento con clase .fn-remove-me eliminado');
const removeMeElement = document.querySelector('.fn-remove-me');
if (removeMeElement) {
    removeMeElement.remove();
}

// 1.3 Crea dinámicamente una lista ul > li de elementos en el div con data-function="printHere"
console.log('1.3 Lista de coches creada');
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHereDiv = document.querySelector('[data-function="printHere"]');
if (printHereDiv) {
    const carsList = document.createElement('ul');
    cars.forEach(car => {
        const li = document.createElement('li');
        li.textContent = car;
        carsList.appendChild(li);
    });
    printHereDiv.appendChild(carsList);
}

// 1.4 Crea dinámicamente una serie de divs con h4 e img
console.log('1.4 Galería de países creada');
const countriesData = [
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
    {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

const galleryContainer = document.createElement('div');
galleryContainer.id = 'gallery-container';

countriesData.forEach((country, index) => {
    const div = document.createElement('div');
    div.className = 'country-card';
    div.dataset.index = index;
    
    const h4 = document.createElement('h4');
    h4.textContent = country.title;
    
    const img = document.createElement('img');
    img.src = country.imgUrl;
    img.alt = country.title;
    img.style.width = '300px';
    img.style.height = '200px';
    img.style.margin = '10px';
    
    div.appendChild(h4);
    div.appendChild(img);
    galleryContainer.appendChild(div);
});

document.body.appendChild(galleryContainer);

// 1.5 Crea un botón que elimine el último elemento de la serie de divs
console.log('1.5 Botón para eliminar último elemento creado');
const removeLastButton = document.createElement('button');
removeLastButton.textContent = 'Eliminar último elemento';
removeLastButton.style.margin = '10px';
removeLastButton.addEventListener('click', () => {
    const countryCards = document.querySelectorAll('.country-card');
    if (countryCards.length > 0) {
        countryCards[countryCards.length - 1].remove();
        console.log('Último elemento eliminado');
    } else {
        console.log('No hay más elementos para eliminar');
    }
});
document.body.appendChild(removeLastButton);

// 1.6 Crea un botón para cada div que elimine ese mismo elemento
console.log('1.6 Botones de eliminación individual creados');
const countryCards = document.querySelectorAll('.country-card');
countryCards.forEach(card => {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.style.margin = '5px';
    deleteButton.addEventListener('click', () => {
        card.remove();
        console.log(`Elemento ${card.dataset.index} eliminado`);
    });
    card.appendChild(deleteButton);
});