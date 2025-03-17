import express from 'express'

const router = express.Router()

import {index, show, destroy} from '../controllers/movieController.js'


//rotte per i film

//index
//localhost:3000/api/movies
router.get('/', index);

//show
//localhost:3000/api/movies/:id
router.get('/', show);

//destroy
//localhost:3000/api/movies/:id
router.delete('/', destroy);

export default router