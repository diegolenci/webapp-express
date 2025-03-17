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
6. aggiungi cartelle:
    middlewares, controllers, data, public, routes
    e il file: .env

7. creare il file dentro la cartella data: db.js
    - modifico il file:
    ```javascript
    import mysql from "mysql2"

    const connection = mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER ||"root",
        password: process.env.DB_PASSWORD ||'',
        database: process.env.DB_NAME 
    });

    connection.connect( (err) => {
        if(err) throw err;

        console.log( "Connessione al DB avvenuta con successo" )
    } )

    export default connection;
    ```
8. aggiornamento del file package.json e della chiave script per leggere il .env con:
    "watch": "node --env-file=.env --watch app.js"