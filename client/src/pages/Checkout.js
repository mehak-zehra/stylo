import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import UserIcon from '../assets/icons8-user-96.png';
import AddressIcon from '../assets/icons8-home-96.png';
import CartIcon from '../assets/icons8-cart-96.png';
import AddIcon from '../assets/icons8-add-100.png';
import TrashIcon from '../assets/icons8-trash-96.png';

function Checkout(props) {

    return (
        <div className="page">
            <h3 className="secondary-label mt-2 pl-4">checkout</h3>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 content">

                        <form>
                            <div class="form-group row m-0">
                                <label for="staticEmail" class="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" /> Name</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext lead" id="staticEmail" value="Tony Stark" />
                                </div>
                            </div>
                            <div class="form-group row m-0">
                                <label for="staticEmail" class="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" /> Email</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext lead" id="staticEmail" value="ironman@stark.com" />
                                </div>
                            </div>
                            <div class="form-group row m-0">
                                <label for="staticEmail" class="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" /> Address</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext lead" id="staticEmail" value="6 Infinity Stones Drive, Los Angeles, CA 95438" />
                                </div>
                            </div>
                            <div class="form-group row m-0">
                                <label for="staticEmail" class="col-sm-2 col-form-label lead"><img src={CartIcon} width="30px" height="30px" /> Cart</label>
                                <div class="col-sm-10">
                                    <input type="text" readonly class="form-control-plaintext lead" id="staticEmail" value="Formal Monthly Subscription" />
                                </div>
                            </div>
                            {/* <div class="form-group row m-0">
                                <label for="staticEmail" class="col-sm-2 col-form-label lead"><img src={CartIcon} width="30px" height="30px" /> Additions to Subscription</label>
                                <div class="col-sm-10">
                                    <p className="lead">Items</p>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">- Additional Dress <img src={AddIcon} width="30px" height="30px" />  <img src={TrashIcon} width="30px" height="30px" /> </li>
                                        <li class="list-group-item">- Additional Shoes <img src={AddIcon} width="30px" height="30px" />  <img src={TrashIcon} width="30px" height="30px" /> </li>
                                        <li class="list-group-item">- Additional Bag <img src={AddIcon} width="30px" height="30px" />  <img src={TrashIcon} width="30px" height="30px" /> </li>
                                        <li class="list-group-item">- Additional Scarf <img src={AddIcon} width="30px" height="30px" />  <img src={TrashIcon} width="30px" height="30px" /> </li>
                                        <li class="list-group-item">- Additional Sunglasses <img src={AddIcon} width="30px" height="30px" />  <img src={TrashIcon} width="30px" height="30px" /> </li>
                                    </ul>
                                </div>
                            </div> */}
                        </form>
                    </div>
                    <div className="col cart">
                        <ul class="list-group">
                            <li class="list-group-item disabled">Cart</li>
                            <li class="list-group-item">Formal Monthly Subscription</li>
                            <li class="list-group-item">Morbi leo risus</li>
                            <li class="list-group-item">Porta ac consectetur ac</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                            <li class="list-group-item"><span className="font-weight-bold">Subtotal: </span> $199.99</li>
                            <li class="list-group-item"><span className="font-weight-bold">Taxes: </span> $15.99</li>
                            <li class="list-group-item"><span className="font-weight-bold">TOTAL: </span> $215.98</li>
                            <li class="list-group-item"><a href="/pay"><button className="btn text-white select-btn" >Proceed to Checkout</button></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;