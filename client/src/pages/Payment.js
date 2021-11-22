import React from 'react';
import { Link } from 'react-router-dom';

function Payment(props) {

    return (
        <div className="page">
            <h3 className="secondary-label mt-2 pl-4">checkout</h3>
            <div className="container">
                <Link to="/confirmation">
                    <button className="btn select-btn pl-3 pr-3">Pay</button>
                </Link>
            </div>
        </div>
    )
}

export default Payment;