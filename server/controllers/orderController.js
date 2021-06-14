import { Orders } from '../models/models.js';
import { range_date } from "../utilities/range-date.js";
const [begin, end] = range_date();

export const getOrder = async(req, res) => {

    try {

        await Orders.find()
                .then(order => res.json(order))
                .catch(err => console.error(err))

    } catch (error) {
    
        res.status(501).send("couldn't find your order")
    }
}

export const postOrder = async(req, res) => {

    try {
        const { orderAmount, productName, price } = req.body;

        const order = new Orders({
            productName: productName,
            orderAmount: orderAmount,
            foodPrice: price,
           
        })

        await order.save()
                    .then(order => res.json(order))
                    .catch(err => console.error(err))

    } catch (error) {
        res.status(404).send("Couldn't place order")
    }
}

export const getTopOrders = async(req, res) => {
    try {
        
        await Orders.
                find(
                    {
                        $and : 
                        [
                         {orderDate : {$gte : new Date(end)}}, 
                         {orderDate : {$lte : new Date(begin)}}
                        ]
                    }
                    ).
                then(order => {
                    
                    res.json(order);
                })
    } catch (error) {
        res.status(404).send("Couldn't get orders")
    }
}