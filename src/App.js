import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
}

export default App;

/**
 * 📌 LEZIONE COMPLETA: INSTALLAZIONE GIT, GITHUB E UTILIZZO SU VSCODE
 *
 * ===========================
 * 1️⃣ INSTALLARE GIT
 * ===========================
 * Git è un software che permette di gestire versioni del codice e collaborare con altri sviluppatori.
 * - Vai su https://git-scm.com/ e scarica la versione adatta al tuo sistema operativo.
 * - Installa Git lasciando tutte le opzioni di default.
 * - Dopo l'installazione, apri il terminale e verifica che sia installato digitando:
 *   ```
 *   git --version
 *   ```
 *   Dovrebbe restituire una versione di Git installata.
 *
 * ===========================
 * 2️⃣ CREARE UN ACCOUNT GITHUB
 * ===========================
 * GitHub è una piattaforma per ospitare repository Git online.
 * - Vai su https://github.com/ e clicca su "Sign Up".
 * - Inserisci il tuo username, email e password.
 * - Verifica l'email ricevuta per attivare l'account.
 *
 * ===========================
 * 3️⃣ CONFIGURARE GIT CON GITHUB
 * ===========================
 * Dopo aver installato Git e creato un account GitHub, bisogna collegare Git al proprio account.
 * - Apri il terminale e configura Git con il tuo nome utente e email GitHub:
 *   ```
 *   git config --global user.name "IlTuoNomeUtente"
 *   git config --global user.email "LaTuaEmail"
 *   ```
 * - Controlla se la configurazione è stata salvata correttamente con:
 *   ```
 *   git config --list
 *   ```
 *
 * ===========================
 * 4️⃣ CREARE UNA NUOVA REPOSITORY E AGGIUNGERE UN PROGETTO ESISTENTE
 * ===========================
 * Se hai già un progetto e vuoi caricarlo su GitHub:
 * 1. **Spostati nella cartella del progetto:**
 *    ```
 *    cd percorso/della/cartella
 *    ```
 * 2. **Inizializza Git nella cartella:** (Crea una repository Git locale)
 *    ```
 *    git init
 *    ```
 * 3. **Aggiungi tutti i file alla repository:** (Prepara i file per il commit)
 *    ```
 *    git add .
 *    ```
 * 4. **Collega la cartella a GitHub:** (Aggiunge il remote repository)
 *    ```
 *    git remote add origin https://github.com/IlTuoNomeUtente/NomeDellaRepository.git
 *    ```
 * 5. **Crea il primo commit:** (Salva lo stato attuale dei file)
 *    ```
 *    git commit -m "Inizializzazione del progetto"
 *    ```
 * 6. **Imposta il branch principale:** (Rinomina il branch predefinito in `main`)
 *    ```
 *    git branch -M main
 *    ```
 * 7. **Carica il progetto su GitHub:** (Invia il codice al repository remoto)
 *    ```
 *    git push -u origin main
 *    ```
 *
 * ===========================
 * 🔹 COSA SONO I BRANCH?
 * ===========================
 * Un **branch** è una versione separata del codice in cui puoi lavorare senza influenzare il branch principale (di solito `main` o `master`).
 * I branch vengono usati per sviluppare nuove funzionalità o correggere bug senza alterare il codice stabile.
 *
 * 🔸 Comandi utili per i branch:
 * - **Visualizzare il branch attuale:**
 *   ```
 *   git branch
 *   ```
 * - **Creare un nuovo branch:**
 *   ```
 *   git branch nome-branch
 *   ```
 * - **Passare a un altro branch:**
 *   ```
 *   git checkout nome-branch
 *   ```
 * - **Creare e spostarsi su un nuovo branch in un solo comando:**
 *   ```
 *   git checkout -b nome-branch
 *   ```
 * - **Unire un branch al `main`:**
 *   ```
 *   git merge nome-branch
 *   ```
 * - **Eliminare un branch:**
 *   ```
 *   git branch -d nome-branch
 *   ```
 *
 * ===========================
 * 🔹 VISUALIZZARE L'ORIGIN REMOTE
 * ===========================
 * Per controllare a quale repository GitHub è collegato il tuo progetto, usa il comando:
 *   ```
 *   git remote -v
 *   ```
 * Questo comando mostra l'URL della repository remota a cui il progetto è connesso.
 * Se non hai ancora un remote, puoi aggiungerlo con:
 *   ```
 *   git remote add origin https://github.com/IlTuoNomeUtente/NomeDellaRepository.git
 *   ```
 *
 * ===========================
 * ✅ ORA IL TUO PROGETTO È SU GITHUB! 🚀
 * ===========================
 *
 * 🎯 **Da VSCode puoi anche usare l'interfaccia grafica:**
 * - Vai sulla scheda **Git** (icona `Y` rovesciata a sinistra).
 * - Premi il `+` per aggiungere i file.
 * - Scrivi un messaggio di commit e conferma.
 * - Premi **Push** per inviare le modifiche su GitHub.
 *
 * Così puoi gestire tutto direttamente da VSCode! 🚀
 */
