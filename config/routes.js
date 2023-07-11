import { Router } from 'express'
const router = Router()
import {getData} from '../src/controllers/dataController.js'

router.route('/users/data').get(getData)
// router.get('/users/data', getData)

export default router;
