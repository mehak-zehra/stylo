import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStoreContext } from "../../utils/GlobalState";
import Box from '../../assets/icons8-gift-box-100.png'
import { ADD_TO_CART } from '../../utils/actions';
import Dress1 from '../../assets/modal_dress_1.png'
import Dress2 from '../../assets/modal_dress_2.png'
import Shoes1 from '../../assets/modal_shoes_1.png'
import Bag1 from '../../assets/modal_bag_1.png'
import Bag2 from '../../assets/bag-business-modal.jpeg'

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
                <div className="col-md-6">
                    <p className="lead card-title"><span className="font-weight-bold">{props.product.title}</span> <small className="text-muted text-lowercase">per {props.product.type} subscription</small></p>
                    <div className="card-body p-0">
                        <p className="m-0 card-text">{props.product.description}</p>
                        <p className="m-0">What is in this package:</p>
                        <ul>
                            {props.product.items.map((item) => (
                                <li><span className="font-weight-bold">{item.quantity}X</span> {item.name}</li>
                            ))}
                        </ul>
                    </div>
                    <button className="btn select-btn pl-4 pr-4 rounded" onClick={handleClick}>Select this package</button>
                </div>
                <div className="col-md-3 p-0">
                    <div className="text-right pr-4">
                        <span className="price">$ {props.product.price}</span>
                    </div>
                    <div className="text-center mt-4">
                        <div>
                            <button type="button" className="btn-outline-light modal-btn" data-toggle="modal" data-target=".bd-example-modal-lg">
                                <img className="mt-2" src={Box} alt="giftbox for this months items" />
                            </button>
                        </div>
                        <div>
                            <p className="lead p-0 m-0"><small className="text-muted">What's new this month?</small></p>
                        </div>
                    </div>
                    <div>

                        <div className="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">This month's item includes: </h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-sm-3"><img className="modal-img" src={Dress1} /></div>
                                            <div className="col-sm-3"><img className="modal-img" src={Dress2} /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3"><img className="modal-img" src={Shoes1} /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-3"><img className="modal-img" src={Bag2} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default CatalogCard;