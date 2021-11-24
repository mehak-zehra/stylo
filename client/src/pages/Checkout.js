import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useStoreContext } from "../utils/GlobalState";
import CartIcon1 from '../assets/cart-1.png';
import { useMutation } from '@apollo/client';
import { CREATE_STRIPE_SESSION_ID } from '../utils/mutations';
import { loadStripe } from "@stripe/stripe-js";
import UserIconNew from '../assets/user-icon.png';
import HomeAddress from '../assets/home-giphy.gif';
import EmailIcon from '../assets/gmail-icon.png';
import Items from '../assets/items-box.png';
import Measurement from '../assets/tape-measure.png';

function Checkout(props) {
    const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    const [state] = useStoreContext();

    const [total, setTotal] = useState(0)
    const [subtotal, setSubtotal] = useState(0)
    const [taxes, setTaxes] = useState(0)

    const deliveryToName = state.user.firstName + ' ' + state.user.lastName;
    const checkoutToName = state.user.firstName;
    const deliveryAddress = state.user.address + ', ' + state.user.city + ', ' + state.user.state + ' ' + state.user.zipCode
    const productName = state.cart.title + ' ' + state.cart.type + ' Subscription'

    useEffect(() => {
        setSubtotal(state.cart.price)
        setTaxes((0.09 * subtotal).toFixed(2))
        setTotal(subtotal + parseFloat(taxes))
    })

    const [createSessionId, { error }] = useMutation(CREATE_STRIPE_SESSION_ID);
    const handleProceedToCheckout = async (event) => {
        try {
            const price = state.cart.price * 100
            const mutationResponse = await createSessionId({
                variables: { productName: productName, productDescription: state.cart.description, priceAmount: `${price}` },
            });
            const sessionId = mutationResponse.data.getCheckoutSessionId;
            console.log(sessionId)

            if (mutationResponse.data) {
                stripePromise.then((res) => {
                    res.redirectToCheckout({ sessionId: sessionId });
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        (!state.user.isLoggedIn ? <Redirect to="/signup" /> :
            <div className="page mb-2">
                <h3 className="secondary-label mt-2 pl-4 checkout-message">Hello {checkoutToName}! we're ready to checkout
                    {/* <br /> <span className="checkout-message-child">Here are the order delivery details. Please check before you proceed.</span> */}
                </h3>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-md-10 content">
                            <form>
                                <div id="accordion">
                                    <div className="card">
                                        <div class="card-header" id="headingOne">
                                            <h5 className="mb-0">
                                                <label for="collapseTwo" className="col-sm-2 col-form-label lead primary-color">SELECT A SIZE</label>
                                            </h5>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={Measurement} width="30px" height="30px" alt="icon for cart" /> Size</label>
                                                    <div className="col-sm-10">
                                                        <select className="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                                            <option selected>Choose...</option>
                                                            <option value="3">(P) - Petite</option>
                                                            <option value="1">(S) - Small</option>
                                                            <option value="2">(M) - Medium</option>
                                                            <option value="3">(L) - Large</option>
                                                            <option value="3">(XL) - Extra Large</option>
                                                            <option value="3">(XXL) - Double X Large</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <label for="collapseTwo" className="col-sm-2 col-form-label lead primary-color">DELIVERY DETAILS</label>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={UserIconNew} width="30px" height="30px" alt="icon for name" /> Name</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={deliveryToName} />
                                                    </div>
                                                </div>
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={EmailIcon} width="30px" height="30px" alt="icon for email" /> Email</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={state.user.email} />
                                                    </div>
                                                </div>
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={HomeAddress} width="30px" height="30px" alt="icon for address" /> Address</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={deliveryAddress} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" id="headingTwo">
                                            <h5 className="mb-0">
                                                <label for="collapseTwo" className="col-sm-2 col-form-label lead primary-color">PRODUCT DETAILS</label>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"><img src={Items} width="30px" height="30px" alt="icon for cart" /> Items</label>
                                                    <div className="col-sm-10">
                                                        <input type="text" readOnly className="form-control-plaintext lead" id="staticEmail" value={productName} />
                                                    </div>

                                                </div>
                                                <div className="form-group row m-0">
                                                    <label for="staticEmail" className="col-sm-2 col-form-label lead"></label>

                                                    <ul>
                                                        {state.cart.items.map((item) => (
                                                            <li><span className="font-weight-bold">{item.quantity}X</span> {item.name}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col cart">
                            <ul className="list-group">
                                <li className="list-group-item disabled font-weight-bold cart-size">cart <img src={CartIcon1} width="30px" height="30px" alt="icon for cart" /></li>
                                <li className="list-group-item">{productName}</li>
                                <li className="list-group-item"><span className="font-weight-bold">Subtotal: $</span>{subtotal}</li>
                                <li className="list-group-item"><span className="font-weight-bold">Taxes: $</span>{taxes}</li>
                                <li className="list-group-item"><span className="font-weight-bold">TOTAL: $</span>{total}</li>
                                <li className="list-group-item"><button className="btn text-white select-btn" onClick={handleProceedToCheckout}>Proceed to Checkout</button></li>
                            </ul>
                        </div>
                    </div >
                </div >
            </div >
        ))
}

export default Checkout;