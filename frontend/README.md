### 1. Titolo del Progetto

**Project: Alcohol**

---

### 2. Descrizione del Progetto

Applicazione Web  che permette di **scannerizzare i barcode**
di vini, birre e superalcolici.  
Dopo la scansione, l’utente potrà visualizzare:

- Le informazioni complete del prodotto (nome, gradazione, provenienza, descrizione, ecc.)  
- Suggerimenti di abbinamento con piatti e cibi specifici  
- Ricette di cocktail che utilizzano quel superalcolico 

---

### 3. Target

L’app si rivolge principalmente a:  
- Consumatori con **poca o nessuna conoscenza** di vini, birre e superalcolici  
- Persone che vogliono scegliere in modo più consapevole e veloce quale prodotto acquistare o consumare  

---

### 4. Mission

- Aiutare i clienti inesperti a **riconoscere e comprendere** meglio i prodotti alcolici  
- Fornire suggerimenti personalizzati per il consumo (abbinamenti gastronomici e cocktail)  
- Rendere più **interattiva e semplice** l’esperienza di scelta di vini, birre e superalcolici  

---

### 5. Funzionalità Principali (Roadmap)

- **Fase Uno:** Scannerizzazione etichetta e riconoscimento prodotto  
- **Fase Due:** Visualizzazione scheda informativa completa  
- **Fase Tre:** Suggerimenti di abbinamento con piatti e cibi  
- **Fase Quattro:** Ricette di cocktail in base al superalcolico selezionato
- **Fase Cinque:** Possibilità di salvare i prodotti preferiti

---

### 6. Architettura Software

- **Frontend Web:** React 19 + Vite.js  
- **Mobile:** React Native  
- **Backend:** Python/Django *oppure* Node.js 22 LTS + Express  
- **Database:** MySQL  
- **API REST** per la comunicazione tra frontend e backend  

---

### 7. Note

- La **prima versione** sarà sviluppata come WebApp  
- Successivamente, verrà creata anche la versione **Mobile Nativa**
- Il progetto può essere espanso con funzionalità aggiuntive (es. suggerimenti da IA)

---

### 8. Potenziale Mercato

- Consumatori giovani e curiosi che vogliono avvicinarsi al mondo degli alcolici
- Ristoranti, enoteche e locali che potrebbero utilizzare l'app come strumento di supporto ai clienti
- Crescente interesse verso soluzioni digitali che semplificano la scelta di vini, birre e cocktail

---

### Istruzione per l'uso

1. Clonare questa repo col comando *git clone* git@github.com:Ricca917/Project-Alcohol.git

2. Entrare nella directory *alcohol-app*

3. Installare pacchetti Node tramite comando *npm install*

4. Installare dipendenze aggiuntive: 

    - React-router-dom: *npm install react-router-dom*
    
    - Material UI: *npm install @mui/material @mui/icons-material @emotion/react @emotion/styled* 
    
    - API Barcode: *npm install quagga* vedi repo: https://github.com/serratus/quaggaJS

5. Avviare l'applicazione con il comando *npm run dev*

6. Scannerizzare uno dei barcode forniti nella directory *assets* oppure inserirli manualmente:

    Barcode Utilizzabili al momento:
    - 12345670 
    - 96385074
    - 25847109

In caso di problemi di lettura, stampare il file PDF "Codici a Barre di prova" e riprovare.

---
