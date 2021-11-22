import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import Box from '../../assets/icons8-gift-box-100.png'
import { ADD_TO_CART } from '../../utils/actions';

function CatalogCard(props) {
    let history = useHistory();
    const [state, dispatch] = useStoreContext();

    function handleClick() {
        let oldCart = state.cart;
        let newCart = oldCart.push(props.product)
        dispatch({
            type: ADD_TO_CART,
            cart: newCart
        });
        history.push('/proceed-to-checkout')
    }
    return (
        <div className="card mb-3 p-2">
            <div className="row g-0 pb-2">
                <div className="col-md-3 text-center">
                    <img src={props.product.image_url} alt="product package that is available" className="img-fluid rounded-start" />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="lead card-title">{props.product.title} <small className="text-muted">per {props.product.type} subscription</small></p>
                        </div>
                        <div className="col-md-3">
                            <div className="float-right">
                                <span className="font-weight-bold">$</span><span className="price">{props.product.price.dollar}</span><span>.{props.product.price.cents}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card-body p-0">
                                <p className="m-0 card-text">{props.product.description}</p>
                                <p className="m-0">What is in this package:</p>
                                <ul>
                                    {props.product.items.map((item) => (
                                        <li><span className="font-weight-bold">{item.quantity}X</span> {item.name}</li>
                                    ))}
                                </ul>
                                {/* <Link to="/proceed-to-checkout"> */}
                                <button className="btn select-btn pl-4 pr-4 rounded" onClick={handleClick}>Select this package</button>
                                {/* </Link> */}
                            </div>
                        </div>
                        <div className="col-md-3 text-center">
                            <div>
                                <img className="mt-2" src={Box} alt="giftbox for this months items" />
                            </div>
                            <div>
                                <p className="lead p-0 m-0"><small className="text-muted">What is new this month?</small></p>
                                <p className="lead p-0 m-0"><small className="text-muted">Click on the giftbox</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogCard;