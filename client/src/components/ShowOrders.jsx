import React, {useState, useEffect} from 'react'
import { OrderURL } from '../apis/RestaurantFinder';

export default function ShowOrders() {
    const [orders, setOrders] = useState('');

    const fetchOrders = async() => {
        try {
            const res = await OrderURL.get("/")
            console.log(res)
            // setOrders(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchOrders();
    }, [])

    return (
        <div>
            <p>This is orders page</p>
        </div>
    )
}
