passaggi:
1. npm init -y (da terminale)
2. npm i mysql2 (da terminale)
3. npm i express (da terminale)

4. crea file app.js nella cartella principale (ricordati di rinominare la voce 'main' in 
   package.json da index.js a main.js)
   - se vogliamo usare la modalità ES6 di importazione e esportazione dobbiamo aggiornare il package.json
     con "type": "module"
   - aggiungere i due script di attivazione del server: 
        "start": "node app.js",
        "watch": "node --watch app.js"

5. aggiornare file app.js:
    ```javascript
    //pacchetti da importare
    import express from "express";

    //impostiamo express e la porta del server
    const app = express();
    const port = 3000;

    //attivazione del server
    app.listen( port, () => {
    console.log(`Server Movies in funzione sulla porta: ${port}`)
    })
    ```