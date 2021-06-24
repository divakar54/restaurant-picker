import React from 'react'

export default function OrderDetails(props) {
    return (
        <div>
            <p>{props.order.productName}</p>
            <p>{props.order.orderAmount}</p>
        </div>
    )
}
