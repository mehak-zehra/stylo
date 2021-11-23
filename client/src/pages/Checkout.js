import React, { useState, useEffect } from 'react';
// import { useMutation } from '@apollo/client';
import UserIcon from '../assets/icons8-user-96.png';
// import AddressIcon from '../assets/icons8-home-96.png';
import CartIcon from '../assets/icons8-cart-96.png';
import { Link, Redirect } from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";
import CartIcon1 from '../assets/cart-1.png';
import CartIcon2 from '../assets/cart-2.png';

function Checkout(props) {
    const [state] = useStoreContext();
    const name = state.user.firstName + ' ' + state.user.lastName;
    console.log(state.user)
    const deliveryAddress = state.user.address + ', ' + state.user.city + ', ' + state.user.state + ' ' + state.user.zipCode
    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [taxes, setTaxes] = useState(0)

    useEffect(() => {
        setSubtotal(state.cart.price)
        setTaxes((0.09 * subtotal).toFixed(2))
        setTotal(subtotal + parseFloat(taxes))
    })
    return (
        (!state.user.isLoggedIn ? <Redirect to="/signup" /> :
            <div className="page">
                <h3 className="secondary-label mt-2 pl-4">checkout</h3>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 content">

                            <form>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" alt="icon for name" /> Name</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={name} />
                                    </div>
                                </div>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" alt="icon for email" /> Email</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={state.user.email} />
                                    </div>
                                </div>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" alt="icon for address" /> Address</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={deliveryAddress} />
                                    </div>
                                </div>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={CartIcon} width="30px" height="30px" alt="icon for cart" /> Items</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={state.cart.title} />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col cart">
                            <ul className="list-group">
                                <li className="list-group-item disabled font-weight-bold cart-size">cart <img src={CartIcon1} width="30px" height="30px" alt="icon for cart" /></li>
                                <li className="list-group-item">{state.cart.title} {state.cart.type} Subscription</li>
                                <li className="list-group-item"><span className="font-weight-bold">Subtotal: $</span>{subtotal}</li>
                                <li className="list-group-item"><span className="font-weight-bold">Taxes: $</span>{taxes}</li>
                                <li className="list-group-item"><span className="font-weight-bold">TOTAL: $</span>{total}</li>
                                <li className="list-group-item"><Link to="/pay"><button className="btn text-white select-btn" >Proceed to Checkout</button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ))
}

export default Checkout;