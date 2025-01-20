/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://book-search-app/./src/css/styles.css?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/styles.css */ \"./src/css/styles.css\");\n\r\n\r\nconst searchForm = document.getElementById('searchForm');\r\nconst searchQuery = document.getElementById('searchQuery');\r\nconst resultsContainer = document.getElementById('results');\r\n\r\n// Funzione per fare una richiesta all'API di Open Library\r\nconst searchBooks = async (query) => {\r\n  try {\r\n    // URL dell'API di Open Library\r\n    const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);\r\n    \r\n    // Se la risposta non è ok, mostriamo un errore\r\n    if (!response.ok) {\r\n      throw new Error('Errore nella ricerca dei libri');\r\n    }\r\n\r\n    const data = await response.json();\r\n\r\n    // Se non ci sono libri trovati\r\n    if (data.docs.length === 0) {\r\n      resultsContainer.innerHTML = '<p>Nessun risultato trovato.</p>';\r\n    } else {\r\n      // Visualizza i risultati\r\n      displayResults(data.docs);\r\n    }\r\n  } catch (error) {\r\n    console.error('Errore:', error);\r\n    resultsContainer.innerHTML = `<p>Impossibile recuperare i dati. Riprova più tardi.</p>`;\r\n  }\r\n};\r\n\r\n// Funzione per visualizzare i risultati\r\nconst displayResults = (books) => {\r\n  resultsContainer.innerHTML = ''; // Pulisce la sezione prima di aggiungere nuovi risultati\r\n\r\n  // Aggiungi la classe 'row' al container per organizzare le card orizzontalmente\r\n  const row = document.createElement('div');\r\n  row.classList.add('row', 'row-cols-1', 'row-cols-md-4', 'g-4'); \r\n\r\n  books.forEach((book) => {\r\n    const bookElement = document.createElement('div');\r\n    bookElement.classList.add('col'); // La colonna che contiene la card\r\n\r\n    bookElement.innerHTML = `\r\n      <div class=\"card h-100\">\r\n        <img src=\"https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg\" class=\"card-img-top\" alt=\"${book.title}\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">${book.title}</h5>\r\n          <p class=\"card-text\">Autore: ${book.author_name ? book.author_name.join(', ') : 'Autore sconosciuto'}</p>\r\n          <a href=\"https://openlibrary.org${book.key}\" class=\"btn btn-primary\" target=\"_blank\">Dettagli</a>\r\n          <button class=\"add-to-favorites-btn btn btn-secondary mt-2\">Aggiungi ai preferiti</button>\r\n        </div>\r\n      </div>\r\n    `;\r\n\r\n    // Aggiungi il listener per aggiungere ai preferiti\r\n    bookElement.querySelector('.add-to-favorites-btn').onclick = () => {\r\n      const bookDetails = {\r\n        id: book.key, // Usa l'ID univoco del libro\r\n        title: book.title,\r\n        author: book.author_name ? book.author_name.join(', ') : 'Autore sconosciuto'\r\n      };\r\n      addToFavorites(bookDetails); // Aggiungi il libro ai preferiti\r\n    };\r\n\r\n    row.appendChild(bookElement); // Aggiungi ogni card alla riga\r\n  });\r\n\r\n  resultsContainer.appendChild(row); // Aggiungi la riga al container\r\n};\r\n\r\n// Funzione per caricare i libri preferiti dal localStorage\r\nfunction loadFavorites() {\r\n  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];\r\n  const favoritesList = document.getElementById('favoritesList');\r\n  favoritesList.innerHTML = ''; // Pulisce la lista esistente\r\n\r\n  favorites.forEach(book => {\r\n    const li = document.createElement('li');\r\n    li.textContent = `${book.title} di ${book.author}`;\r\n    const removeButton = document.createElement('button');\r\n    removeButton.textContent = 'Rimuovi';\r\n    removeButton.classList.add('remove-btn');\r\n    \r\n    // Aggiungi il listener per il pulsante di rimozione\r\n    removeButton.onclick = () => removeFromFavorites(book.id); // Usa l'ID per rimuovere\r\n    li.appendChild(removeButton);\r\n    favoritesList.appendChild(li);\r\n  });\r\n}\r\n\r\n// Funzione per aggiungere un libro alla lista dei preferiti\r\nfunction addToFavorites(book) {\r\n  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];\r\n  \r\n  // Aggiungi un identificatore univoco per il libro (ad esempio, book.key di Open Library)\r\n  const bookWithId = {\r\n    id: book.id, // Usando book.key come ID unico\r\n    title: book.title,\r\n    author: book.author\r\n  };\r\n  \r\n  // Evita duplicati, aggiungendo solo libri che non sono già presenti\r\n  if (!favorites.some(existingBook => existingBook.id === bookWithId.id)) {\r\n    favorites.push(bookWithId);\r\n    localStorage.setItem('favorites', JSON.stringify(favorites));\r\n    loadFavorites(); // Ricarica la lista\r\n  }\r\n}\r\n\r\n// Funzione per rimuovere un libro dalla lista dei preferiti usando l'ID univoco\r\nfunction removeFromFavorites(bookId) {\r\n  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];\r\n  \r\n  // Filtra i libri rimuovendo quello con l'ID corrispondente\r\n  favorites = favorites.filter(book => book.id !== bookId);\r\n  localStorage.setItem('favorites', JSON.stringify(favorites));\r\n  loadFavorites(); // Ricarica la lista\r\n}\r\n\r\n// Carica la lista dei preferiti all'inizio\r\nloadFavorites();\r\n\r\n// Gestisce il submit del form per la ricerca\r\nsearchForm.addEventListener('submit', function(event) {\r\n  event.preventDefault();\r\n  \r\n  const query = searchQuery.value.trim();\r\n  if (query) {\r\n    searchBooks(query);\r\n  }\r\n});\r\n\r\n\r\nwindow.addEventListener('DOMContentLoaded', event => {\r\n\r\n  // Navbar shrink function\r\n  var navbarShrink = function () {\r\n      const navbarCollapsible = document.body.querySelector('#mainNav');\r\n      if (!navbarCollapsible) {\r\n          return;\r\n      }\r\n      if (window.scrollY === 0) {\r\n          navbarCollapsible.classList.remove('navbar-shrink')\r\n      } else {\r\n          navbarCollapsible.classList.add('navbar-shrink')\r\n      }\r\n\r\n  };\r\n\r\n  // Shrink the navbar \r\n  navbarShrink();\r\n\r\n  // Shrink the navbar when page is scrolled\r\n  document.addEventListener('scroll', navbarShrink);\r\n\r\n  // Activate Bootstrap scrollspy on the main nav element\r\n  const mainNav = document.body.querySelector('#mainNav');\r\n  if (mainNav) {\r\n      new bootstrap.ScrollSpy(document.body, {\r\n          target: '#mainNav',\r\n          rootMargin: '0px 0px -40%',\r\n      });\r\n  };\r\n\r\n  // Collapse responsive navbar when toggler is visible\r\n  const navbarToggler = document.body.querySelector('.navbar-toggler');\r\n  const responsiveNavItems = [].slice.call(\r\n      document.querySelectorAll('#navbarResponsive .nav-link')\r\n  );\r\n  responsiveNavItems.map(function (responsiveNavItem) {\r\n      responsiveNavItem.addEventListener('click', () => {\r\n          if (window.getComputedStyle(navbarToggler).display !== 'none') {\r\n              navbarToggler.click();\r\n          }\r\n      });\r\n  });\r\n});\r\n\r\n\r\n\r\n\r\n  \r\n\n\n//# sourceURL=webpack://book-search-app/./src/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;