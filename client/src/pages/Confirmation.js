import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserIcon from '../assets/icons8-user-96.png';
import AddressIcon from '../assets/icons8-home-96.png';
import CartIcon from '../assets/icons8-cart-96.png';
import AddIcon from '../assets/icons8-add-100.png';
import TrashIcon from '../assets/icons8-trash-96.png';

function ConfirmationPage(props) {

    return (
        <div className="page">
            <div className="container-fluid">
                <div className="jumbotron mt-5">
                    <h1 className="display-2 confirm-title">Congratulations! You have booked the subscription</h1>
                    <p className="lead">Your confirmation ID is XXXXXXXXX</p>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage;