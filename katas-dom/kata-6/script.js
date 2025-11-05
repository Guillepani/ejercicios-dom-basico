//ELIMINAR ELEMENTO POR CLASE

// Eliminar el elemento que tenga la clase .fn-remove-me
console.log('Buscando elemento con clase .fn-remove-me...');

const elementToRemove = document.querySelector('.fn-remove-me');

if (elementToRemove) {
    console.log('Elemento encontrado:', elementToRemove);
    elementToRemove.remove();
    console.log('Elemento eliminado con éxito');
} else {
    console.log('No se encontró ningún elemento con la clase .fn-remove-me');
}