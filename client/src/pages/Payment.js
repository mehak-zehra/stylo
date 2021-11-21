import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserIcon from '../assets/icons8-user-96.png';
import AddressIcon from '../assets/icons8-home-96.png';
import CartIcon from '../assets/icons8-cart-96.png';
import AddIcon from '../assets/icons8-add-100.png';
import TrashIcon from '../assets/icons8-trash-96.png';

function Payment(props) {

    return (
        <div className="page">
            <h3 className="secondary-label mt-2 pl-4">checkout</h3>
            <div className="container">
                <a href="/confirmation">
                    <button className="btn select-btn pl-3 pr-3">Pay</button>
                </a>
            </div>
        </div>
    )
}

export default Payment;