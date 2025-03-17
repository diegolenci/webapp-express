//pacchetti da importare
import express from "express";

//impostiamo express e la porta del server
const app = express();
const port = 3000;

import movieRouter from './routes/movieRouter.js'

//middleware per gestire asset statici
app.use( express.static('public') )

//middleware per gestire indormazioni del body
app.use( express.json() )

//router movies
app.use( '/movies', movieRouter )

//attivazione del server
app.listen( port, () => {
    console.log(`Server Movies in funzione sulla porta: ${port}`)
})