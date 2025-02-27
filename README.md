# BookFinder

**BookFinder** è un'applicazione per gli amanti della lettura, pensata per aiutarti a trovare libri in modo semplice e veloce grazie all'integrazione con le API di Open Library. Puoi cercare libri per titolo, autore o genere, visualizzare i dettagli, e salvare i tuoi preferiti per averli sempre a portata di mano!

## Funzionalità principali

- **Ricerca libri**: Digita il titolo, l'autore o il genere del libro per trovare risultati rilevanti.
- **Salvataggio preferiti**: Salva i tuoi libri preferiti nel browser grazie a `localStorage`.
- **Interfaccia moderna**: Un design responsivo e accattivante costruito con Bootstrap.
- **Link utili**: Sezione per esplorare e acquistare libri o audiolibri.

## Tecnologie utilizzate

- **Frontend**: HTML5, CSS3, Bootstrap 5
- **JavaScript**: Utilizzo di `fetch` API per le richieste HTTP e gestione dei dati tramite `localStorage`.
- **Webpack**: Per la gestione dei moduli e il bundling del codice.
- **API Open Library**: Per la ricerca e la visualizzazione dei dettagli sui libri.

## Configurazione del progetto

### Requisiti

- Node.js (v14 o superiore)
- npm (v6 o superiore)

### Installazione

1. Clona il repository:

   ```bash
   git clone https://github.com/KateB-creator/progetto-bookfinder.git
   ```

2. Accedi alla directory del progetto:

   ```bash
   cd progetto-bookfinder
   ```

3. Installa le dipendenze:

   ```bash
   npm install
   ```

### Esecuzione del progetto

Avvia il server di sviluppo con il comando:

```bash
npm run start
```

Il progetto sarà accessibile all'indirizzo `http://localhost:3000`.

### Build per la produzione

Per creare una build ottimizzata per la produzione, esegui:

```bash
npm run build
```

I file saranno generati nella directory `dist`.

## Struttura del progetto

📂 progetto-libro
├── 📂 dist
    ├── 📂 img
│   │   ├── 1.png
        ├── 2.png
        ├── 3.png
        ├── visulabook.png
│   ├── bundle.js
    ├── style.css
    ├── favicon.svg
│   ├── index.html
├── 📂 src
│   ├── 📂 css
│   │   └── styles.css
│   ├── 📂 img
│   │   ├── bookfinder_og_img.png
│   │   ├── favicon.svg
        ├── 1.png
        ├── 2.png
        ├── 3.png
│   │   └── visual-book.png
│   ├── 📂 js
│   │   ├── api.js
│   │   ├── app.js
│   │   └── index.js
│   └── index.html
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── license
├── webpack.config.js

## Funzionalità in dettaglio

### Ricerca Libri

L'applicazione utilizza le API di Open Library per recuperare i dati sui libri. Puoi effettuare una ricerca inserendo una query nel campo di ricerca. I risultati includeranno il titolo, l'autore e una copertina del libro (se disponibile).

### Preferiti

Puoi salvare i libri che ti piacciono nella sezione "Preferiti". I dati sono gestiti tramite `localStorage`, quindi rimarranno salvati anche chiudendo il browser.

### Navbar e Navigazione

Un design semplice e intuitivo con sezioni principali:

- Home
- Cerca libri
- Preferiti
- Link utili
- Contatti


## Licenza

Questo progetto è distribuito sotto licenza MIT. Per maggiori informazioni, consulta il file `LICENSE`.


## LINK PROGETTO 
https://bookfinder-ricercalibri.netlify.app/

## GitHub 
https://github.com/KateB-creator/progetto-bookfinder


