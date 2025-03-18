//pacchetti da importare
import express from "express";

//impostiamo express e la porta del server
const app = express();
//import cors
import cors from 'cors'
const port = 3000;

//middleware cors
app.use(
    cors({
        origin: process.env.FRONTEND_APP
    })
)

import movieRouter from './routes/movieRouter.js'
import imagePathMiddleware from "./middlewares/imagePath.js";

//middleware per gestire asset statici
app.use( express.static('public') )

//middleware per gestire indormazioni del body
app.use( express.json() )

//middleware per gestire le immagini
app.use( imagePathMiddleware )

//router movies
app.use( '/movies', movieRouter )

//attivazione del server
app.listen( port, () => {
    console.log(`Server Movies in funzione sulla porta: ${port}`)
})