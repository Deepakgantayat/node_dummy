import { Router } from 'express'
const router = Router()
import {getData} from '../src/controllers/dataController.js'

router.get('/users/data', getData)

export default router;
