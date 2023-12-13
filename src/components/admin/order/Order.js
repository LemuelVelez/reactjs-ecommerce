import React, { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';

function Order() {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        let isMounted = true;
        document.title = "Orders";

        axios.get(`/api/admin/orders`).then(res => {
            if (isMounted) {
                if (res.data.status === 200) {
                    setOrders(res.data.orders);
                    setLoading(false);
                }
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);

    const handleDeleteOrder = async (orderId) => {
        try {
            await axios.delete(`/api/admin/orders/${orderId}`);
            setOrders(prevOrders =>
                prevOrders.filter(order => order.id !== orderId)
            );

            // Display a success message using SweetAlert
            swal("Success", "Order deleted successfully", "success");
        } catch (error) {
            console.error('Error deleting order:', error);
        }
    };

    var display_orders = "";
    if (loading) {
        return <h4>Loading Orders...</h4>;
    } else {
        display_orders = orders.map((item) => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.tracking_no}</td>
                    <td>{item.firstname} {item.lastname}</td>
                    <td>{item.phone}</td>
                    <td>{item.email}</td>
                    <td>{item.address}, {item.city}, {item.state} {item.zipcode}</td>
                    <td>
                        <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteOrder(item.id)}
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className="container px-4 mt-3">
            <div className="card">
                <div className="card-header">
                    <h4>Orders</h4>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Tracking No.</th>
                                    <th>Name</th>
                                    <th>Phone No.</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {display_orders}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;
