// LISTA DINÁMICA

// Array de álbums
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Crear lista ul > li dinámicamente
console.log('Creando lista de álbums...');

// Crear ul
const albumsList = document.createElement('ul');

// Iterar sobre el array de álbums y crear elementos li
albums.forEach(album => {
  const listItem = document.createElement('li');
  listItem.textContent = album;
  albumsList.appendChild(listItem);
});

// Añadir la lista al body 
document.body.appendChild(albumsList);

console.log('Lista de álbums creada exitosamente');
console.log('Álbums incluidos:', albums);