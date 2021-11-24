import React from 'react';
import CatalogCard from '../components/CatalogCard'
import Catalog from '../components/CatalogArr'

function WomenCatalog() {

    return (
        <div className="page container">
            <h2 className="lead mt-2">available packages for women</h2>
            {Catalog.filter((product) => product.category == "women").map((product) => (
                <CatalogCard product={product} />
            ))}
        </div>
    )
}

export default WomenCatalog;
