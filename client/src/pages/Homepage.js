import React from 'react';
import Dress from '../assets/women.jpeg';
import DressMen from '../assets/men.jpeg';

function Homepage() {
    return (
        <div className="page">
            {/* <div className="homepage-jumbo jumbotron">
                <h1 className="lead mt-5 headline">Your clothes, your way!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured</p>

                <button className="btn rounded pl-3 pr-3 learn-more-btn">Learn more</button>
            </div> */}
            <div className="container p-3">
                <div className="row">
                    <div className="col">
                        <h2 className="secondary-label">categories</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img className="category-img" src={DressMen} />
                        <h2 className="secondary-label">MEN</h2>
                    </div>
                    <div className="col">
                        <a href="/catalog-women">
                            <img className="category-img" src={Dress} />
                        </a>
                        <h2 className="secondary-label">WOMEN</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;