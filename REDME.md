# BookFinder
BookFinder è un'applicazione web intuitiva progettata per aiutarti a scoprire e gestire i tuoi libri preferiti in pochi clic. Grazie a funzionalità avanzate come la ricerca per titolo, autore o genere, e una sezione dedicata ai libri preferiti, BookFinder è il compagno ideale per tutti gli amanti della lettura.

## Funzionalità

-Ricerca avanzata: Trova rapidamente libri per titolo, autore o genere utilizzando un'interfaccia semplice e user-friendly.

-Gestione dei preferiti: Aggiungi e gestisci i tuoi libri preferiti in una lista personalizzata.

-Risorse utili: Scopri audiolibri, ebook e librerie fisiche attraverso link e immagini interattive.

-Modulo di contatto: Invia messaggi al creatore del progetto direttamente dall'applicazione.

-Design responsivo: Ottimizzato per dispositivi mobili, tablet e desktop.

## Struttura del progetto

📂 progetto-libro
├── 📂 dist
│   ├── bundle.js
│   ├── index.html
├── 📂 src
│   ├── 📂 css
│   │   └── styles.css
│   ├── 📂 img
│   │   ├── 📂 fullsize
│   │   ├── 📂 thumbnails
│   │   ├── favicon.svg
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
├── webpack.config.js

### Tecnologie utilizzate

-HTML5
-CSS3
-JavaScript (ES6+)
-Bootstrap 5
-Webpack per il bundling
-EmailJS per la gestione dei messaggi

### Autrice
Progettato e sviluppato da Balia Katiuscia. Se hai domande o suggerimenti, non esitare a contattarmi tramite il modulo presente nell'applicazione.

##### Licenza
Questo progetto è rilasciato sotto la licenza MIT


###### Configurazione del progetto

1. Requisiti

Node.js installato sul sistema

Gestore pacchetti npm (incluso con Node.js)

2. Installazione

Clona il repository e installa le dipendenze necessarie:

git clone <repository-url>
cd progetto-bookfinder
npm install

3. Configurazione delle variabili d'ambiente

Crea un file .env nella radice del progetto e aggiungi le seguenti variabili:

EMAILJS_SERVICE_ID=service_xwvkpar
EMAILJS_TEMPLATE_ID=template_8mrwhtq
EMAILJS_USER_ID=ltJV9RVED6akh19KZ

4. Avvio del server di sviluppo

Per avviare il progetto in modalità sviluppo:

npm run start

L'app sarà disponibile su http://localhost:9000.

5. Creazione della build per la produzione

Per generare una versione ottimizzata del progetto:

npm run build

I file ottimizzati saranno generati nella cartella dist.








