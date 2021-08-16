import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function LineItem() {
    const [lineItems, setLineItems] = useState([]);
    const URL = "http://localhost:3000";

    useEffect(() => {
        geLineItemById();
    }, [])

    const geLineItemById = async () => {
        try {
            const access_token = localStorage.getItem('access_token')
            let lineItems = await axios({
                method: 'GET',
                url: `${URL}/line_items/auth`,
                headers: {
                    access_token
                },
            })
            setLineItems(lineItems.data)
            console.log(lineItems.data)
            console.log(access_token)
        } catch (err) {
            Swal.fire(
                'Oops',
                `${err}`,
                'error'
            )
        }
    }

    return (
        <div className="container space-enter">
            <h1 className="text-center text-light">Line Item</h1>
            <table className="table table-dark space-enter">
            <thead>
                <tr>
                <th className="table-dark" scope="col">Line ID</th>
                <th className="table-dark" scope="col">Qty</th>
                <th className="table-dark" scope="col">Status</th>
                <th className="table-dark" scope="col">Product ID</th>
                <th className="table-dark" scope="col">Shop ID</th>
                <th className="table-dark" scope="col">Order Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    lineItems.map((lineItem) => {
                        return (
                            <tr>
                                <td className="table-dark">{lineItem.id}</td>
                                <td className="table-dark">{lineItem.qty}</td>
                                <td className="table-dark">{lineItem.status}</td>
                                <td className="table-dark">{lineItem.ProductId}</td>
                                <td className="table-dark">{lineItem.Shopping_CartId}</td>
                                <td className="table-dark">{lineItem.order_name}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default LineItem
