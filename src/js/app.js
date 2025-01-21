import '../css/styles.css';

const searchForm = document.getElementById('searchForm');
const searchQuery = document.getElementById('searchQuery');
const resultsContainer = document.getElementById('results');

// Funzione per fare una richiesta all'API di Open Library
const searchBooks = async (query) => {
  try {
    // URL dell'API di Open Library
    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
    
    // Se la risposta non è ok, mostriamo un errore
    if (!response.ok) {
      throw new Error('Errore nella ricerca dei libri');
    }

    const data = await response.json();

    // Se non ci sono libri trovati
    if (data.docs.length === 0) {
      resultsContainer.innerHTML = '<p>Nessun risultato trovato.</p>';
    } else {
      // Visualizza i risultati
      displayResults(data.docs);
    }
  } catch (error) {
    console.error('Errore:', error);
    resultsContainer.innerHTML = `<p>Impossibile recuperare i dati. Riprova più tardi.</p>`;
  }
};

// Funzione per visualizzare i risultati
const displayResults = (books) => {
  resultsContainer.innerHTML = ''; // Pulisce la sezione prima di aggiungere nuovi risultati

  // Aggiungi la classe 'row' al container per organizzare le card orizzontalmente
  const row = document.createElement('div');
  row.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'g-4'); 

  books.forEach((book) => {
    const bookElement = document.createElement('div');
    bookElement.classList.add('col'); // La colonna che contiene la card

    bookElement.innerHTML = `
      <div class="card h-100">
        <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="${book.title}">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text">Autore: ${book.author_name ? book.author_name.join(', ') : 'Autore sconosciuto'}</p>
          <a href="https://openlibrary.org${book.key}" class="btn btn-primary" target="_blank">Dettagli</a>
          <button class="add-to-favorites-btn btn btn-secondary mt-2">Aggiungi ai preferiti</button>
        </div>
      </div>
    `;

    // Aggiungi il listener per aggiungere ai preferiti
    bookElement.querySelector('.add-to-favorites-btn').onclick = () => {
      const bookDetails = {
        id: book.key, 
        title: book.title,
        author: book.author_name ? book.author_name.join(', ') : 'Autore sconosciuto'
      };
      addToFavorites(bookDetails); 
    };

    row.appendChild(bookElement); 
  });

  resultsContainer.appendChild(row); 
};

// Funzione per caricare i libri preferiti dal localStorage
function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const favoritesList = document.getElementById('favoritesList');
  favoritesList.innerHTML = ''; // Pulisce la lista esistente

  favorites.forEach(book => {
    const li = document.createElement('li');
    li.textContent = `${book.title} di ${book.author}`;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Rimuovi';
    removeButton.classList.add('remove-btn');
    
    // Aggiungi il listener per il pulsante di rimozione
    removeButton.onclick = () => removeFromFavorites(book.id); // Usa l'ID per rimuovere
    li.appendChild(removeButton);
    favoritesList.appendChild(li);
  });
}

// Funzione per aggiungere un libro alla lista dei preferiti
function addToFavorites(book) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Aggiungi un identificatore univoco per il libro (ad esempio, book.key di Open Library)
  const bookWithId = {
    id: book.id, // Usando book.key come ID unico
    title: book.title,
    author: book.author
  };
  
  // Evita duplicati, aggiungendo solo libri che non sono già presenti
  if (!favorites.some(existingBook => existingBook.id === bookWithId.id)) {
    favorites.push(bookWithId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    loadFavorites(); // Ricarica la lista
  }
}

// Funzione per rimuovere un libro dalla lista dei preferiti usando l'ID univoco
function removeFromFavorites(bookId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  // Filtra i libri rimuovendo quello con l'ID corrispondente
  favorites = favorites.filter(book => book.id !== bookId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
  loadFavorites(); // Ricarica la lista
}

// Carica la lista dei preferiti all'inizio
loadFavorites();

// Gestisce il submit del form per la ricerca
searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const query = searchQuery.value.trim();
  if (query) {
    searchBooks(query);
  }
});


window.addEventListener('DOMContentLoaded', event => {

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  // Shrink the navbar 
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });
});




  
