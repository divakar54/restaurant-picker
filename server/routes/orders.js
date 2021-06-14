import express from 'express';
import *  as Orders from '../controllers/orderController.js';
const router = express.Router();

router.get('/', Orders.getOrder)

router.get('/top-rated', Orders.getTopOrders)

router.post('/', Orders.postOrder)

export default router;