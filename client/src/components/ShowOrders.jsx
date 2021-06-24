import React, {useState, useEffect} from 'react'
import { OrderURL } from '../apis/RestaurantFinder';
import OrderDetails from './OrderDetails';
export default function ShowOrders() {
    const [orders, setOrders] = useState([]);

    const fetchOrders = async() => {
        try {
            const res = await OrderURL.get("/")
            // console.log(res.data)
            setOrders(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <div>
            {
                orders.map(order => <OrderDetails order={order} key={order.orderId}/>)
            }
        </div>
    )
}
