# **Project: Alcohol**

### 1. Descrizione del Progetto

Applicazione Web  che permette di **scannerizzare i barcode**
di vini, birre e superalcolici.  
A seguito della scansione, l’utente visualizzerà:

- Le informazioni complete del prodotto (nome, gradazione, provenienza, descrizione, ecc.)  

- Suggerimenti di abbinamento con piatti e cibi specifici  

- Ricette di cocktail che utilizzano quel superalcolico 

### 2. Target

L’app si rivolge principalmente a:  

- Consumatori con **poca o nessuna conoscenza** di vini, birre e superalcolici  

- Persone che vogliono scegliere in modo più consapevole e veloce quale prodotto acquistare o consumare  

### 3. Mission

- Aiutare i clienti a **riconoscere e comprendere** meglio i prodotti alcolici  

- Fornire suggerimenti personalizzati per il consumo (abbinamenti gastronomici e cocktail)  

- Rendere più **interattiva e semplice** l’esperienza di scelta prodotti  

### 4. Funzionalità Principali (Roadmap)

- ✅ **Fase Uno:** Scannerizzazione etichetta e riconoscimento prodotto — *Completata*  

- ✅ **Fase Due:** Visualizzazione scheda informativa completa — *Completata*  

- ✅ **Fase Tre:** Suggerimenti di abbinamento con piatti e cibi — *Completata*  

- ✅ **Fase Quattro:** Ricette di cocktail in base al superalcolico selezionato — *Completata*  

- ⏳ **Fase Cinque:** Registrazione e Login Utente — *In arrivo*

- ⏳ **Fase Sei:** Salvataggio dei preferiti — *In arrivo*  

- ⏳ **Fasi Sette** Popolamento del db tramite scan utente (se prodtto non già presente) — *in arrivo*

### 5. Architettura Software

- **Frontend Web:** React 19 + Vite.js  

- **Mobile:** React Native  

- **Backend:** Django 

- **Database:** Sqlite  

- **API REST** Django Rest Framework  

### 6. Note

- La **prima versione** sarà sviluppata come WebApp  
- Successivamente, verrà creata anche la versione **Mobile Nativa**

### 7. Potenziale Mercato

- Consumatori giovani e curiosi che vogliono avvicinarsi al mondo degli alcolici

- Ristoranti, enoteche e locali che potrebbero utilizzare l'app come strumento di supporto ai clienti

- Crescente interesse verso soluzioni digitali che semplificano la scelta di vini, birre e cocktail

---

# Istruzione per l'uso

**Clonare questa repo col comando** *git clone git@github.com:Ricca917/Project-Alcohol-FullStack.git*

## Setup Backend

1. Entrare nella directory *backend*

2. Creare ambiente virtuale con *python -m venv .venv*

3. Attivare l'ambiente con *source .venv/Scripts/activate* (Windows)
    *source .venv/bin/activate* (linux/MacOS)

4. Installare pacchetti Django *pip install -r requirements.txt*

 NB: il file "requirements.txt" deve essere aggiornato ogni volta che si 
    aggiungono pacchetti, usando *pip freeze > requirements.txt*

5. Applicare le migrazioni con *python manage.py migrate*

6. Creare un admin con *python manage.py createsuperuser* (inserendo user,mail, password)

7. Popolare il db con *python manage.py loaddata api/backup/data.json*

8. Avviare il backend Django *python manage.py runserver*

9. Accedere alla Amministrazione *http://127.0.0.1:8000/admin/* usando le credenziali del admin creato al punto 6

## Setup Frontend

1. Entrare nella directory *alcohol-app*

2. Installare pacchetti Node tramite comando *npm install*

3. Installare dipendenze aggiuntive: 

    - React-router-dom: *npm install react-router-dom*
    
    - Material UI: *npm install @mui/material @mui/icons-material @emotion/react @emotion/styled* 
    
    - API Barcode: *npm install quagga* repo: https://github.com/serratus/quaggaJS

4. Avviare l'applicazione con il comando *npm run dev*

5. Scannerizzare uno dei barcode forniti nella directory *assets* oppure inserirli manualmente:

    Barcode Utilizzabili al momento:
    
    - 12345670 
    
    - 96385074
    
    - 25847109

- Il file PDF "Codici a Barre di prova" contiene i dati per gli scan.
se ci fossero problemi di lettura dovuta allo schermo, stampare quel file

---

