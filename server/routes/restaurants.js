import express from 'express';
import * as Restaurant from '../controllers/restaurantController.js';

const router = express.Router();

router.get('/', Restaurant.getRestaurant)

router.get('/:id', Restaurant.getRestaurantWithId)

router.post('/', Restaurant.addRestaurant)

router.delete('/:id', Restaurant.removeRestaurant)

export default router;

