import express from 'express'
import {getData} from '../controllers/movimientos.js'

const router = express.Router();

const path="movimientos"

router.get( 
    `${path}/`,
    getData()
    );


export default router