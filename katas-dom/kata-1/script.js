//SELECTORES

// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
console.log('1.1 Botón con clase .showme:');
const showmeButton = document.querySelector('.showme');
console.log(showmeButton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
console.log('1.2 H1 con id #pillado:');
const pilladoH1 = document.querySelector('#pillado');
console.log(pilladoH1);

// 1.3 Usa querySelector para mostrar por consola todos los p
console.log('1.3 Todos los elementos <p>:');
const allParagraphs = document.querySelectorAll('p');
console.log(allParagraphs);

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase .pokemon
console.log('1.4 Todos los elementos con clase .pokemon:');
const allPokemon = document.querySelectorAll('.pokemon');
console.log(allPokemon);

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe"
console.log('1.5 Todos los elementos con data-function="testMe":');
const allTestMe = document.querySelectorAll('[data-function="testMe"]');
console.log(allTestMe);

// 1.6 Usa querySelector para mostrar por consola el 3er personaje con el atributo data-function="testMe"
console.log('1.6 Tercer elemento con data-function="testMe":');
const thirdTestMe = document.querySelectorAll('[data-function="testMe"]')[2];
console.log(thirdTestMe);