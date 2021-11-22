import React from 'react';
import Dress from '../assets/women.jpeg';
import DressMen from '../assets/men.jpeg';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="page">
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2 className="secondary-label">categories</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="category-img" src={DressMen} alt="" />
                        <h2 className="secondary-label">MEN</h2>
                    </div>
                    <div className="col">
                        <Link to="/catalog-women">
                            <img className="category-img" src={Dress} alt="" />
                        </Link>
                        <h2 className="secondary-label">WOMEN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;