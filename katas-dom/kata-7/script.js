// LISTA DINÁMICA EN DIV ESPECÍFICO

// Array de lugares
const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Crear lista ul > li dinámicamente en el div con data-function="printHere"
console.log('Creando lista de lugares...');

// Seleccionar el div específico
const printHereDiv = document.querySelector('[data-function="printHere"]');

if (printHereDiv) {
    // Crear elemento ul
    const placesList = document.createElement('ul');
    
    // Iterar sobre el array de lugares y crear elementos li
    places.forEach(place => {
        const listItem = document.createElement('li');
        listItem.textContent = place;
        placesList.appendChild(listItem);
    });
    
    // Añadir la lista al div específico
    printHereDiv.appendChild(placesList);
    
    console.log('Lista de lugares creada exitosamente en el div específico');
    console.log('Lugares incluidos:', places);
} else {
    console.log('No se encontró el div con data-function="printHere"');
}