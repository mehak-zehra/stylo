import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="">
            <div className="container pb-2 pt-2">
                <div className="row mt-3">
                    <div className="col-md-2 pb-3">
                        <h5 className="font-weight-bold">Company</h5>
                        <ul className="footer-list p-0" >
                            <li >
                                <Link className="text-white" href="/">About</Link>
                            </li>
                            <li >
                                <Link className="text-white" href="/">Contact</Link>
                            </li>
                            <li >
                                <Link className="text-white" href="/">Career</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-2 pb-3">
                        <h5 className="font-weight-bold">Help</h5>
                        <ul className="footer-list p-0" >
                            <li >
                                <Link className="text-white" href="/">FAQs</Link>
                            </li>
                            <li >
                                <Link className="text-white" href="/">How it works</Link>
                            </li>
                            <li >
                                <Link className="text-white" href="/">Shipping</Link>
                            </li>
                            <li >
                                <Link className="text-white" href="/">Privacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4 pb-3 ">
                        <h5 className="font-weight-bold">Your Clothes, Your Way</h5>
                        <p>Stylo let's you customize your entire wardrobe by picking your favorite outfits and get a subscription monthly, quaterly and annualy.</p>
                    </div>

                    <div className="col-md-2 pb-3">
                        <h5 className="font-weight-bold">Subscribe</h5>
                        <ul className="footer-list p-0" >
                            <li >
                                <input className="rounded pl-3 pr-3" type="text" placeholder="Enter email" ></input>
                            </li>
                        </ul>
                    </div>

                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-auto">
                        <div className="w-layout-grid grid-9">
                            <img src="https://d33wubrfki0l68.cloudfront.net/c3aab8a28169c46132ca6dc98c1a6eaf9c781e30/658a1/images/image-10_1.png" loading="lazy" width="50" alt="" className="image-27" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/aa0d010551af808086609fa6243cc2b6d6db4a98/b1da7/images/image-11_1.png" loading="lazy" width="50" alt="" className="image-28" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/a48c470b1b61d17b65707870e6439630e287457b/d7bba/images/image-12-1.png" loading="lazy" width="50" alt="" className="image-27" />
                            <img src="https://d33wubrfki0l68.cloudfront.net/bd67168360d111bc8a7c7d100fb3da2c35fb0cb9/97ea2/images/image-13_1.png" loading="lazy" width="50" alt="" className="image-27" />
                        </div>
                        <div className="text-center mt-2 mb-2">
                            &copy; 2022 Stylo, Inc.
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;