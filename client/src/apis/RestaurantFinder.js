import axios from 'axios';

 const RestaurantURL = axios.create({
    baseURL: 'http://localhost:3001/api/v1/restaurants',
})

 const OrderURL = axios.create({
    baseURL : 'http://localhost:3001/api/v1/orders',
})

export {RestaurantURL, OrderURL}