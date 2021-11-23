import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import Box from '../../assets/icons8-gift-box-100.png'
import { ADD_TO_CART } from '../../utils/actions';

function CatalogCard(props) {
    let history = useHistory();
    const [state, dispatch] = useStoreContext();

    function handleClick() {
        dispatch({
            type: ADD_TO_CART,
            cart: props.product
        });
        history.push('/proceed-to-checkout')
    }
    return (
        <div className="card mb-3 p-2">
            <div className="row g-0 pb-2">
                <div className="col-md-3 text-center">
                    <img src={props.product.image_url} alt="product package that is available" className="img-fluid rounded-start img-responsive w-100 h-100" />
                </div>
                <div className="col-md-9">
                    <div className="row">
                        <div className="col-md-8">
                            <p className="lead card-title"><span className="font-weight-bold">{props.product.title}</span> <small className="text-muted text-lowercase">per {props.product.type} subscription</small></p>
                        </div>
                        <div className="col-md-3">
                            <div className="float-right">
                                {/* <span className="font-weight-bold">$</span><span className="price">{props.product.price}</span> */}
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
                                {/* <button className="btn select-btn pl-4 pr-4 rounded" onClick={handleClick}>Select this package</button> */}
                            </div>
                        </div>
                        <div className="col-md-4 text-center">
                            <div>
                                <img className="mt-2" src={Box} alt="giftbox for this months items" onClick={() => { }} />
                            </div>
                            <div>
                                <p className="lead p-0 m-0"><small className="text-muted">What's new this month?</small></p>
                                {/* <p className="lead p-0 m-0"><small className="text-muted">Click on the giftbox</small></p> */}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <button className="btn select-btn pl-4 pr-4 rounded" onClick={handleClick}>Select this package</button>
                        </div>
                        <div className="col-md-4 text-center">
                            <div>
                                <span className="font-weight-bold">$</span><span className="price">{props.product.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogCard;