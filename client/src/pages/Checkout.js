import React from 'react';
// import { useMutation } from '@apollo/client';
import UserIcon from '../assets/icons8-user-96.png';
// import AddressIcon from '../assets/icons8-home-96.png';
import CartIcon from '../assets/icons8-cart-96.png';
import { Link, Redirect } from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";

function Checkout(props) {
    const [state] = useStoreContext();
    const name = state.user.firstName + ' ' + state.user.lastName;

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
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value="ironman@stark.com" />
                                    </div>
                                </div>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={UserIcon} width="30px" height="30px" alt="icon for address" /> Address</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value="6 Infinity Stones Drive, Los Angeles, CA 95438" />
                                    </div>
                                </div>
                                <div className="form-group row m-0">
                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={CartIcon} width="30px" height="30px" alt="icon for cart" /> Cart</label>
                                    <div className="col-sm-10">
                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value="Formal Monthly Subscription" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col cart">
                            <ul className="list-group">
                                <li className="list-group-item disabled">Cart</li>

                                {state.cart.map((item) => (
                                    <li className="list-group-item">{item.title} {item.type} Subscription</li>))
                                }

                                <li className="list-group-item"><span className="font-weight-bold">Subtotal: </span> $199.99</li>
                                <li className="list-group-item"><span className="font-weight-bold">Taxes: </span> $15.99</li>
                                <li className="list-group-item"><span className="font-weight-bold">TOTAL: </span> $215.98</li>
                                <li className="list-group-item"><Link to="/pay"><button className="btn text-white select-btn" >Proceed to Checkout</button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        ))
}

export default Checkout;