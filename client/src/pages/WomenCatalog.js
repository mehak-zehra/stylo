import React, { useState } from 'react';
import CatalogCard from '../components/CatalogCard'

const catalog = [
    {
        category: "women",
        title: "Formal",
        type: "quarterly",
        description: "This is the description of the formal package for women",
        image_url: "https://us.123rf.com/450wm/newdesignillustrations/newdesignillustrations1902/newdesignillustrations190211443/125451487-not-available-stamp-seal-watermark-with-distress-style-blue-vector-rubber-print-of-not-available-tex.jpg?ver=6",
        items: [
            {
                name: "Dress",
                quantity: 2
            },
            {
                name: "Matching Bag",
                quantity: 2
            },
            {
                name: "Shoes",
                quantity: 2
            },
            {
                name: "Scarf",
                quantity: 2
            },
        ],
        price: {
            dollar: "199",
            cents: "99"
        }
    }
]

function WomenCatalog() {

    return (
        <div className="page container">
            <h3 className="secondary-label">available packages :</h3>
            {catalog.map((product) => (
                <CatalogCard product={product} />
            ))}
        </div>
    )
}

export default WomenCatalog;
